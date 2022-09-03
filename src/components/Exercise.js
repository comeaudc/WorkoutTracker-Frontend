import { useState, useEffect } from "react";
import { getExercise, deleteExercise } from "../services/tracker-api";
import { useNavigate, useParams } from "react-router-dom";

const Exercise = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const [exercise, setExercise] = useState({})

    useEffect(() => {
        getExercise(id)
        .then(res => setExercise(res.data))
    })

    const deleteTheExercise = () => {
        deleteExercise(id)
        nav('/exercises')
    }

    return (
        <div>
            <h2>{exercise.name}</h2>
            <h3>Muscle Group: {exercise.focus} </h3>
            <h3>Sets: {exercise.sets}</h3>
            <h3>Rep Range: {exercise.reprange}</h3>
            <button onClick={deleteTheExercise}>Delete</button>
        </div>
    )
}

export default Exercise;