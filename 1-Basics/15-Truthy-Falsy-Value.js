const username = "ankit"

if (username) {
    console.log("username: ",username);
} else {
    console.log("didnt get the username");
}

//falsy value 
// 0 , -0 , false , null , "" , undefined , NaN , BigInt 0n

// truhy value 
// "0" , "false" , " " , [], {} , function(){}

const arr = []

if(arr.length === 0){
    console.log("the array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("the object is empty");
}
