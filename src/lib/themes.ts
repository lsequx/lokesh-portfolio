import { themeId } from "@/lib/site";

// Theme styles live in globals.css under [data-theme="…"]. Keep the ids in
// sync with the dashboard's theme picker.
export const themes = {
  midnight: { defaultMode: "dark" },
  terminal: { defaultMode: "dark" },
  editorial: { defaultMode: "light" },
  sunset: { defaultMode: "dark" },
  minimal: { defaultMode: "light" },
} as const;

export type ThemeId = keyof typeof themes;

export const activeTheme: ThemeId = themeId in themes ? (themeId as ThemeId) : "midnight";
