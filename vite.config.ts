import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/tailwind-form-assignment/",
  plugins: [tailwindcss()],
});
