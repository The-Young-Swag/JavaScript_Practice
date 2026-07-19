let username = 'admin';
let password = 'admin';

LogIn()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

function LogIn(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(username == "admin" && password == "admin"){
                resolve("Log In Successful")
            } else {
                reject("Log In Failed")
            }
        }, 500);
    });
}


