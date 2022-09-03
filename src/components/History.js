import { getHistory } from "../services/tracker-api";
import {useState, useEffect } from 'react'
import HistoryLi from "./HistoryLi";


const PrevWorkouts = () => {
    const [workouts, setWorkouts] = useState ([])

    useEffect(() => {
        getHistory()
        .then(res => setWorkouts(res.data))
    }, [])

    return(
        <div>
            <ul>
                {workouts.map((workout) => {
                    return < HistoryLi workout={workout} />
                })}
            </ul>
        </div>
    )
}

export default PrevWorkouts;