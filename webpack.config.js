var path = require("path");

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        path.resolve(__dirname, "dev/app.js")
    ],
    output: {
        path : path.resolve(__dirname,'out'),
        filename: "bundle.js"
    }
};