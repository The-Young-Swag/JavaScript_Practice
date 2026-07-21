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
                const convertToCelsius = async() => {
                   const temp = Number(await input.question("Convert to Celsius: "));
                   const result = (temp - 32) * (5/9);
                   console.log(`${temp}°F to Celsius is ${result}°C`);
                   
                }
                await convertToCelsius();

            } else if (tempSelect === "2"){
                const convertToFarenheit = async() => {
                    const temp = Number(await input.question("Convert to Farenheit: "));
                    const result = (temp * 9/5) + 32;
                    console.log(`${temp}°C to Farenheit is ${result}°F`);
                 }
                 await convertToFarenheit();
            } else {
                console.log("invalid option")
            }
 
        }
        
    } finally{
        input.close();
    }
}

main();

