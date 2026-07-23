const readline = require("readline/promises");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){
    
        while (true){
            const username = await input.question("Username: ")
            const pin = await input.question("Enter Pin: ");

            try{
                const result = await logIn(username, pin);
                const action = await input.question("1. Check Balance\n 2.Deposit\n 3. Withraw\n 4. Exit ");

            } catch (error) {
                console.log(error)
            }
        }

 
}