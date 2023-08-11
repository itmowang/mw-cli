const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
module.exports = {
  input: "./bin/index.ts",
  output: {
    file: "./dist/build.js",
    format: "umd",
  },
  plugins: [resolve(), commonjs()],
};
