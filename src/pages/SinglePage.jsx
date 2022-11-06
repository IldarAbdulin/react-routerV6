import { Suspense } from "react";
import {Await ,Link, useNavigate, useLoaderData, useAsyncValue } from "react-router-dom";

const Todo = () => {
    const todo = useAsyncValue()

    return (
        <>
            <h1>{todo.id}</h1>
            <p>{todo.title}</p>
        </>
    )
}

function SinglePage() {
    const {todo, id} = useLoaderData()

    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    return(
        <div>
            <button onClick={goBack}>Go back</button>
            <Suspense fallback={<h2>Todo is loading...</h2>}>
                <Await resolve={todo}>
                    <Todo />
                </Await>
            </Suspense>
            <Link to={`/todos/${id}/edit`}>Edit this todo</Link>
        </div>
    )
}
async function getTodoId(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return res.json()
}

function postLoader({params}) {
    const id = params.id

    return { todo: getTodoId(id), id};
}

export {SinglePage, postLoader}