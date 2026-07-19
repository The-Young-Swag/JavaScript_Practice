const readline = require("readline/promises");
const logIn = require("./logIn.js");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function main() {

    const username = await input.question("Username: ");
    const password = await input.question("Password: ");

    try {
        const result = await logIn(username, password);
        console.log(result);

    } catch (error) {
        console.log(error);
    }
    input.close();
}

main();