import axios from 'axios'

export const getExercises = () => {
    const URL = `http://localhost:3001/tracker/exercises`
    const response = axios.get(URL)
    console.log(response)
    return response
}

export const getExercise = (id) => {
    const URL = `http://localhost:3001/tracker/exercises/${id}`
    const response = axios.get(URL)
    return response
}

export const getHistory = () => {
    const URL = `http://localhost:3001/tracker/history`
    const response = axios.get(URL)
    return response
}
export const getWorkout = (id) => {
    const URL = `http://localhost:3001/tracker/history/${id}`
    const response = axios.get(URL)
    return response
}

export const createExercise = (exercise) => {
    const URL = `http://localhost:3001/tracker/exercises`
    const response = axios.post(URL, exercise)
    return response
}

export const createWorkout = (workout) => {
    const URL = `http://localhost:3001/tracker/history`
    const response = axios.post(URL, workout)
    return response
}

export const editExercise = (id, updatedExerise) => {
    const URL = `http://localhost:3001/tracker/exercises/${id}`
    const response = axios.put(URL, updatedExerise)
    return response
}

export const editWorkout = (id, updatedWorkout) => {
    const URL = `http://localhost:3001/tracker/history/${id}`
    const response = axios.put(URL, updatedWorkout)
    return response
}

export const deleteExercise = (id) => {
    const URL = `http://localhost:3001/tracker/exercises/${id}`
    const response = axios.delete(URL)
    return response
}

export const deleteWorkout = (id) => {
    const URL = `http://localhost:3001/tracker/history/${id}`
    const response = axios.delete(URL)
    return response
}