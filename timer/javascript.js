


let stopCount;


const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const inpt = document.querySelector('#minute');
const currtime= document.querySelector('.currtime');

// inpt.addEventListener('' , (e)=>{
    
// })

let min;
let sec=-1;

function count( )
{
    
    min = (sec<0)?(min-1):min;
   
    sec = (sec<0)?59:sec;
    
    const currmin= (min<10)?'0'+min:min;
    const currsec=(sec<10)?'0'+sec:sec;

    currtime.textContent=currmin+':'+currsec;

    console.log( min, sec);
      if(min===0 && sec===0){ clearInterval(stopCount)}

    sec=sec-1;
}


reset.addEventListener('click' , ()=>{
    start.style.display="block";
    inpt.style.display="block";
    reset.style.display="none";
    clearInterval(stopCount);
    currtime.textContent="00:00";
})

start.addEventListener('click', ()=>{
    min=inpt.value;
     inpt.value='';
 
     if(min>0 && min <61)
     {
        start.style.display="none";
        inpt.style.display="none";
        reset.style.display="block";

        stopCount =  setInterval(count, 1000);
     }
})


 










