const HistoryLi = ({ workout }) => {
  const date = () => {
    let current = workout.date.slice(0, 10)
    return current
  }
  return (
    <div>
      <a className="btn btn-secondary" href={`history/${workout._id}`}>
        {workout.muscleGroup}: {date()}
      </a>
      {workout.commplete == true}
      {workout.complete ? null : (
        <a className="btn btn-success" href={`history/${workout._id}/edit`}>
          Begin Workout?
        </a>
      )}
    </div>
  );
};

export default HistoryLi;
