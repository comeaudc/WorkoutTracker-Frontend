const HistoryLi = ({ workout }) => {
    return (
        <li><a href={`history/${workout._id}`}>
            {workout.muscleGroup}: {workout.date}
        </a></li>
    )
}

export default HistoryLi;