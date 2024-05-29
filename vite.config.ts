import { UserConfig, defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: { alias: { src: resolve('src/') } },
  server: {
    open: true,
  },
} satisfies UserConfig)
