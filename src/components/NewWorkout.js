import { createWorkout } from "../services/tracker-api";
import { useNavigate } from "react-router-dom";

const NewWorkout = () => {
  const nav = useNavigate();

  const createTheWorkout = (e) => {
    const workout = {
      muscleGroup: e.target.muscleGroup.value,
      date: e.target.date.value,
      exercises: [],
      complete: false,
    };
    createWorkout(workout);
    nav(`/inprogress`);
  };

  return (
    <div className="container">
      <div className="card text-bg-dark">
        <div className="nx card-body">
          <h3>New Workout</h3>
          <form onSubmit={createTheWorkout}>
            <label className="form-label" for="mg">
              Muscle Group:
              <select
                className="form-select form-select-sm"
                name="muscleGroup"
                id="mg"
              >
                <option value="Push">Push</option>
                <option value="Pull">Pull</option>
                <option value="Legs">Legs</option>
                <option value="Abs">Abs</option>
              </select>
              <br />
            </label>
            <input type="hidden" name="date" value={Date.now()} />
            <br />
            <input
              type="submit"
              className="btn btn-success"
              value="Create New Workout"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewWorkout;
