import { useEffect } from "react";

const ExList = ({ exercises, buildTheWorkout }) => {
  return (
    <div className="card text-bg-dark">
      <div className="card-body">
        <form onSubmit={buildTheWorkout}>
          <label className="form-label" htmlFor="list">
            <select
              className="form-select form-select-sm"
              name="list"
              id="list"
            >
              {exercises &&
                exercises.map((ex) => {
                  return (
                    <option key={ex._id} value={ex._id}>
                      {ex.name}
                    </option>
                  );
                })}
            </select>
          </label>
          <input
            className="btn btn-danger"
            data-bs-dismiss="modal"
            data-bs-target="#list"
            type="submit"
            value="Add Exercise"
          />
        </form>
      </div>
    </div>
  );
};

export default ExList;
