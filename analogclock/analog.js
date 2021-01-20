 

setInterval( setClock, 1000);

const hourhand=document.querySelector('[hour-hand]');

const minutehand=document.querySelector('[minute-hand]');

const secondhand=document.querySelector('[second-hand]');


/*main function to calculate ration */
function setClock(){
   const currDate=new Date();
    const secRatio=currDate.getSeconds()/60;
    const minuteRatio= ( secRatio + currDate.getMinutes())/60;
    const hourRatio= ( minuteRatio + currDate.getHours())/12;
  
 
    setRotation( secondhand, secRatio);

    setRotation( minutehand, minuteRatio);

    setRotation( hourhand, hourRatio);

}
/* function to set rotaion property */
function setRotation(element, rotationRatio) {
    element.style.setProperty('--hand-rotation', rotationRatio * 360)
  }
  
setClock();


 

