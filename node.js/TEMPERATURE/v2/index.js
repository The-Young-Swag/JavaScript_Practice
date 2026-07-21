const toCelsius = require("./toCelsius");
const toFahrenheit = require("./toFahrenheit");
const readline = require("readline/promises");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fahrenheitMenu() {
    while (true) {
        const answer = await input.question(
            "\nEnter Fahrenheit (or type 'return'): "
        );

        if (answer.toLowerCase() === "return") {
            break;
        }

        const temp = Number(answer);

        if (isNaN(temp)) {
            console.log("Please enter a valid number.");
            continue;
        }

        try {
            const result = await toCelsius(temp);
            console.log(`${temp}°F = ${result}°C`);
        } catch (error) {
            console.log(error);
        }
    }
}

async function celsiusMenu() {
    while (true) {
        const answer = await input.question(
            "\nEnter Celsius (or type 'return'): "
        );

        if (answer.toLowerCase() === "return") {
            break;
        }

        const temp = Number(answer);

        if (isNaN(temp)) {
            console.log("Please enter a valid number.");
            continue;
        }

        try {
            const result = await toFahrenheit(temp);
            console.log(`${temp}°C = ${result}°F`);
        } catch (error) {
            console.log(error);
        }
    }
}

async function main() {
    try {
        while (true) {
            console.log("\n====== Temperature Converter ======");
            console.log("1. Fahrenheit → Celsius");
            console.log("2. Celsius → Fahrenheit");
            console.log("3. Exit");

            const option = await input.question("Select an option: ");

            switch (option) {
                case "1":
                    await fahrenheitMenu();
                    break;

                case "2":
                    await celsiusMenu();
                    break;

                case "3":
                    console.log("Goodbye!");
                    return;

                default:
                    console.log("Invalid option.");
            }
        }
    } finally {
        input.close();
    }
}

main();