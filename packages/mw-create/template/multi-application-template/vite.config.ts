import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // 加载所有子目录
  const appliction = fs.readdirSync("./appliction");
  // 合并成input入口数组
  const input = Object.fromEntries(
    appliction.map((item) => [
      item,
      path.resolve(`${__dirname}/appliction/${item}/index.html`),
    ])
  );

  return {
    base: "./",
    outDir: "dist",
    plugins: [vue()],
    build: {
      target: "es2015",
      cssCodeSplit: true,
      assetsDir: "appliction",
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          ...input,
        },
        output: {
          entryFileNames: "appliction/[name]/static/[name].[hash].js",
          chunkFileNames: "appliction/[name]/static/[name].[hash].js",
          assetFileNames: "appliction/[name]/static/[name].[hash].[ext]",
        },
      },
    },
  };
});
