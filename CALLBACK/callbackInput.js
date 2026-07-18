sum(displayResult);

function sum(callback) {
    const x = Number(prompt("Input x:"));
    const y = Number(prompt("Input y:"));

    const result = x + y;
    callback(result);
}

function displayResult(result) {
    console.log(result);
}