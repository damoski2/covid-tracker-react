import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export  const fetchData = async (country)=>{
    let changeableUrl = url;

    if(country){
        changeableUrl=`${url}/countries/${country}`;
    }

    try{
        const { data: { confirmed,recovered,deaths,lastUpdate} } = await axios.get(changeableUrl);

        const modifieddata = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifieddata
    }catch(error){
        console.log(error);
    }
}

export const fetechDailydata = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);

        const chartData = data.map((dailydata)=>({
            confirmed:dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate,
        }));

        return chartData
    }catch(error){
        console.log(error);
    }
}


export const fetchCountries =  async()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }catch(error){
        console.log(error);
    }
}

export const fetchNigeria = async(nigeria)=>{
    try{
        const { data:{confirmed,recovered,deaths,lastUpdate} } = await axios.get(`${url}/countries/Nigeria`);
        
        const naijaData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return naijaData

    }catch(error){
        console.log(error);
    }
}
