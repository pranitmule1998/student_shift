import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./a.css";

const Add =()=>{

  const navigate =  useNavigate()
   
  function savedata(data){
    axios.post("http://localhost:8000/students",data)
     navigate("/show")
  }
 
    const {register,handleSubmit} = useForm()

    return(
        <form onSubmit={handleSubmit(savedata)}  >
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

<label htmlFor="time" >7:00 to 8:00</label> 
<input type="checkbox"  name="shift"   id="seven" value="7 to 8"  {...register("shift")} />

<br/><br/>
<input type="submit" value="Submit"  style={{marginBottom:5}}/>



        </form>
    )
}
export default Add;