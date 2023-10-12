import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

const Update =()=>{

   const {ok} =  useParams()
  const navigate =  useNavigate()


   const {register,handleSubmit,setValue} =   useForm()

    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/students/get/${ok}`)
        result.data = result.data[0] 
        setValue("name",result.data.name)
        setValue("gender",result.data.gender)
        setValue("course",result.data.course)
        setValue("shift",result.data.shift)
    }


    function savedata(data){
        axios.put(`http://localhost:8000/students/update/${ok}`,data)
         navigate("/show")
      }

      useEffect(()=>{
        fetchdata()
      },[])

    return(
        <form onSubmit={handleSubmit(savedata)} >
        <h1>Registration form</h1>

        <label htmlFor="name" >Name</label> &nbsp;
        <input type="text" id="name"placeholder="Enter name" {...register("name")} />

        <br/><br/>

        <label htmlFor="gender" >Gender:</label>&nbsp;
        <input type="radio" id="male" name="gender" value="Male" {...register("gender")}  />&nbsp;
        <label >Male</label>&nbsp;

        <input type="radio" id="female" name="gender" value="Female" {...register("gender")} />&nbsp;
        <label >Female</label>&nbsp;

        <br/><br/>
        <label htmlFor="course" >Course:-</label>&nbsp;
<select id="course" {...register("course")} >
    <option value="html" >HTML</option>
    <option value="Css" >Css</option>
    <option value="js" >Js</option>
    <option value="react" >React</option>
</select>


<br/><br/>
<label>Select Shift:-</label>   &nbsp; &nbsp;
<label htmlFor="shift"  >5:00 to 6:00</label>
<input type="checkbox"  name="shift" id="five"  value="5 to 6"  {...register("shift")} /> &nbsp; &nbsp;

<label htmlFor="time" >6:00 to 7:00</label> 
<input type="checkbox"  name="shift"  id="six" value="6 to 7"  {...register("shift")} /> &nbsp; &nbsp;

<label htmlFor="time" >5:00 to 6:00</label> 
<input type="checkbox"  name="shift"   id="seven" value="7 to 8"  {...register("shift")} />

<input type="submit" value="Submit" />

        </form>
    )
}
export default Update;