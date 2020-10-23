const axios = require('axios');

const geoCode = async (address,callback) =>{

    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWpla290dCIsImEiOiJja2dsOXRtcW0wYTVzMnRvNjBvNWUwZDEyIn0.iwTHyFsPh2V6gmSMK3JXQw`).then((res)=>{
        callback(undefined,{long:res.data.features[0].center[0],lat:res.data.features[0].center[0],place_name:res.data.features[0].place_name});
    }).catch(err=>{
 callback('Unable to find location.Try another search',undefined)
    })


}


module.exports = geoCode;
