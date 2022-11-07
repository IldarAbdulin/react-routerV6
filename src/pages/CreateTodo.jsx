import { useAuth } from "../hook/useAuth"
import { redirect, useNavigate, useNavigation } from "react-router-dom"
import NewTodo from "../components/NewTodo"
function CreateTodo() {
    const {signOut} = useAuth()
    const navigate = useNavigate()
    const navigation = useNavigation()
    return(
        <div>
            <h1>Create Todo</h1>
            <NewTodo submitting={navigation.state === 'submitting'}/>
            <button onClick={() => signOut(() => navigate('/', {replace:true}))}>Logout</button>
        </div>
    )
}

const createTodo = async ({title, body, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: "POST",
        headers: {'Content-Type': 'application.json'},
        body: JSON.stringify({title, body, userId})
    });
    const newTodo = await res.json();
    return newTodo
}

const createTodoAction = async ({request}) => {
    const formData = await request.formData();
    const newTodo = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId')
    }
    const todo = await createTodo(newTodo)
    return redirect('/todos/' + todo.id)
}

export {CreateTodo ,createTodoAction}