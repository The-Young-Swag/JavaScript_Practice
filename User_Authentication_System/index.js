const readline = require("readline/promises");
const logIn = require("./logIn.js");
const register = require("./register.js")

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    try {

        while (true){ 

            const action = await input.question("LogIn or Register, or Exit: ");
    
            const option = action.toLowerCase();
    
            if (option === 'login'){
    
                const username = await input.question("Username: ");
                const password = await input.question("Password: ");
    
                try {
                    const result = await logIn(username, password);
                    console.log(`Welcome, ${result.name}!`);
                    break;
                } catch (error) {
                    console.log(error);
                }
    
            } else if (option === "register") {
    
                const username = await input.question("Username: ");
                const name = await input.question("name: "); 
                const email = await input.question("email: "); 
                const password = await input.question("Password: "); 
    
                try {
                    const result = await register(
                        username, 
                        name, 
                        email, 
                        password);
    
                    console.log(`${result.name} Successfully Registered!`);
                    break;
    
                } catch (error) {
                    console.log(error);
                }
    
    
            } else if (option === "exit"){
                console.log("Goodbye!");
                break;
            
            } else {
                console.log("invalid option.");
            }
    
        }

    } finally {
        input.close();
    }

}

main();