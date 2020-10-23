const axios = require('axios');

const forcast = async (longitude,latitude,callback)=>{
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=38104a4e37ea7d7be905c169056b30b2`);

    callback(response.data);
}

module.exports = forcast;