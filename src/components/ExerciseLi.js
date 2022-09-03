const ExerciseLi = ({ ex }) => {
    return (
        <li><a href={`exercises/${ex._id}`}>
            {ex.focus}: {ex.name}
        </a></li>
    )
}

export default ExerciseLi;