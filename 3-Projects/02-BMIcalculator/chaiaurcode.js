const form = document.querySelector('form')
// this use case will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.appendChild(document.createTextNode(`please enter a valid height`))
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.appendChild(document.createTextNode(`please enter a valid weight`))
    }else{
        results.appendChild(document.createTextNode((weight/((height**2)/10000)).toFixed(2)))
    }
    

}) 