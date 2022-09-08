import { useState } from "react";

const ExHistory = ({ exercise }) => {
  const headers = [];
  const reps = [];
  const weight = [];

  for (let i = 0; i < exercise.sets; i++) {
    reps.push(<td>{exercise.reps[i]}</td>);

    weight.push(<td>{exercise.weight[i]} lbs</td>);

    headers.push(<th>Set {i + 1}</th>);
  }
  return (
    <div className="card">
        <h4>{exercise.name}</h4>
        <table className="table table-dark table-hover table-small">
          <thead>
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
      </div>
  );
};

export default ExHistory;
