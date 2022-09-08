import { getExercises } from "../services/tracker-api";
import { useState, useEffect } from "react";
import ExerciseLi from "./ExerciseLi";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getExercises().then((res) => setExercises(res.data));
  }, []);

  return (
    <div className="container">
      <div className="card text-bg-dark">
        <div className="card-body">
          <h2>Exercises:</h2>
          <ul className="card-group">
            {exercises.map((ex) => {
              return <ExerciseLi ex={ex} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
