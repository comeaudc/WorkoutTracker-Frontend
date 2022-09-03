const ExHistory = ({ exercise }) => {
    return (
        <li className="exHist">
            <p><span>Focus:</span> {exercise.focus} </p>
            <p><span>Name:</span> {exercise.name} </p>

            <div>
                <p><span>Reps:</span> {exercise.reps} </p>
                <p><span>Weight:</span> {exercise.weight} </p>   
            </div>   
        </li>
    )
}

export default ExHistory;