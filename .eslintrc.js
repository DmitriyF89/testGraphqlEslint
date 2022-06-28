module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      processor: "@graphql-eslint/graphql",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ]
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/match-document-filename": [
          "error",
          { query: "snake_case" }
        ]
      }
    }
  ]
};
