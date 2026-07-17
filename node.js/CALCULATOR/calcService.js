function calculate(a, b, operator) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // simulates network delay
        switch (operator) {
          case "+": return resolve(a + b);
          case "-": return resolve(a - b);
          case "*": return resolve(a * b);
          case "/":
            if (b === 0) return reject(new Error("Cannot divide by zero"));
            return resolve(a / b);
          default:
            return reject(new Error(`Unknown operator: ${operator}`));
        }
      }, 500); // 500ms fake latency
    });
  }
  
  module.exports = { calculate };