"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type TimeTheme = "light" | "dark";

type TimeThemeContextValue = {
  theme: TimeTheme;
  /** True when local time is in the night window (18:00–05:59). */
  isNight: boolean;
};

const TimeThemeContext = createContext<TimeThemeContextValue>({
  theme: "light",
  isNight: false,
});

/** Black: 18:00–05:59 · White: 06:00–17:59 (local time). */
export function getThemeForDate(date = new Date()): TimeTheme {
  const hour = date.getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

function msUntilNextThemeChange(date = new Date()) {
  const next = new Date(date);
  const hour = date.getHours();

  if (hour >= 6 && hour < 18) {
    next.setHours(18, 0, 0, 0);
  } else if (hour >= 18) {
    next.setDate(next.getDate() + 1);
    next.setHours(6, 0, 0, 0);
  } else {
    next.setHours(6, 0, 0, 0);
  }

  return Math.max(1000, next.getTime() - date.getTime());
}

function applyTheme(theme: TimeTheme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function TimeThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<TimeTheme>("light");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    const sync = () => {
      const nextTheme = getThemeForDate();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    sync();

    const scheduleBoundary = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sync();
        scheduleBoundary();
      }, msUntilNextThemeChange());
    };

    scheduleBoundary();
    intervalId = setInterval(sync, 60_000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isNight: theme === "dark",
    }),
    [theme],
  );

  return (
    <TimeThemeContext.Provider value={value}>
      {children}
    </TimeThemeContext.Provider>
  );
}

export function useTimeTheme() {
  return useContext(TimeThemeContext);
}
