module.exports = {
  stories: ["../src/**/*.stories.[tj]s", "../src/**/*.stories.[tj]sx"],
  addons: ["@storybook/preset-typescript"],
  excludeStories: ["node_modules", "cypress", "dist", ".cache", ".storybook"],
};
