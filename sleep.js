"use strict";

var _lodash = require("lodash");

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

async function sleep(duration) {
    // check if any call back has been sent
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(_.rest(args));
    if (args.length && typeof args[args.length - 1] === "function") {
        _callback = args.prop();
    } else if (typeof args[args.length - 1] === "string") {
        _functionName = args.prop();
        // create the arguments
        var argsToArray = _.toArray(args);
        // call the function and send arguments
        window[_functionName](_.rest(argsToArray)).promise().done(function () {
            console.log("fi");
        });
    }

    console.log(arguments);

    return new Promise(function (resolve) {
        return window.setTimeout(function () {
            resolve();
        }, duration);
    });
}

//# sourceMappingURL=sleep.js.map