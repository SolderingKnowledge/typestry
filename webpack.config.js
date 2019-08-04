//webpack usually has 4 main things
const path = require("path");
module.exports = {
    entry: "./src/index.tsx",//our app will be called from this file
    output: {
        path:path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {},
    plugins: []
}