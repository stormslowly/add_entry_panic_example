import { defineConfig } from "@rspack/cli";
import { EntryDependency } from "@rspack/core";
const storage = {};

export default defineConfig({
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "./entryLoader.js",
        options: {
          storage, // store all the entries to add
        },
      },
    ],
  },
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.finishMake.tapAsync(
          "FinishMakeExample",
          (compilation, cb) => {
            // add the entries from the storage
            let e = storage["entry"];
            const dep = new EntryDependency(e.path);
            compilation.addEntry("", dep, { name: e.name }, (err) => {
              cb(err);
            });
          },
        );
      },
    },
  ],
  experiments: {
    // useInputFileSystem: false,
  },
});
