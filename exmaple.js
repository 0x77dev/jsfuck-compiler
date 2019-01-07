const jsFuck = require("./index");
console.log("eval(" + jsFuck("console.log('Hello, World!')") + ")");