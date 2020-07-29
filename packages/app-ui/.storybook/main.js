const path = require("path");

module.exports = {
  stories: ["../**/*.stories.mdx", "../src/**/*.stories.(tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.alias = {
      "@theme": path.resolve(__dirname, "../src/core/theme"),
      "@core": path.resolve(__dirname, "../src/core"),
    };
    return config;
  },
};
