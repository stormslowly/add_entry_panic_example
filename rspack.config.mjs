import { defineConfig } from "@rspack/cli";

export default defineConfig({
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "./entryLoader.js",
        options: {
          // loader options
          // virtualModules,
        },
      },
    ],
  },
  // plugins: [virtualModules],
  experiments: {
    // useInputFileSystem: false,
  },
});
