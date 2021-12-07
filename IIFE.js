

function show() {
    console.log('printed success')
}

(function () {
    console.log('Immidietely invoked Function')
})();

(() => {
    console.log('Arrow function invocation immediately');
})();