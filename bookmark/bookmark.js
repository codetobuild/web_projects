
document.onreadystatechange = function() { 
   if (document.readyState !== "complete") { 
       document.querySelector("body").style.visibility = "hidden"; 
       document.querySelector("#loading").style.visibility = "visible"; 
   } else { 
       document.querySelector("#loading").style.display = "none"; 
       document.querySelector("body").style.visibility = "visible"; 
   } 
}; 


const menu = document.querySelector('.hamburger');
const menuLinks =document.querySelector('.links');

menu.addEventListener('click' , ()=>{
   menu.classList.toggle('open');
   menuLinks.classList.toggle('reveal-menu');
})


const links=Array.from(menuLinks.children) ;

links.forEach( ele => ele.addEventListener('click', (e)=>{
   menu.classList.toggle('open');
   menuLinks.classList.toggle('reveal-menu');
}))


const arrow= document.querySelectorAll('.arrow');

arrow.forEach( ele => ele.addEventListener('click', e=>{
  
   var answer = ele.parentNode.parentNode.children[1];
   
   answer.classList.toggle('open');
     ele.classList.toggle('upward');
   console.log(  answer );
}))

