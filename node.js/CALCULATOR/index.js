const readline = require("readline/promises");
const { calculate } = require("./calcService");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  while (true) {
    const input = await rl.question("Enter expression (e.g. 10 + 5), or 'exit': ");
    if (input.trim().toLowerCase() === "exit") break;

    const [a, operator, b] = input.trim().split(" ");

    try {
      const result = await calculate(Number(a), Number(b), operator);
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  rl.close();
}

run();