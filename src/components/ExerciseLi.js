const ExerciseLi = ({ ex }) => {
  return (
    <li>
      <a className="btn btn-secondary" href={`exercises/${ex._id}`}>
        {ex.focus}: {ex.name}
      </a>
    </li>
  );
};

export default ExerciseLi;
