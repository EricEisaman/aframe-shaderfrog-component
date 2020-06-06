import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";
import json from "rollup-plugin-json";
import { string } from "rollup-plugin-string";

const prod = Boolean(process.env.PROD==1);
const version = process.env.npm_package_version;
const name = process.env.npm_package_name;
let i, o;
i = "src/main.js";
o = prod 
      ? `dist/${version}/${name}.min.js`
      : `public/staging/${name}.js`;

console.log("prod: ", prod);
console.log("version: ", version);
console.log("i: ", i);
console.log("o: ", o);

export default {
  input: i,
  output: {
    file: o,
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,//!prod,
    name: name
  },
  plugins: [
    json(),
    string({
      // Required to be specified
      include: "**/*.html",
      // Undefined by default
      exclude: ["**/index.html"]
    }),
    css({ output: "public/bundle.css" }),
    //resolve(), // tells Rollup how to find date-fns in node_modules
    //cleanup({comments: 'none'}),
    prod && terser() // minify, but only in production
  ]
};
