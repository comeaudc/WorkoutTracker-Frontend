import { createWorkout } from "../services/tracker-api"
import { useNavigate } from "react-router-dom"

const NewWorkout = () => {
    const nav = useNavigate();

    const createTheWorkout = (e) => {
        const workout = {
            muscleGroup: e.target.muscleGroup.value,
            date: e.target.date.value,
            exercises: [],
            complete: false
        }
        createWorkout(workout)
        nav(`/history`)
    }

    return (
        <div>
            <h3>New Workout</h3>
            <form onSubmit={createTheWorkout}>
                <label for="mg">
                    Muscle Group:
                    <select name="muscleGroup" id="mg">
                        <option value="Push">Push</option>
                        <option value="Pull">Pull</option>
                        <option value="Legs">Legs</option>
                        <option value="Abs">Abs</option>
                    </select><br/>
                </label>
                <input type="hidden" name="date" value={Date.now()} /><br/>
                <input type="submit" value="Create New Workout" />
            </form>
        </div>
    )
}

export default NewWorkout