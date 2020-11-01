import React, { useEffect, useState } from "react";
import riderData from "../data.json";
import RiderInfo from "./RiderInfo";



let riderDataUsable = riderData;

//the iterable RIDER ARRAY (CONTAINS OBJECTS (new_element))
let newRiderData = [];

//Function to calculate Avg Attribute Score and Percentage Changes

function score_cal(rider_safety_score,total_length){

    let length_present_week = total_length-7;
    let present_week_safety_score=0,last_week_safety_score=0;

    for(var i=length_present_week;i<total_length;i++){

        present_week_safety_score+=rider_safety_score[i];

        last_week_safety_score+=rider_safety_score[i-7];
    }

    let a_present_w_score = present_week_safety_score/7;
    let a_last_w_score = last_week_safety_score/7;
    let per_change = (a_present_w_score-a_last_w_score)/(a_last_w_score)*100;

    return [(a_present_w_score*10).toPrecision(4),per_change.toPrecision(3)];
}

riderDataUsable.map((rider,index) => {
    let length_total = rider.data.safety_score.length;

    let safety = score_cal(rider.data.safety_score,length_total);

    let overspeeding = score_cal(rider.data.overspeeding,length_total)

    let new_element = {
        "id":index,
        "name":rider.name,
        "avg_safety_score":safety[0],
        "avg_safety_score_change":safety[1],
        "avg_overspeeding_score":overspeeding[0],
        "avg_overspeeding_score_change":overspeeding[1],
        "safety_score":rider.data.safety_score,
        "overspeeding":rider.data.overspeeding
    }

    newRiderData.push(new_element);

    return 0;
})

function RiderData(){

    const [sortConfig,setSortConfig] = useState({
        "key":null,
        "direction":null
    });

    const [sortedRiderData,setSortedRiderData] = useState([...newRiderData])

    function sortArray(sortingDirection,arr){
        let newSortedArray = [];
        arr.map((ele,index)=>{
            newSortedArray.push(ele);
            return 0;
        })
        if(sortingDirection==='ascending'){
            newSortedArray.sort((a,b) => (a[sortConfig.key]-b[sortConfig.key]))
        }else{
            newSortedArray.sort((a,b) => (b[sortConfig.key]-a[sortConfig.key]))
        }

        return newSortedArray
    }
    

    useEffect(()=>{
        setSortedRiderData(sortArray(sortConfig.direction,sortedRiderData));        
    },[sortConfig.direction,sortConfig.key])

    //Sort function (invoked when attribute buttons are clicked)

    function sort(event){
        const {name} = event.target;
        let key=name;
        let direction = null;       

        if(sortConfig && sortConfig.key === key && sortConfig.direction === "ascending"){
            direction = "descending";
        }else if(sortConfig && sortConfig.key === key && sortConfig.direction === "descending"){
            direction = "ascending";
        }else{
            direction = "ascending";
            console.log("I am executing!!")
        }
        console.log(key+' '+direction);
        setSortConfig({key,direction}); 
        
    }

    //function to get ascending or descending class name to add the arrow symbol

    function getClassNameFor(name){
        if(!sortConfig){
            return;
        }
        return sortConfig.key === name ? sortConfig.direction:undefined;
    }

    

    return ( <div>
        
        <div id="riderData"> 
            <div className="current_date">{new Date().toString().slice(4,16)}</div>
            <div className="riderInfoHeading">
                <button className={"sort_buttons leftmost_button " + getClassNameFor('avg_safety_score')} onClick={sort} name="avg_safety_score">Safety_Score</button>
                <button className={"sort_buttons " +  getClassNameFor('avg_overspeeding_score')} onClick={sort} name="avg_overspeeding_score">Overspeeding</button>
            </div>

                {sortedRiderData.map((rider, index) => {

                    return(
                            <RiderInfo 
                                key = {rider.id}
                                id={index+1}
                                name = {rider.name}
                                phone_no = {rider.phone_no}
                                avg_safety_score = {rider.avg_safety_score}
                                per_change_safety = {rider.avg_safety_score_change}
                                avg_overspeeding_score = {rider.avg_overspeeding_score}
                                per_change_overspeeding = {rider.avg_overspeeding_score_change}
                                safety_score = {rider.safety_score}
                                overspeeding = {rider.overspeeding}
                            />     
                    )
                })
                }
        </div>
        </div>
    );
}

export default RiderData;