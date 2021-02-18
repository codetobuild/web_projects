

let millisec=0;
let sec= 0;
let min =0;
let hr= 0;
let stop;
  
let i=1;
const strt =document.querySelector('.start')
const stp = document.querySelector('.paused');
const reset = document.querySelector('.reset');
const disp =document.querySelector('.display');

function updatetime( hr, min, sec, millisec){
   hr= (hr<10)?'0'+hr:hr;
   min = ( min<10)?'0'+min:min;
   sec=(sec<10)?'0'+sec:sec;
   millisec=(millisec<10)?'0'+millisec:millisec;

    disp.textContent=`${hr}:${min}:${sec}:${millisec}`;

}

function timer(){
    min= (sec>59)?min+1:min;
    hr= (min>59)?hr+1:hr;
    sec= (millisec>9)?sec+1:sec;
     millisec=(millisec>9)?0:millisec;

    // console.log( hr, min, sec,millisec);
    updatetime( hr, min, sec, millisec);

    millisec+=1;
}




strt.addEventListener( 'click' , ()=>{
    stop = setInterval( timer, 100);
     
    stp.removeAttribute('disabled','');
    strt.style.display="none";
    reset.style.display="block";

})

let flag= true;

stp.addEventListener('click', (e)=>{
    if( flag===true)
    {
        clearInterval(stop);
        flag=false;
        stp.textContent="Resume";
    }else
    {
        stop = setInterval( timer, 100);
        flag=true;
        stp.textContent="Paused";

    }
})

reset.addEventListener('click',()=>{
    clearInterval(stop);
    hr=min=sec=millisec=0;
   updatetime( hr, min, sec, millisec);
     
    reset.style.display="none";
    strt.style.display="block";
    stp.setAttribute('disabled','');

})

































