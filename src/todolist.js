import { useState } from "react"


export default function Todolist() {
    const [todos, setTodos] = useState([{ task: "my first task", completed: false }, { task: "my second task", completed: true }])
    function handleSubmit(event) {
        event.preventDefault()
        let task = event.target.task.value
        if (!task) {
            alert("please provide a valid task")
            return
        }

        setTodos([...todos, { task: task, completed: false }])

        // alert("new task: " + task)
        event.target.reset()
    }
    function changeTaskStatus(index) {
        let newtodos = [...todos]
        newtodos[index].completed = !newtodos[index].completed
        setTodos(newtodos)
    }

    function deleteTask(index) {
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div className="container my-5">
            <div className="mx-auto rounded border p-4" style={{ width: "600px", backgroundColor: "#08618d" }}>
                <h2 className="text-white text-center mb-5">My Todo List</h2>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" placeholder="New Task" name="task" />
                    <button className="btn btn-outline-success" type="submit">Add</button>
                </form>
                {
                    todos.map((todo, index) => {
                        return (
                            <div key={index} className="rounded mt-4 p-2 d-flex" style={{ backgroundColor: todo.completed ? "green" : "grey" }}>

                                <div className="me-auto">

                                    {todo.task}
                                </div>
                                <div>
                                    <i className={todo.completed ? "bi bi-check-square" : "bi bi-square"} style={{ cursor: "pointer" }} onClick={() => changeTaskStatus(index)}></i>
                                    <i className="bi bi-trash text-danger h5" style={{ cursor: "pointer" }} onClick={() => deleteTask(index)}></i>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
