import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [
   ...compat.extends("next/core-web-vitals", "next/typescript"),
   ...compat.extends("prettier"),
   {
      plugins: {
         eslint: eslintPlugin,
         prettier: prettierPlugin,
      },
      rules: {
         "prettier/prettier": "error",
      },
      ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "*.config.js", "*.config.mjs"],
   },
   {
      ignores: ["next-env.d.ts", ".next/**", "out/**", "build/**"],
   },
];

export default eslintConfig;
