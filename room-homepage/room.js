

 
 const list =document.querySelector('ul');

const menu =document.querySelector('.hamburger');

var flag=true;

menu.addEventListener('click' , (e)=>{
   
    menu.classList.toggle('cross');

   if(flag===true)
   {  
     menu.setAttribute('src','./images/icon-close.svg');
     list.style.display="block";
     flag=false;
    } 
    else
    {
        list.style.display="none";
     menu.setAttribute('src','./images/icon-hamburger.svg');
     flag = true;
    }

})