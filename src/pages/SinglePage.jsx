import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"

function SinglePage() {
    const {id} = useParams()
    const [todo, setTodo] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => setTodo(data))
    }, [id])

    return(
        <div>
            {todo && (
                <>
                    <h1>{todo.id}</h1>
                    <p>{todo.title}</p>
                    <Link to={`/todos/${id}/edit`}>Edit this todo</Link>
                </>
            )}
        </div>
    )
}
export default SinglePage