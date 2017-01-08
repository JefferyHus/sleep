"use strict";

async function sleep(duration) {
    // check if any call back has been sent
    var args = Array.prototype.slice.call(arguments, 1);

    if (args.length && typeof args[args.length - 1] === "function") {
        _callback = args.pop();
    }

    // if not then check if it is a string
    args = args.slice(0, 1).map(function (i) {
        return i;
    });

    if (args.length && typeof args[args.length - 1] === "string") {
        var _functionName = args.pop();

        // create the arguments
        var argsToArray = Array.prototype.slice.call(arguments).slice(2);

        // set the function body
        var fn = window[_functionName];

        if (typeof fn !== "function") throw new Error("The function: " + _functionName + " does not exist");

        // call the function and send arguments
        return new Promise(function (resolve, reject) {
            return window.setTimeout(function () {
                resolve(fn.apply(null, argsToArray));
            }, duration);
        });
    }

    return new Promise(function (resolve, reject) {
        return window.setTimeout(function () {
            resolve();
        }, duration);
    });
}

//# sourceMappingURL=sleep.js.map