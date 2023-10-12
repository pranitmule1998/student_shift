import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Delete =()=>{
   const navigate =  useNavigate()

   const {ok} = useParams()

   const [user,setuser] =  useState({})


   async function fetchdata(){
       const result = await
       axios.get(`http://localhost:8000/students/${ok}`) 
       setuser(result.data)
   }

   function deletedata(){
    axios.delete(`http://localhost:8000/students/${ok}`)
    navigate("/show")
   }

   useEffect(()=>{
    fetchdata()
   },[])

    return(
        <>
      <form onSubmit={()=>deletedata()}>
        <h1>Are You Want to delete data of <span style={{color:"red"}} >  {user.name}</span> </h1>

       <input type="Submit" value="Yes" />  &nbsp; &nbsp;

        <NavLink to={"/show"} ><button>No</button></NavLink>

      </form>
        </>
    )
}
export default Delete;