import axios from "axios";
code 
export const getPlaceData = async(type, sw, ne)=>{
    try{
      const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw?.lat,
            tr_latitude: ne?.lat,
            bl_longitude: sw?.lng,
            tr_longitude: ne?.lng,
        },
        headers: {
            'X-RapidAPI-Key': '211777263bmsh7fa37568ba6cd2fp1d48ccjsn41107b30f0af',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      });
      return data
    }
    catch(error){
      console.log(error.message)
    }
}