
   setInterval(setTime,1000)
 

 const CurrHourMinute= document.querySelector('.time');
 const currSecond= document.querySelector('.second');
 const currAmPm= document.querySelector('.ampm');


 const image=document.querySelector('#image');
 const condition = document.querySelector('#condition');
 const degree = document.querySelector('#degree');
 
 const cityContent = document.querySelector('.city');
 const form = document.querySelector('.form');
 const input = document.querySelector('.input');


 function setTime()
 {
    var date= new Date();
    var  hour= date.getHours();
    var  minutes = date.getMinutes();
    var second = date.getSeconds();

    hour = hour % 12;
    var ampm= (hour>12)?'AM':'PM'; 
    hour = hour ? hour : 12;

    hour=(hour<10)?'0'+hour:hour;
    minutes =(minutes<10)? '0'+minutes : minutes;
    second= (second<10)?'0'+second : second;

     CurrHourMinute.textContent=`${hour}:${minutes}`;
     currSecond.textContent= second;
     currAmPm.textContent=ampm;

 }

 

  const weather = async()=>{
   
   var city;
    city= input.value ? input.value : 'Agartala';
   try{
    const url='http://api.weatherapi.com/v1/current.json?key=da80e53e244544429af165949212101&q=';
    const response = await axios.get(url+city);
 
    const imageLink=response.data.current.condition.icon;
    image.setAttribute('src',imageLink);
    
    const deg= response.data.current.temp_c;
    degree.innerHTML=`${deg}&#xb0 C`;

    condition.textContent= response.data.current.condition.text;
    
    const countryName= response.data.location.country;
    const cityName= response.data.location.name;
    cityContent.innerText =`${cityName}, ${countryName}`;
 
    return response;

   }catch(e){
       cityContent.textContent="Network error!";
       console.log('failed!!!!!!!!',e);
    
   }
}
 
 

form.addEventListener('submit', async(e)=>{
    e.preventDefault();
     weather();
     input.value='';
 });

 

setTime();
weather();//initial values















