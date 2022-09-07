import { useNavigate } from "react-router-dom"
import { createExercise } from "../services/tracker-api"

const NewExercise = ({setExerciseList, setOpen, isNewExerciseOpen, setNewExerciseOpen }) => {
    const nav = useNavigate();

    const createtheExercise = (e) => {
        const exercise = {
            focus: e.target.focus.value,
            name: e.target.name.value,
            sets: e.target.sets.value,
            reprange: e.target.reprange.value,
            reps: e.target.reps.value,
            weight: e.target.weight.value
        }

        createExercise(exercise)

        if(isNewExerciseOpen){
            setNewExerciseOpen(false)
            setExerciseList(exerciseList => [...exerciseList, exercise])
        } else {
            nav('/')
        }
        
    }
    return (
        <div>
            <h3>New Exercise</h3>
            <form onSubmit={createtheExercise}>
                <label for="mg">
                    Muscle Group:
                    <select name="focus" id="mg">
                        <option value="Push">Push</option>
                        <option value="Pull">Pull</option>
                        <option value="Legs">Legs</option>
                        <option value="Abs">Abs</option>
                    </select><br/>
                </label>
                <label for="name">Name:</label> <input type="text" id="name" name="name" placeholder='exercise' /><br/>
                <label for="sets">Sets:</label> <input type="number" id="sets" name="sets" placeholder="0"/><br/>
                <label for="reps">Rep Range:</label> <input type="text" id="reps" name="reprange" placeholder="0-20reps"/>
                <br/>
                <input type="hidden" name="reps" value={[0]} />
                <input type="hidden" name="weight" value={[0]} />
                <input type="submit" value="Create" /> 
            </form>
        </div>
    )
}

export default NewExercise;