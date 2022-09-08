import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="top">
      <Link to="/">
        <button className="btn btn-dark">Home</button>
      </Link>
      <Link to="/exercises">
        <button className="btn btn-dark">Exercises</button>
      </Link>
      <Link to="/newexercise">
        <button className="btn btn-dark">New Exercise</button>
      </Link>
      <Link to="/inprogress">
        <button className="btn btn-dark">Current Workouts</button>
      </Link>
      <Link to="/history">
        <button className="btn btn-dark">Workout History</button>
      </Link>
    </nav>
  );
};

export default Nav;
