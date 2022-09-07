import { useState } from "react"

const ExHistory = ({ exercise }) => {
    const headers = []
    const reps = []
    const weight = []

    for(let i = 0; i < exercise.sets; i++){
        reps.push(<td>{exercise.reps[i]}</td>)

        weight.push(<td>{exercise.weight}</td>)

        headers.push(<th>Set {i + 1}</th>)
    }
    return (
        <div>
            <h2 className="ExerciseName">{exercise.name}</h2>
            <table>
                
                <tbody>
                    <tr>
                        <th>RepRange: {exercise.reprange}</th>
                        {headers}
                    </tr>
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
    )
}

export default ExHistory;