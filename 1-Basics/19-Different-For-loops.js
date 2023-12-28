// for of. // can be used on string, array, map

let greetings = "Hello World!"

for (const greet of greetings) {
    console.log(greet);
}

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('UK', 'United Kingdom')

console.log(map);

for (const key of map) {
    //console.log(key)
    console.log(key[1]);
}

for (const [key,value] of map){
    console.log(key+" :- " + value);
} 

//for in 

const myObj = {
    js : 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by Apple'
}

for (const key in myObj) {
    // console.log(myObj[key]);
    console.log(`${key} is shortcut for ${myObj[key]}`);
}

const programming = ['js', 'java', 'rust' , 'golang' , 'python']

// for (const language in programming) {
//     console.log(programming[language]);
// }


//for each
programming.forEach((language)=>{
    console.log(language);
})

programming.forEach((item , index , arr)=>{
    console.log(item , index , arr);
})

const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'js'
    },
    {
        languageName: 'java',
        languageFile: 'java'
    },
    {
        languageName: 'python',
        languageFile: 'py'
    },
    {
        languageName: 'c++',
        languageFile: 'cpp'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})