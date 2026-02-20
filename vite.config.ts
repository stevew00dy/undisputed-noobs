import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/undisputed-noobs/",
  plugins: [tailwindcss()],
});
