import { useNavigate } from "react-router-dom";
import { createExercise } from "../services/tracker-api";

const NewExercise = ({
  setExerciseList,
  setOpen,
  isNewExerciseOpen,
  setNewExerciseOpen,
}) => {
  const nav = useNavigate();

  const createtheExercise = (e) => {
    e.preventDefault();
    const exercise = {
      focus: e.target.focus.value,
      name: e.target.name.value,
      sets: e.target.sets.value,
      reprange: e.target.reprange.value,
      reps: e.target.reps.value,
      weight: e.target.weight.value,
    };

    createExercise(exercise);

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
          <h3>New Exercise</h3>
          <form onSubmit={createtheExercise}>
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

export default NewExercise;
