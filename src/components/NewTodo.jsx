import { Form } from "react-router-dom"

function NewTodo({submitting}) {
    return (
        <div>
            <Form action="/todos/new" method="todo">
                <label>
                    Title:
                    <input type="text" name="title"/>
                </label>
                <label>
                    Body:
                    <input type="text" name="body"/>
                </label>
                <input type="hidden" name="userId" value="1"/>
                <input type="submit" value="Add todo" disabled={submitting}/>
            </Form>
        </div>
    )
}
export default NewTodo