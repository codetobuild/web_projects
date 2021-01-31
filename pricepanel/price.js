
const price = document.querySelector('.price');

const slider= document.querySelector('#myrange');
price.innerHTML=`$ ${slider.value}.00`


 
slider.addEventListener('input' , (e)=>{
    console.log(slider.value);
    price.innerHTML=`$ ${slider.value}.00`;

 
})


const btn= document.querySelector('.circle')

btn.addEventListener('click', (e)=>{
 
    const parent =   e.target.parentNode;
   
      btn.classList.toggle('circle-on');

     if(  btn.classList.contains('circle-on'))
     {
      parent.style.backgroundColor="dodgerblue";
     }
     else{
        parent.style.backgroundColor="rgb(201, 201, 201)";
     }
})












