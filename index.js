const jsfuck = require("jsfuck").JSFuck.encode;
module.exports = (js) => {
    /**
     * @param {string} js JavaScript code to encode.
     */
    return jsfuck(js);
};