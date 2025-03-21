import { rootElement } from "@/dom/elements"

export function handleTheme(newTheme: "red" | "light-blue" | "dark-blue") {
  const currentTheme = rootElement.getAttribute("data-theme")

  if (currentTheme === newTheme) return

  rootElement.setAttribute("data-theme", newTheme)
}