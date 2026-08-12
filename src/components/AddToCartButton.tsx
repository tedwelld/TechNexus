"use client";

import { useCart } from "./CartProvider";
import { PiIcon } from "./PiIcon";

export function AddToCartButton({
  itemId,
  label = "Add to cart",
  variant = "primary",
  className = "",
}: {
  itemId: string;
  label?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const { addItem, items } = useCart();
  const inCart = items.some((item) => item.id === itemId);

  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "light"
        ? "btn-light"
        : "btn-secondary";

  return (
    <button
      type="button"
      onClick={() => addItem(itemId)}
      className={`btn ${variantClass} ${className}`}
    >
      <PiIcon name={inCart ? "plus" : "shopping-cart"} />
      {inCart ? "Add another" : label}
    </button>
  );
}
