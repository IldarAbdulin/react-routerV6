import { useParams } from "react-router-dom"

function EditPost() {

    const {id} = useParams()

    return(
        <div>
            <h1>Edit Todo {id}</h1>
        </div>
    )
}
export default EditPost