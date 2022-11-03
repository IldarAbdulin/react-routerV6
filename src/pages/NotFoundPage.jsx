import { Link } from "react-router-dom"

function NotFoundPage() {
    return(
        <div>Ничего не найдено 
            <Link to='/'>Вернутьсяв главное меню</Link>
        </div>
    )
}

export default NotFoundPage