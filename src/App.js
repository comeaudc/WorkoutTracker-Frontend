import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Imported Components
import Nav from './components/Nav';
import Exercises from './components/Exercises';
import PrevWorkouts from './components/History';
import InProgress from './components/InProgress';
import NewExercise from './components/NewExercise';
import NewWorkout from './components/NewWorkout';
import Exercise from './components/Exercise';
import Workout from './components/Workout';
import EditWorkout from './components/EditWorkout';
import { useState } from 'react';

function App() {
  const [isNewExerciseOpen, setNewExerciseOpen] = useState(false)
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<NewWorkout />} />
          <Route path='exercises' element={<Exercises />} />
          <Route path='exercises/:id' element={<Exercise />} />
          <Route path='newexercise' element={<NewExercise isNewExerciseOpen={isNewExerciseOpen} />} />
          <Route path='inprogress' element={<InProgress />} />
          <Route path='history' element={<PrevWorkouts />} />
          <Route path='history/:id' element={ <Workout />} />
          <Route path='history/:id/edit' element={ <EditWorkout setNewExerciseOpen={setNewExerciseOpen} isNewExerciseOpen={isNewExerciseOpen} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
