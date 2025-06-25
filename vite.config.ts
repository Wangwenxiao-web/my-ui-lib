import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: "src/types/auto-imports.d.ts",
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
