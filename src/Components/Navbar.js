import { NavLink } from "react-router-dom";
import "./a.css";
const Navbar =()=>{
    return(
        <>
       <button><NavLink to={"/add"} id="h">Add</NavLink></button>  &nbsp; &nbsp;
        <button><NavLink to={"/show"}id="k" >Show</NavLink></button> 
        

        </>
    )
}
export default Navbar;