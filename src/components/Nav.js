import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/exercises"><button>Exercises</button></Link>
            <Link to="/newexercise"><button>New Exercise</button></Link>
            <Link to='/history'><button>Current Workouts</button></Link>
            <button to='/history'>Workout History</button>
        </nav>
    )
}

export default Nav;