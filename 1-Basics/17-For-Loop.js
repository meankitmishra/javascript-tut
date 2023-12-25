// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for



for(let i = 1; i<=20 ; i++){
    if(i===5){
        console.log("5 detected");
        break; // it ends the for loop 
    }
    console.log(i);
}


for(let i = 1; i<=20 ; i++){
    if(i===5){
        console.log("5 detected");
        continue; // it ends that particular iteration 
    }
    console.log(i);
}

