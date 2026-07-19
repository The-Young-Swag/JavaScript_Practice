
function logIn(username, password){


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (username == "admin" &&  password == "admin"){
                resolve("Log In Successful");
            } else {
                reject("Log In Failed");
            }
        },500);
       
    });
}

module.exports = logIn;