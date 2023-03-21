import React, { useState } from "react";
import {Button} from "reactstrap";

const ClockIn: React.FC = () => {
  const [clockInTime, setClockInTime] = useState<string>("");

  const handleClockIn = () => {
    const currentDate = new Date();
    const formattedTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    fetch('api/time/in/1/1', {method: "PUT"}) 
      
      .then( 
        (response) => 
        {
            if(response.status === 200){
              setClockInTime(formattedTime);
            }
        }
    )
    .catch((error) =>
        {console.log(error);})
  };

  return (
    <div>
        <Button style={{backgroundColor: "black"}} onClick={handleClockIn}>
          Clock In
        </Button>
        {clockInTime && <p>Clocked in at {clockInTime}</p>}
    </div>
  );
};

export default ClockIn;
