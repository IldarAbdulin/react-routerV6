import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

function SinglePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null)

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => setTodo(data))
    }, [id])

    return(
        <div>
            <button onClick={goBack}>Go back</button>
            <button onClick={goHome}>Go Home</button>
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