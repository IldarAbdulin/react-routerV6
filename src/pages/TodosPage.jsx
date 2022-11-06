import {Outlet ,Link } from "react-router-dom"

function Todos() {
    return(
        <div>
            <h1>About us</h1>

            <ul>
                <li><Link to="contacts">Contacts</Link></li>
                <li><Link to="team">Team</Link></li>
            </ul>

            <Outlet />

            {/* <Routes>
                <Route path="contacts" element={<p>Our Contacts</p>}/>
                <Route path="team" element={<p>Our Team</p>}/>
            </Routes> */}
        </div>
    )
}
export default Todos