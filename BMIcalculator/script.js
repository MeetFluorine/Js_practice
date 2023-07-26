document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const h =  parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    let display = document.querySelector('.result');

    if(h === '' || h<0 || isNaN(h) ){
        display.innerHTML= "please enter a valid height"
    }
    if(w === '' || w<0 || isNaN(w) ){
        display.innerHTML= "please enter a valid weight"
    }
     
    // convert

    else{
        const bmi = w/((h**2)/10000).toFixed(2)
        display.innerHTML = bmi;
    }

})