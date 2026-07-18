
sum(displayResult, 1, 2);

function sum(callback, x, y){
let result = x + y;
    callback(result);
}

function displayResult(result){
    console.log(result);
}