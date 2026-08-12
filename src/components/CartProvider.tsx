"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CATALOG, getCatalogItem, type CatalogItem } from "@/lib/site";

export type CartLine = {
  id: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  items: (CatalogItem & { qty: number })[];
  count: number;
  estimatedTotal: number | null;
  hasCustomPricing: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (id: string, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "technexus-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = useCallback((id: string, qty = 1) => {
    if (!getCatalogItem(id)) return;
    setLines((prev) => {
      const existing = prev.find((line) => line.id === id);
      if (existing) {
        return prev.map((line) =>
          line.id === id ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [...prev, { id, qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((line) => (line.id === id ? { ...line, qty } : line))
        .filter((line) => line.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const items = useMemo(
    () =>
      lines
        .map((line) => {
          const item = CATALOG.find((c) => c.id === line.id);
          return item ? { ...item, qty: line.qty } : null;
        })
        .filter(Boolean) as (CatalogItem & { qty: number })[],
    [lines],
  );

  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );

  const hasCustomPricing = items.some((item) => item.priceValue === null);

  const estimatedTotal = useMemo(() => {
    if (items.length === 0) return 0;
    if (hasCustomPricing) return null;
    return items.reduce(
      (sum, item) => sum + (item.priceValue ?? 0) * item.qty,
      0,
    );
  }, [items, hasCustomPricing]);

  const value: CartContextValue = {
    lines,
    items,
    count,
    estimatedTotal,
    hasCustomPricing,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen((v) => !v),
    addItem,
    removeItem,
    setQty,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
