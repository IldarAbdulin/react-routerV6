import { Outlet } from "react-router-dom"
import CustomLink from "./CustomLink";

const setActive = ({isActive}) => ({color: isActive ? 'lightblue' : 'white'});

function Layout() {
    return(
        <div className="layout">

            <header>
                <CustomLink to='/home' >Home</CustomLink>
                <CustomLink to='/todos' >About</CustomLink>  
            </header>

            <Outlet />

        </div>
    )
}
export default Layout