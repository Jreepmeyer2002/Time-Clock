import ClockIn from './ClockIn';
import ClockOut from './ClockOut';
import './App.css';

function Home() {
  return (
    <div className="App">
        <header>
          <h2> Minute Man </h2>
        </header>
        <div className="time-keeping">
          <ClockIn />
          <ClockOut />
        </div>
    </div>
  );
}

export default Home;
