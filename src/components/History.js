import { getHistory } from "../services/tracker-api";
import { useState, useEffect } from "react";
import HistoryLi from "./HistoryLi";

const PrevWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [that, setThat] = useState([]);

  useEffect(() => {
    getHistory().then((res) => setWorkouts(res.data));
  }, []);

  useEffect(() => {
    filter();
  }, [workouts]);

  const filter = () => {
    let result = workouts.filter((workout) => workout.complete == true);
    setThat(result);
    // return result.map(workout => < HistoryLi workout={workout} />)
  };

  return (
    <div className="container">
       <div className="card text-bg-dark">
        <div className="card-body">
          <h3>Past Workouts:</h3>
        </div>
      </div>
      {
        that.length === 0 ? (
          <div className="card text-bg-dark">
            <div className="card-body">
              <h1>No Workouts Logged</h1>
            </div>
          </div>
        ) : (
          that.map((workout) => <HistoryLi workout={workout} />)
        )
        // filter()
      }
    </div>
  );
};

export default PrevWorkouts;
