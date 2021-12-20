import React, { useState } from "react";



function Time() {

  setInterval(checkTime, 1000)
  const time = new Date().toLocaleTimeString();

  const [latestTime, setTime] = useState(time);
        function checkTime(){
             const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
        }


  return <p>{ latestTime }</p>
}

export default Time;