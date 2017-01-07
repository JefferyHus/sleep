async function sleep (duration) {
    return new Promise( (resolve) => window.setTimeout(() => {
        resolve();
    }, duration) );
}