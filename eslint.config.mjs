import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      indent: ["error", 2],
      "import/extensions": ["error", "ignorePackages", {
        tsx: "never",
        ts: "never",
      }],
    },
  }
];

export default config;
