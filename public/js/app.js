const weatherForm = document.querySelector('form');
const searchTerm = document.querySelector('input');
const display = document.querySelector('#display')

const baseurl = '/weather?address=';

const getWeather  = async (location) =>{
    try{
        display.innerHTML='';
        const res = await axios.get(baseurl+location).then(res=>{
          
            if(res.data.error){
                    display.innerHTML=res.data.error;
            }else{
               
                display.innerHTML=`
                <ul style="list-style:none">
                <li>Location:${res.data.location}</li>
                <li>Forcast:${res.data.forcast}</li>
                <li>Termperature:${res.data.temperature} <sup>o</sup>C</li>
                </ul>
                `
            }
        })
    }catch(e){
        display.innerHTML='hihihi';
         
    }
}


 


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = searchTerm.value;
    getWeather(location)
});


