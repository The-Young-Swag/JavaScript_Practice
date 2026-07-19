const accounts = [
    {
        id:1, 
        name: 'admin',
        password: 'admin' 
    },
    {   id:2,
        name: 'trevor_mundo',
        password: 'admin'    
    }

]


function logIn(username, password){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const account = accounts.find((user) =>{
                return (
                    user.name === username && 
                    user.password === password
                );

            });

            if (account){
                resolve("Log In Successful");
             } else {
                reject("Log In Failed");
             }
        },500);
       
    });
}

module.exports = logIn;