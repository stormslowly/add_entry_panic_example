const { EntryDependency } = require("@rspack/core");
const path = require("path");
module.exports = function (source) {
  if (this.resourcePath.endsWith(path.join(__dirname, "entry.js"))) {
    return source;
  }
  const { storage } = this.getOptions();
  storage["entry"] = {
    name: "entry",
    path: "./entry.js",
  };

  return source;
};
