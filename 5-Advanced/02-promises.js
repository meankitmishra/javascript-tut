const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task completed');
        console.log(resolve);
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
})

new Promise((resolve, reject)=>[
    setTimeout(()=>{
        console.log("Async task 2 completed");
        resolve()
    },1000)
    
]).then(()=>{
    console.log('2nd Promise consumed');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username: 'chai', email: 'chai@chaiaurcode.com'})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = ture;
        if(!error){
            resolve({username: 'chai', email: 'chai@chaiaurcode.com'})
        }else{
            reject('ERROR')
        }
        
        
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>console.log(error))
.finally(()=>{
    console.log('the promise ios either resolved and rejected');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = ture;
        if(!error){
            resolve({username: 'JAVASCRIPT', password: '121'})
        }else{
            reject('ERROR')
        }
    },1000)
})

async function ConsumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response); 
    }
    catch{
        console.log(error);
    }
}

ConsumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all 
// can take multiple promises at a time using promise.all([array of promises])
