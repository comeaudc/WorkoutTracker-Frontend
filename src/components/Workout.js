import { useState, useEffect } from "react";
import { getWorkout, deleteWorkout } from "../services/tracker-api";
import { useNavigate, useParams } from "react-router-dom";
import ExHistory from "./ExHistory";

const Workout = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const [workout, setWorkout] = useState({})
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        getWorkout(id)
        .then(res => setWorkout(res.data))
    })

    useEffect(() => {
        getWorkout(id)
        .then(res => setExercises(res.data.exercises))
    })

    const deleteTheWorkout = () => {
        deleteWorkout(id)
        nav('/history')
    }

    return (
        <div>
            <h2>{workout.muscleGroup} Day</h2>
            <h3>{workout.date}</h3>
            <button onClick={deleteTheWorkout}>Delete Workout</button>
            <ul>
                {exercises.map((exercise) => {
                    return <ExHistory  exercise={exercise} />
                })}
            </ul>
            
        </div>
    )
}

export default Workout;