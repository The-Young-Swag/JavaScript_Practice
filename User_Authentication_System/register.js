const accounts = require("./accounts")

function register(username, name, email, password){

    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let account;

            for (let i = 0; i < accounts.length; i++){
                if (accounts[i].username === username)
                {
                    reject("Username Already Exists!");
                    return;
                }
            }
                const newAccount = {
                    id: accounts.length + 1,
                    username: username,
                    name: name,
                    email: email,
                    password: password
                };
                
                accounts.push(newAccount);

                resolve({
                    message: "Registration Successful",
                    id: newAccount.id,
                    name: newAccount.name
                })

        }, 500);

    });
}

module.exports = register;