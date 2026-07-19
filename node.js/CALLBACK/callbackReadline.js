const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(callback) {
    rl.question("Input x: ", (x) => {
        rl.question("Input y: ", (y) => {
            const result = Number(x) + Number(y);
            callback(result);
            rl.close();
        });
    });
}

function displayResult(result) {
    console.log("Result:", result);
}

sum(displayResult);