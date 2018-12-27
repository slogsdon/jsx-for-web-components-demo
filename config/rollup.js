import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./index.tsx",
  output: {
    file: "./index.js",
    format: "iife",
  },
  plugins: [
    resolve({
      extensions: [ '.js', '.ts', '.tsx' ],
    }),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};
