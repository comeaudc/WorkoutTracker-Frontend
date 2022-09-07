const HistoryLi = ({ workout }) => {
    return (
        <li><a href={`history/${workout._id}`}>
            {workout.muscleGroup}: {workout.date}</a>
            {workout.exercises.length === 0? <button><a href={`history/${workout._id}/edit`}>Begin Workout?</a></button> : <button><a href={`history/${workout._id}/edit`}>Continue Workout?</a></button>}
        </li>
    )
}

export default HistoryLi;