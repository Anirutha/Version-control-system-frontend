import React from "react";

var Datetime=()=>{
    var showdate= new Date();
    var displaytodaysdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt=showdate.toDateString();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
    return(
        <div>
            Uploaded on<br/>
            {dt}<br/>{displaytime}

        </div>
    )
}

export default Datetime;