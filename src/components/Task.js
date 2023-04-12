export const Task = (props) => {
    return (
        <div>
            <h1>{props.taskName}</h1>
            <button>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>Delete Task</button>
        </div>
    )
}