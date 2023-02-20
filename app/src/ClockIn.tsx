import React, { useState } from "react";

const ClockIn: React.FC = () => {
  const [clockInTime, setClockInTime] = useState<string>("");

  const handleClockIn = () => {
    const currentDate = new Date();
    const formattedTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    setClockInTime(formattedTime);
  };

  return (
    <div>
        <button type="button" onClick={handleClockIn}>
          Clock In
        </button>
        {clockInTime && <p>Clocked in at {clockInTime}</p>}
    </div>
  );
};

export default ClockIn;
