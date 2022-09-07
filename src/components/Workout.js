import { useState, useEffect } from "react";
import { getWorkout, deleteWorkout } from "../services/tracker-api";
import { useNavigate, useParams } from "react-router-dom";
import ExHistory from "./ExHistory";


const Workout = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const [workout, setWorkout] = useState({})

    useEffect(() => {
        getWorkout(id)
        .then(res => setWorkout(res.data))
    })

    const deleteTheWorkout = async () => {
        await deleteWorkout(id)
        await nav('/history')
    }

    return (
        <div>
            <h2>{workout.muscleGroup} Day</h2>
            <h3>{workout.date}</h3>
            <button onClick={deleteTheWorkout}>Delete Workout</button>
            <ul>
                {workout.exercises && workout.exercises.map((exercise) => {
                    return <ExHistory  exercise={exercise} />
                })}
            </ul>
            
        </div>
    )
}

export default Workout;