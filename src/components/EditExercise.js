import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editExercise, getExercise } from "../services/tracker-api";

const EditExercise = ({
  setExerciseList,
  isNewExerciseOpen,
}) => {
  const {id} = useParams();
  const nav = useNavigate();
  const [exercise, setExercise] = useState({})

  useEffect(()=> {
    getExercise(id).then((res) => {setExercise(res.data)})
  })

  const editTheExercise = (e) => {
    e.preventDefault();
    const exercise = {
      focus: e.target.focus.value,
      name: e.target.name.value,
      sets: e.target.sets.value,
      reprange: e.target.reprange.value,
      reps: e.target.reps.value,
      weight: e.target.weight.value,
    };

    editExercise(exercise);

    if (isNewExerciseOpen || !isNewExerciseOpen) {
      setExerciseList((exerciseList) => [...exerciseList, exercise]);
    } else {
      nav("/");
    }
  };
  return (
    <div className="container">
      <div className="card text-bg-dark">
        <div className="card-body">
          <h3>Edit Exercise</h3>
          <form onSubmit={editTheExercise}>
            <label className="form-label" for="mg">
              Muscle Group:
              <select
                name="focus"
                id="mg"
                className="form-select form-select-sm"
              >
                <option value="Push">Push</option>
                <option value="Pull">Pull</option>
                <option value="Legs">Legs</option>
                <option value="Abs">Abs</option>
              </select>
            </label>
            <br />
            <label className="form-label" for="name">
              Name:
            </label>{" "}
            <input
              className="form-control-sm"
              type="text"
              id="name"
              name="name"
              placeholder="exercise"
              defaultValue={exercise.name}
            />
            <br />
            <label className="form-label" for="sets">
              Sets:
            </label>{" "}
            <input
              className="form-control-sm"
              type="number"
              id="sets"
              name="sets"
              placeholder="0"
              defaultValue={exercise.sets}
            />
            <br />
            <label className="form-label" for="reps">
              Rep Range:
            </label>{" "}
            <input
              className="form-control-sm"
              type="text"
              id="reps"
              name="reprange"
              placeholder="0-20reps"
              defaultValue={exercise.reprange}
            />
            <br />
            <input type="hidden" name="reps" value={[0]} />
            <input type="hidden" name="weight" value={[0]} />
            <input
              className="create btn btn-success"
              data-bs-dismiss="modal"
              data-bs-target="#new"
              type="submit"
              value="Create"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditExercise;
