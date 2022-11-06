import { Suspense } from "react";
import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom"
import BlogFilter from "../components/BlogFilter"

function AboutPage() {

    const {todos} = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('todo') || '';

    const latest = searchParams.has('latest');
    const statsForm = latest ? 80 : 1

    return(
        <div>
            <h1>Todos</h1>
            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams}/>
            <Link to='/todos/new'>Add new todo</Link>
            <Suspense fallback={<h2 className="loading">Loading...</h2>}>
                <Await resolve={todos}>
                    {
                        (resolvedTodos) => (
                            <>
                                {
                                    resolvedTodos.filter(
                                        todo => todo.title.includes(postQuery) && todo.id >= statsForm
                                    )
                                    .map(todo => (
                                        <Link key={todo.id} to={`/todos/${todo.id}`}>
                                            <li>{todo.id} {todo.title}</li>
                                        </Link>
                                    ))
                                }
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </div>
    )
}

async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json()
}

function todoLoader() {
    return defer({
        todos: getTodos()
    })
}

export {AboutPage , todoLoader} 