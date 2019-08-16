const path = require('path')

module.exports = {
    resolve: {
        alias: {
            "@img": path.resolve(__dirname, "./src/img"),
            "@componenrs": path.resolve(__dirname, "./src/components"),
            "@css": path.resolve(__dirname, "./css")
        }
    }
}