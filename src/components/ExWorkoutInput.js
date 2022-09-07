import { useEffect, useState } from "react"
import { editWorkout } from "../services/tracker-api"

const ExWorkoutInput = ({ exercise, workout, setWorkout, id }) => {
    const [repitition, setReps] = useState([])
    const [weights, setWeight] = useState([])
    const [isOpen, setIsOpen] = useState(true)
    var updatedWorkout;

    const headers = []
    const reps = []
    const weight = []

    for(let i = 0; i < exercise.sets; i++){
        reps.push(<td><input type='number' className="reps" placeholder={repitition[i] === undefined? 0: exercise.reps[i]} /></td>)

        weight.push(<td><input type='number' className="weight" placeholder={weights[i] === undefined? 0+ " lbs": exercise.weight[i]+" lbs"} /></td>)

        headers.push(<th>Set {i + 1}</th>)
    }

    useEffect(() => {
        updatedWorkout = {
            muscleGroup: workout.muscleGroup,
            date: workout.date,
            exercises: [
                ...workout.exercises,
                {
                    focus: exercise.focus,
                    name: exercise.name,
                    sets: exercise.sets,
                    reprange: exercise.reprange,
                    reps:   repitition,
                    weight: weights
                }
            ]
        }
    }, [repitition, weights])

    const collectData = async (e) => {
        e.preventDefault()
        setReps([])
        setWeight([])

        let rps = document.getElementsByClassName('reps')
        let wgt = document.getElementsByClassName('weight')

        for(let i = 0; i < exercise.sets; i++){
            let a = parseInt(rps[i].value)
            let b = parseInt(wgt[i].value)

            setReps(repitition => [...repitition, a]) 
            
            setWeight(weights => [...weights, b])        
        }
    }

    const addToWorkout = async (e) => {
        e.preventDefault()

        setWorkout(updatedWorkout)
        editWorkout(id, updatedWorkout)
        await setIsOpen(false)
    }

    return(
        <> {isOpen? 
        <div key={exercise._id}>
            <form onSubmit={addToWorkout}>
            <p>{exercise.name}</p>
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
                    <tr>
                    <td><button onClick={collectData}>Update</button></td>
                    <td><input type="submit" value="Exercise Done" /></td>
                    </tr>
                </tbody>
            </table>
            </form>  
        </div>: <></> }
        </>
    )
}

export default ExWorkoutInput