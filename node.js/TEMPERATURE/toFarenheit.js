function toFarenheit(temp){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = (temp * 9/5) + 32;
            resolve(result);
        },500);

    });

}

module.exports = toFarenheit;
