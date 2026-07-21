function toCelsius(temp){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const result = (temp - 32) * (5/9);
            resolve(result);
        },500);
    });

}

module.exports = toCelsius;