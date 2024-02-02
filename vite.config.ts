import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import EnvironmentPlugin from "vite-plugin-environment";

const NODE_ENV = "development";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "./app") }],
    },
    build: {
      sourcemap: true,
    },
    test: {
      include: ["**/*.test.ts"],
      globals: true,
    },
    plugins: [react(), tsconfigPaths(), EnvironmentPlugin({ NODE_ENV })],
  };
});
