const { EntryDependency } = require("@rspack/core");
const path = require("path");
module.exports = function (source) {
  if (this.resourcePath.endsWith(path.join(__dirname, "entry.js"))) {
    return source;
  }

  const dep = new EntryDependency("./entry.js");
  this._compilation.addEntry(__dirname, dep, { name: "entry" }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("disk entry added");
    }
  });
  return source;
};
