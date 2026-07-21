function toCelsius(temp){

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const temp = Number(await input.question("Convert to Celsius: "));
            const result = (temp - 32) * (5/9);
        },500);
    });

}

module.exports = toCelsius;