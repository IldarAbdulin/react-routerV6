import { useAuth } from "../hook/useAuth"
import { useNavigate } from "react-router-dom"
function CreateTodo() {
    const {signOut} = useAuth()
    const navigate = useNavigate()
    return(
        <div>
            <h1>Create Todo</h1>
            <button onClick={() => signOut(() => navigate('/', {replace:true}))}>Logout</button>
        </div>
    )
}
export default CreateTodo