'use strict';
var through = require('through-gulp');
module.exports = function(options) {
    var options = options || {
        js: {
            suffix: '.min',
            enable: true
        },
        css: {
            suffix: '.min',
            enable: true
        }
    };
    if (!options.hasOwnProperty("js")) {
        options.js = {
            suffix: '.min',
            enable: true
        }
    }
    if (!options.hasOwnProperty("css")) {
        options.js = {
            suffix: '.min',
            enable: true
        }
    }
    var jsReg = /(<script(?:(?!src=).)*src=(['"]?)(?:(?!min\.js\2\/?>).)*)(?=\.js\2\/?>)/g;
    var cssReg = /(<link(?:(?!href=).)*href=(['"]?)(?:(?!min\.css\2).)*)(?=.css\2)/g;
    var stream = through(function(file, encoding, callback) {
        var strhtml;
        if (typeof options.js.enable != "boolean" || typeof options.css.enable != "boolean") {
            callback(new Error("The type of enable must be set to boolen"),undefined);
        }
        if ((options.js.enable && typeof options.js.suffix != "string") || (options.css.enable && typeof options.css.suffix != "string")) {
            callback(new Error("The type of suffix must be set to string"),undefined);
        }
        if (file.isNull()) {
            return callback(null, file);
        }
        if (file.isBuffer()) {
            strhtml = file.contents.toString();
            if (options['js'].enable) {
                strhtml = strhtml.replace(jsReg, '$1' + options['js'].suffix);
            }
            if (options['css'].enable) {
                strhtml = strhtml.replace(cssReg, '$1' + options['css'].suffix);
            }
            file.contents = new Buffer(strhtml);
        }
        this.push(file);
        callback();
    });
    return stream;
};
