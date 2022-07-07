import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import typescript from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
        },
      }),
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "ViteLibTreeshakingTest",
      fileName: (format) => `vite-lib-treeshaking-test.${format}.js`,
    },
  },
});
