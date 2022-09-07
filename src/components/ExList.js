import { useEffect } from "react"

const ExList = ({exercises, buildTheWorkout}) => {

    return (
        <form onSubmit={buildTheWorkout} >
                <label htmlFor="list">
                    Add Exercise:
                    <select name='list' id='list' >
                        {exercises && exercises.map((ex) => {
                            return (
                                <option key={ex._id} value={ex._id}>{ex.name}</option>
                            )
                        })}
                    </select>
                </label>
                <input type="submit" value="Add Exercise" />
            </form>
    )
}

export default ExList;