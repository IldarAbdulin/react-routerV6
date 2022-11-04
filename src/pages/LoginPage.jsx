import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth()

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const form =  event.target
        const user = form.username.value
        signIn(user, () => navigate(fromPage, {replace: true}))
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" type="text" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginPage