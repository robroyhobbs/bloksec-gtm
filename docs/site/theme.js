const THEME_KEY = "bloksec-theme";
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

const getStoredTheme = () => localStorage.getItem(THEME_KEY);

const getResolvedTheme = (theme) => {
  if (theme === "light" || theme === "dark") {
    return theme;
  }

  return themeMedia.matches ? "dark" : "light";
};

const applyTheme = (theme) => {
  const resolvedTheme = getResolvedTheme(theme);
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    button.dataset.themeState = resolvedTheme;
    button.setAttribute("aria-pressed", String(resolvedTheme === "dark"));
    button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    button.textContent = nextTheme === "dark" ? "Dark mode" : "Light mode";
  });
};

const syncWithSystemTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme !== "light" && storedTheme !== "dark") {
    applyTheme(null);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getStoredTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });
});

if (typeof themeMedia.addEventListener === "function") {
  themeMedia.addEventListener("change", syncWithSystemTheme);
} else if (typeof themeMedia.addListener === "function") {
  themeMedia.addListener(syncWithSystemTheme);
}
