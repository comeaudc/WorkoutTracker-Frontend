import { useState, useEffect } from "react";
import { getExercise, deleteExercise } from "../services/tracker-api";
import { useNavigate, useParams } from "react-router-dom";

const Exercise = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    getExercise(id).then((res) => setExercise(res.data));
  });

  const deleteTheExercise = () => {
    deleteExercise(id);
    nav("/exercises");
  };

  return (
    <div className="container">
      <div className="card text-bg-dark">
        <div className="card-header">
          <h2>{exercise.name}</h2>
        </div>
        <div className="card-body">
          <h3>Muscle Group: {exercise.focus} </h3>
          <h3>Sets: {exercise.sets}</h3>
          <h3>Rep Range: {exercise.reprange}</h3>
          <a className="btn btn-success" href={`exercises/${exercise._id}/edit`}>Edit Exercise</a>
          <button className="btn btn-danger" onClick={deleteTheExercise}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
