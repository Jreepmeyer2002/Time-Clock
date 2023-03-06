import React, { useState } from "react";
import { Button } from "reactstrap";

const ClockOut: React.FC = () => {
  const [clockOutTime, setClockOutTime] = useState<string>("");

  const handleClockOut = () => {
    const currentDate = new Date();
    const formattedTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    setClockOutTime(formattedTime);
  };

  return (
    <div>
        <Button style={{backgroundColor: "black"}} onClick={handleClockOut}>
          Clock Out
        </Button>
        {clockOutTime && <p>Clocked out at {clockOutTime}</p>}
    </div>
  );
};

export default ClockOut;