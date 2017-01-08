"use strict";

import * as _ from "lodash";

async function sleep (duration) {
    // check if any call back has been sent
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(_.rest(args));
    if ( args.length && typeof args[ args.length - 1 ] === "function" )
    {
        _callback = args.prop();
    }
    else if ( typeof args[ args.length - 1 ] === "string" )
    {
        _functionName = args.prop();
        // create the arguments
        let argsToArray = _.toArray( args );
        // call the function and send arguments
        window[ _functionName ]( _.rest(argsToArray) ).promise().done(
            function () {
                console.log( "fi" );
            }
        );
    }

    console.log(arguments);

    return new Promise( (resolve) => window.setTimeout(() => {
        resolve();
    }, duration) );
}