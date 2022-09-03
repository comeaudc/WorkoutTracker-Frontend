import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/exercises"><button>Exercises</button></Link>
            <Link to="/newexercise"><button>New Exercise</button></Link>
            <button>New Workout</button>
            <Link to='/history'><button>Workout History</button></Link>
            <button>Stats</button>
        </nav>
    )
}

export default Nav;