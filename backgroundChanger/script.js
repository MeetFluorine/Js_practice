const buttons =document.querySelectorAll('.button');


buttons.forEach( (btn)=>{
  btn.addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target.id === 'gray'){
        document.body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'black'){
        document.body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'pink'){
        document.body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'orange'){
        document.body.style.backgroundColor = e.target.id
    }
    
  })  
})