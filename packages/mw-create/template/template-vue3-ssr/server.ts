import fs from "node:fs";
import path from "node:path";
import express from "express";

export const createServer = async (root = process.cwd(), isPort) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log(__dirname);
  const resolve = (p) => path.resolve(__dirname, p);
  console.log(resolve);
  const index = fs.readFileSync(resolve("dist/client/index.html"), "utf-8");

  const app = express()

  let vite;

  vite = await()

  return "";
};
