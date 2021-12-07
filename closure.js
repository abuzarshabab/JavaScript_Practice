// Using Common Function
const greet1 = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
// Calling common method with closure
const greeterHey = greet1('hey');
console.log(greeterHey)
greeterHey('Abuzar');
greeterHey('Steven');
greet1('Somesh')('Priyanshu')

// Using Arrow function 
const greet2 = text1 => {
    return text2 => console.log(`Greeting From arrow Functions ${text1} and ${text2}`);
}
// calling Arrow functions
greet2('abuzar')('shabab');
