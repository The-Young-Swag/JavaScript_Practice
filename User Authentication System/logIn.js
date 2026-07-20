const accounts = require("./accounts")

function logIn(username, password){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let account;

            for (let i = 0; i < accounts.length; i++){
                if (accounts[i].name === username &&
                    accounts[i].password === password
                ){
                    account = accounts[i];
                    break;
                }
            }

            if (account){
                resolve({ message: "Log In Successful", 
                    id: account.id, 
                    name: account.name 
                });
            } else {
                reject("Log In Failed");
             }
        },500);
       
    });
}

module.exports = logIn;