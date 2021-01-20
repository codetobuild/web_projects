

const jokes=document.querySelector('.text-area');

const btn= document.querySelector('.btn');
 
 const getNewJoke = async()=>{

  const jokeText= await getDadJokes();
  
  jokes.innerHTML=`${jokeText} &#x1f923  &#x1f923  &#128518 &#128518`;
  jokes.style.color="black";

}

const getDadJokes= async()=>{
     
    try{
        const config={ headers:{Accept: 'application/json'}};
        const response= await axios.get('https://icanhazdadjoke.com/', config);

        return (response.data.joke);
    }
    catch(e){
        return "OOPS! No jokes available right now. Try sometime later."
    }
    
}

 btn.addEventListener('click',  getNewJoke);





