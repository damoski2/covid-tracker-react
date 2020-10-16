/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {fetechDailydata} from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import style from './NigeriaChart.module.css';

const NigeriaChart = ({ Nig:{confirmed, recovered, deaths, lastUpdate} })=>{

    console.log(confirmed, recovered, lastUpdate, deaths);

    const [nigData,setNigData] = useState([]);
    useEffect(()=>{
            const fetchAPI = async ()=>{
                setNigData(await fetechDailydata());
            }

            console.log(nigData);
            fetchAPI();
    },[]);

    const barChart = (
        confirmed
        ?(
            <Bar 
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true, text:`Current state in Nigeria`},
                }}
                />
        ):null
    );
    return(
        <div className={style.container} >
            {barChart}
        </div>
    )
}


export default NigeriaChart