import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getWorkout, getExercises, getExercise, editWorkout } from "../services/tracker-api"
import ExWorkoutInput from "./ExWorkoutInput"
import ExHistory from "./ExHistory" 
import NewExercise from "./NewExercise"
import ExList from "./ExList"

const EditWorkout = ({isNewExerciseOpen, setNewExerciseOpen}) => {
    const {id} = useParams()
    const nav = useNavigate()
    const [workout, setWorkout] = useState({})
    const [exercises, setExercises] = useState ([])
    const [exerciseList, setExerciseList] = useState([])
    const [isExListOpen, setExListOpen] = useState(false)

    useEffect(() => {
        getWorkout(id)
        .then(res => setWorkout(res.data))
    }, [id])

    useEffect(() => {
        getExercises()
        .then(res => setExercises(res.data))
    }, [])

    const buildTheWorkout = async (e) => {
        e.preventDefault()

        await getExercise(e.target.list.value)
        .then(res => { setExerciseList(exerciseList => [...exerciseList, res.data])})
        setExListOpen(false)
    }

    const saveTheWorkout = async (e) => {
        e.preventDefault()
        const updatedWorkout = workout
        await editWorkout(id, updatedWorkout)
        nav(`/history/${id}`)
    }

    const openNewEx = () => {
        setNewExerciseOpen(!isNewExerciseOpen)
    }

    const openList = () => {
        setExListOpen(!isExListOpen)
    }

    return (
        <div>
            <h2>{workout.muscleGroup}</h2>
            <h4>{workout.date}</h4>
            <div className="WorkoutBuilder">
                {isExListOpen? <><ExList exercises={exercises} buildTheWorkout={buildTheWorkout}/><button onClick={openList}>Close List</button></> : <button onClick={openList}>Exerise List</button>}
                

            {isNewExerciseOpen? 
            <><NewExercise setExerciseList={setExerciseList} isNewExerciseOpen={isNewExerciseOpen} setNewExerciseOpen={setNewExerciseOpen}  setOpen={setNewExerciseOpen} /><button onClick={openNewEx}>Close</button></> : 
            <button onClick={openNewEx}>New Execise?</button>}
            
            </div>

                {exerciseList && exerciseList.map((exercise) => {
                    return <ExWorkoutInput workout={workout} setWorkout={setWorkout} id={id} exercise={exercise} />
                })}

                {workout.exercises && workout.exercises.map((exercise) => {
                    return <ExHistory exercise={exercise} />
                })}

        <div>
            <form onSubmit={saveTheWorkout}>
                <input type="hidden" name="muscleGroup" value={workout.muscleGroup} />
                <input type="hidden" name="date" value={workout.date} /><br/>
                <input type="hidden" name="exercises" value={workout.exercises} />
                <input type="submit" value="End & Save Workout" />
            </form>
        </div>
        </div>
    )
}

export default EditWorkout;