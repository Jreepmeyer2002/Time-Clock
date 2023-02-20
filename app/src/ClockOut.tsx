import React, { useState } from "react";

const ClockOut: React.FC = () => {
  const [clockOutTime, setClockOutTime] = useState<string>("");

  const handleClockOut = () => {
    const currentDate = new Date();
    const formattedTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    setClockOutTime(formattedTime);
  };

  return (
    <div>
        <button type="button" onClick={handleClockOut}>
          Clock Out
        </button>
        {clockOutTime && <p>Clocked out at {clockOutTime}</p>}
    </div>
  );
};

export default ClockOut;