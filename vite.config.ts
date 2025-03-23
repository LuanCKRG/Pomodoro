import { defineConfig } from "vite"
import path from "path"

import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: "/Pomodoro/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    tailwindcss()
  ],
})
