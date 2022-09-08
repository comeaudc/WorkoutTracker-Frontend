import { useState, useEffect } from "react";
import { getWorkout, deleteWorkout } from "../services/tracker-api";
import { useNavigate, useParams } from "react-router-dom";
import ExHistory from "./ExHistory";

const Workout = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [workout, setWorkout] = useState({});

  useEffect(() => {
    getWorkout(id).then((res) => setWorkout(res.data));
  });

  const date = () => {
    let current = workout.date.slice(0, 10)
    return current
  }

  const deleteTheWorkout = async () => {
    await deleteWorkout(id);
    await nav("/");
  };

  return (
    <div className="container">
      <div className="card text-bg-dark"><div className="card-body"><h2>{workout.muscleGroup} Day</h2>
      <h3>{workout.date && date()}</h3></div></div>
      
      <button className="btn btn-danger" onClick={deleteTheWorkout}>Delete Workout</button>
      <ul>
        {workout.exercises &&
          workout.exercises.map((exercise) => {
            return <ExHistory exercise={exercise} />;
          })}
      </ul>
    </div>
  );
};

export default Workout;
