let change;

const changeColor = function (){
    if(!change){
        change = setInterval(()=>{
            const hex = '0123456789ABCDEF'
    
            let randomValue = '#';
    
            for(i=0;i<6;i++){
                randomValue += hex[Math.floor(Math.random()*16)]
            }
            document.querySelector('body').style.backgroundColor=randomValue
            
        },1000)
    }
    
}

document.querySelector('#start').addEventListener('click',changeColor)


document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(change)
    change = null;
})