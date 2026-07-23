const accounts = require("./accounts");

function logIn (username, pin) {

    return new Promise((resolve, reject) =>{

        setTimeout( () => {
            let account;

            for(let i = 0; i < accounts.length; i++){
                if (accounts[i].username === username &&
                    accounts[i].pin === pin
                ){
                    account = accounts[i];
                    break
                }

            }

            if (account){

                resolve({message: `Welcome ${username}`, 
                        id: account.id, 
                        name: account.name });
            
            }else {
                reject("Log In Failed")
            }

        },500)

    });


}