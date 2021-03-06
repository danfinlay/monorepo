import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";

import pkg from "./package.json";
const globals = {
  ethers: "ethers",
  lodash: "_"
};

export default {
  input: "index.ts",
  output: [
    {
      file: pkg.main,
      sourcemap: true,
      format: "cjs",
      globals: globals
    },
    {
      file: pkg.module,
      sourcemap: true,
      format: "es",
      globals: globals
    },
    {
      file: pkg.iife,
      format: "iife",
      sourcemap: true,
      name: "counterfactualWallet",
      globals: globals
    }
  ],
  external: ["@counterfactual/machine", "ethers"],
  plugins: [
    json({
      compact: true,
      preferConst: true
    }),
    typescript({
      typescript: require("typescript")
    })
  ]
};
