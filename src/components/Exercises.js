import { getExercises } from "../services/tracker-api";
import {useState, useEffect } from 'react'
import ExerciseLi from "./ExerciseLi";

const Exercises = () => {
    const [exercises, setExercises] = useState ([])

    useEffect(() => {
        getExercises()
        .then(res => setExercises(res.data))
    }, [])

    return(
        <div>
            <ul>
                {exercises.map((ex) => {
                    return (
                    <ExerciseLi ex={ex} />  
                    )
                })}
            </ul>
        </div>
    )
}

export default Exercises;