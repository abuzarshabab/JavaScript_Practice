function serial(asyncFunctions) {
    return asyncFunctions.reduce(function(functionChain, nextFunction) {
        return functionChain.then(
            (previousResult) => nextFunction(previousResult)
        );
    }, Promise.resolve());
}

serial([parameterValidation, dbQuery, serviceCall ])
   .then((result) => console.log(`Operation result: ${result}`))
   .catch((error) => console.log(`There has been an error: ${error}`))