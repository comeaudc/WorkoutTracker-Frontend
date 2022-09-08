import { useEffect, useState } from "react";
import { editWorkout } from "../services/tracker-api";

const ExWorkoutInput = ({ exercise, workout, setWorkout, id, submit, setSubmit }) => {
  let current;

  const [repitition, setReps] = useState([]);
  const [weights, setWeight] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  var updatedWorkout;

  const headers = [];
  const reps = [];
  const weight = [];

  for (let i = 0; i < exercise.sets; i++) {
    reps.push(
      <td>
        <input
          type="number"
          className="reps form-control form-control-sm"
          placeholder={repitition[i] === undefined ? 0 : exercise.reps[i]}
        />
      </td>
    );

    weight.push(
      <td>
        <input
          type="number"
          className="weight form-control form-control-sm"
          placeholder={
            weights[i] === undefined ? 0 + " lbs" : exercise.weight[i] + " lbs"
          }
        />
      </td>
    );

    headers.push(<th>Set {i + 1}</th>);
  }

  useEffect(() => {
    current = {
      focus: exercise.focus,
      name: exercise.name,
      sets: exercise.sets,
      reprange: exercise.reprange,
      reps: [],
      weight: [],
    };
  }, []);

  useEffect(() => {
    current = {
      focus: exercise.focus,
      name: exercise.name,
      sets: exercise.sets,
      reprange: exercise.reprange,
      reps: repitition,
      weight: weights,
    };
  }, [repitition, weights]);

  const collectData = async (e) => {
    e.preventDefault();
    setReps([]);
    setWeight([]);

    let rps = document.getElementsByClassName("reps");
    let wgt = document.getElementsByClassName("weight");

    for (let i = 0; i < exercise.sets; i++) {
      let a = parseInt(rps[i].value);

      setReps((repitition) => [...repitition, a]);
    }
    for (let i = 0; i < exercise.sets; i++) {
      let b = parseInt(wgt[i].value);
      setWeight((weights) => [...weights, b]);
    }
  };

  const addToWorkout = async (e) => {
    e.preventDefault();
    updatedWorkout = {
      muscleGroup: workout.muscleGroup,
      date: workout.date,
      exercises: [...workout.exercises, current],
      complete: workout.complete,
    };
    editWorkout(id, updatedWorkout);
    setSubmit(submit + 1)
    await setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="container" key={exercise._id}>
          <form onSubmit={addToWorkout}>
            <table className="table table-dark table-hover table-small">
              <thead>
                <tr>
                  <th>{exercise.name}</th>
                  <td>
                    <button
                      className="col btn btn-success btn-sm"
                      onClick={collectData}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <input
                      className="col btn btn-danger btn-sm"
                      type="submit"
                      value="Exercise Complete"
                    />
                  </td>
                </tr>
                <tr>
                  <th>RepRange: {exercise.reprange}</th>
                  {headers}
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <td>Reps:</td>
                  {reps}
                </tr>
                <tr>
                  <td>Weight:</td>
                  {weight}
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ExWorkoutInput;
