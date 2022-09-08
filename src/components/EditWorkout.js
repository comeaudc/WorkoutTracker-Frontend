import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getWorkout,
  getExercises,
  getExercise,
  editWorkout,
} from "../services/tracker-api";
import ExWorkoutInput from "./ExWorkoutInput";
import ExHistory from "./ExHistory";
import NewExercise from "./NewExercise";
import ExList from "./ExList";

const EditWorkout = ({ isNewExerciseOpen, setNewExerciseOpen }) => {
  const { id } = useParams();
  const nav = useNavigate();
  const [workout, setWorkout] = useState({});
  const [exercises, setExercises] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [submit, setSubmit] = useState(true)

  useEffect(() => {
    getWorkout(id).then((res) => setWorkout(res.data));
  }, [id, submit]);

  useEffect(() => {
    getExercises().then((res) => setExercises(res.data));
  }, []);

  const date = () => {
    let current = workout.date.slice(0, 10);
    return current;
  };

  const buildTheWorkout = async (e) => {
    e.preventDefault();

    await getExercise(e.target.list.value).then((res) => {
      setExerciseList((exerciseList) => [...exerciseList, res.data]);
    });
  };

  const saveTheWorkout = async (e) => {
    e.preventDefault();
    const updatedWorkout = workout;
    updatedWorkout.complete = true;
    await editWorkout(id, updatedWorkout);
    nav(`/history/${id}`);
  };

  return (
    <div className="top container">
      <div className="card text-bg-dark">
        <div className="card-body">
          <div className=" title container-med">
            <h2>{workout.muscleGroup}:</h2>
            <h2>{workout.exercises && date()}</h2>
          </div>
        </div>
      </div>

      <div className="editwo container container-sm">
        <h4 className="text-light">Add Exercise</h4>
        <button
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#list"
        >
          Exercise List
        </button>
        <button
          onClick={setNewExerciseOpen(true)}
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#new"
        >
          New Exercise
        </button>
        <form onSubmit={saveTheWorkout}>
          <input type="hidden" name="muscleGroup" value={workout.muscleGroup} />
          <input type="hidden" name="date" value={workout.date} />
          <br />
          <input type="hidden" name="exercises" value={workout.exercises} />
          <input
            className="btn btn-danger"
            type="submit"
            value="End & Save Workout"
          />
        </form>

        <div className="modal fade" id="list">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                Add Exercise:
                <button
                  className="btn-close"
                  data-bs-dismiss="modal"
                  data-bs-target="#list"
                ></button>
              </div>
              <div className="modal-body">
                <ExList
                  exercises={exercises}
                  buildTheWorkout={buildTheWorkout}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="new">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                Add Exercise:
                <button
                  className="btn-close"
                  data-bs-dismiss="modal"
                  data-bs-target="#new"
                ></button>
              </div>
              <div className="modal-body">
                <NewExercise
                  setExerciseList={setExerciseList}
                  isNewExerciseOpen={isNewExerciseOpen}
                  setNewExerciseOpen={setNewExerciseOpen}
                  setOpen={setNewExerciseOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {exerciseList &&
        exerciseList.map((exercise) => {
          return (
            <ExWorkoutInput
              workout={workout}
              setWorkout={setWorkout}
              id={id}
              exercise={exercise}
              submit={submit}
              setSubmit={setSubmit}
            />
          );
        })}

      {workout.exercises &&
        workout.exercises.map((exercise) => {
          if (exercise.reps.length > 0)
            return <ExHistory exercise={exercise} />;
          else {
            <></>;
          }
        })}
    </div>
  );
};

export default EditWorkout;
