 

 
 const input=document.querySelectorAll('input');

 function setChange()
  {
//   console.log( this.value+this.dataset.nm);

  const suffix=(this.dataset.nm)? this.dataset.nm : ''; 
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);

 }

 input.forEach( inp => inp.addEventListener('input', setChange))

 const copy = document.querySelector('.copy-icon');
 const tooltip =document.querySelector('.tooltip');

 const textarea= document.querySelector('textarea');
 copy.addEventListener('click', (e)=>{
 
   textarea.select();
   document.execCommand('copy');
   tooltip.style.visibility="visible";
   setTimeout( ()=>{
      tooltip.style.visibility="hidden";

   },200)
    console.log(textarea.value);
 })

 


 