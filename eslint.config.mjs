import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused-vars rule globally
      "react/no-unescaped-entities": "off", // Disable unescaped entities rule globally
    },
    overrides: [
      {
        files: ["src/app/shop/[slug]/page.tsx", "src/components/Card.tsx"],
        rules: {
          "@typescript-eslint/no-unused-vars": "off", // Disable for these files
        },
      },
      {
        files: ["src/components/ProductDetailInfoSection.tsx"],
        rules: {
          "react/no-unescaped-entities": "off", // Disable for this file
        },
      },
    ],
  },
];

export default eslintConfig;
