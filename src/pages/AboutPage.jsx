import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function AboutPage() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
    }, [])

    return(
        <div>
            <h1>About Us</h1>
            {
                todos.map(todo => (
                    <Link key={todo.id} to={`/todos/${todo.id}`}>
                        <li>{todo.id} {todo.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}
export default AboutPage