import React, { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";

function Chart(props){
    // console.log(props.safety_score)
    const [safetyScoreChartData,setSafetyScoreChartData] = useState({});
    const [overspeedingChartData,setOverspeedingChartData] = useState({});

    let safety_score = props.safety_score
    let overspeeding = props.overspeeding

    const chart = () => {
        setSafetyScoreChartData({
            labels:['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
            datasets:[{
                label:'Safety Score',
                data:safety_score,        //14 days worth rider safety_score
                backgroundColor:['violet','indigo','blue','green','yellow','orange','red','violet','indigo','blue','green','yellow','orange','red'],
                borderWidht:1
            }]
        })

        setOverspeedingChartData({
            labels:['1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
            datasets:[{
                label:'OverSpeeding',
                data:overspeeding,        //14 days worth rider safety_score
                backgroundColor:['violet','indigo','blue','green','yellow','orange','red','violet','indigo','blue','green','yellow','orange','red'],
                borderWidht:1
            }]
        })
    }

    useEffect(()=>{
        chart()
    },[])
    return <div>
        <div className="chartDisplay">
        <Bar 
            data={safetyScoreChartData}
            options={{
                responsive:true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
        />
        </div>
        <div className="chartDisplay">
        <Bar 
            data={overspeedingChartData}
            options={{
                responsive:true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
        />
        </div>
    </div>
}

export default Chart;