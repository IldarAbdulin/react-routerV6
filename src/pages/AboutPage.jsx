import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import BlogFilter from "../components/BlogFilter"

function AboutPage() {

    const [todos, setTodos] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('todo') || '';

    const latest = searchParams.has('latest');
    const statsForm = latest ? 80 : 1

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
    }, [])

    return(
        <div>
            <h1>About Us</h1>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
            <Link to='/todos/new'>Add new todo</Link>
            {
                todos.filter(
                    todo => todo.title.includes(postQuery) && todo.id >= statsForm
                )
                .map(todo => (
                    <Link key={todo.id} to={`/todos/${todo.id}`}>
                        <li>{todo.id} {todo.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}
export default AboutPage