import React from "react";
import Chart from "./Chart"

// const subscriptStyle = {
//     color: "green"
// }

function RiderInfo(props){
    // if(document.getElementsByClassName("subscript").innerHTML<0){
    //     document.getElementsByClassName("subscript").style.color = "red";
    // }else{
    //     document.getElementsByClassName("subscript").style.color="green";
    // }
    return (
        <div className="riderInfoDiv">
            <span className="index_attribute">{props.id}</span>
            <span className="name_attribute"> {props.name.length>12?props.name.substr(0,12)+"..":props.name}</span>
            {/* <span>{props.phone_no}</span> */}
            <span style={{color:"#f39233"}}>{props.avg_safety_score}<span className="subscript" style={props.per_change_safety>0?{color:"green"}:{color:"red"}}>{props.per_change_safety}</span></span>
            <span style={{color:"#f56a79"}}>{props.avg_overspeeding_score}<span className="subscript" style={props.per_change_overspeeding>0?{color:"green"}:{color:"red"}}>{props.per_change_overspeeding}</span></span>
            <hr style={{marginTop:'30px'}} />
            <Chart 
                safety_score = {props.safety_score}
                overspeeding = {props.overspeeding}
            />
        </div>

    )

}

export default RiderInfo;