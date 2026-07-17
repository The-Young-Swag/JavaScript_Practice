let didStudy = true; 
function study(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (didStudy===true){
                resolve("You studied!")
            } else {
                reject("you haven't studied yet");
            }
        }, 500);

    });
}

study()
    .then((result)=> console.log("Success: ", result))
    .catch((error)=> console.log("Error: ", error));

