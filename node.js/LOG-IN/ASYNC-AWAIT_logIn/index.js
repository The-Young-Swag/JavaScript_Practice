let username = 'admin';
let password = 'admin';

async function main(){
    try {
        const result = await LogIn();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
main();

function logIn(){
    return new Promise((resolve, reject) => {
        if (username == "admin" &&  password == "admin"){
            resolve("Log In Successful");
        } else {
            reject("Log In Failed");
        }
    },500);
}