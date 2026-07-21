const toCelsius = require("./toCelsius");
const toFarenheit = require("./toFarenheit");
const readline = require("readline/promises");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){
    try{

        while(true){
            const tempSelect = await input.question("\nSelect 1 to convert F to C\nSelect 2 to convert C to F: ");

            if (tempSelect === "1"){
                const temp = Number(await input.question("Convert to Celsius: "));
                
                try{
                    const result = await toCelsius(temp);
                    console.log(`The result is: ${result}`)

                } catch (error){
                    console.log(error)
                }

            } else if (tempSelect === "2"){
                const temp = Number(await input.question("Convert to Farenheit: "));

                try{
                    const result = await toFarenheit(temp);
                    console.log(`The result is ${result}`);

                }catch(error){
                    console.log(error)

                }

            } else {
                console.log("invalid option")
            }
 
        }
        
    } finally{
        input.close();
    }
}

main();

