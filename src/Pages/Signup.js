import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BaseURL = "http://localhost:4000";


const Signup = () => {
// here we can create useState for each input field insted we can create in one useState.
  const [user , setUser] = useState({
    name:"" , 
    rollno :"",
    regno:"", 
    program:"", 
    mobile:"",
    email:"",
     password:"", 
     conpass:""
  });
  
  // render error message
  const [error , showError] = useState({});
  
  // sucessful submit
  const [sucess, showMess] = useState(false);


  const handleChange = (e) =>{
        //     spread operator  ,   key    :     value
        setUser({...user , [e.target.name] : e.target.value,
          [e.target.rollno]: e.target.rollno,
          [e.target.regno]: e.target.regno,
          [e.target.program]: e.target.program,
          [e.target.mobile]: e.target.mobile,
          [e.target.email]: e.target.email,
          [e.target.password]: e.target.password,
          [e.target.conpass]: e.target.conpass
        });
  };
      
  const navigate = useNavigate(); // Call useNavigate at the top level of the component 
    const handleSubmit = async (e) =>{
     e.preventDefault();
    // console.log(e.name);
    const occuredError  = {};

     // chechk the empty field
     if(user.name === ""){
        //  showError({name :"Please Enter Name"});
         occuredError.name = "Please Enter Name"
     }
     if(user.rollno === ""){
      // showError({rollno :"Please Enter Roll No."});
      occuredError.rollno = "Please Enter Roll No.";
     }
     if(user.regno === ""){
      // showError({regno :"Please Enter Registration No."});
       occuredError.regno = "Please Enter Registration No.";
     }
     if(user.email === ""){
      // showError({prog :"Please Enter Programe"});
      occuredError.email = "Please Enter Email";
     }else if(!(user.email.endsWith("@gmail.com"))  || user.email[0] === '@'){
       occuredError.email = "Please Enter Valid Email";  
     }
     if(user.program === ""){
      // showError({program :"Please Enter Programrame"});
      occuredError.program = "Please Enter Programe";
     }
     if(user.mobile === ""){
      // showError({mobile :"Please Enter Mobilemobileile Number"});
      occuredError.mobile = "Please Enter Mobile Number";
     }
     else if(user.mobile.length < 10 || isNaN(user.mobile)){
      if(user.mobile.length < 10 )  occuredError.mobile = "Please Enter Valid Mobile Number";
      if(isNaN(user.mobile) )  occuredError.mobile = "Please Enter Digit Only";
     }
     
    if(user.password === ""){
      // showError({pass :"Please Enter Password Again"});
      occuredError.password = "Please Enter Password";
    }
    else if(user.password.length < 8){
      occuredError.password = "Length of Password should have at least 8";
    }


     if(user.conpass === ""){
      //  showError({conpass :"Please Enter Password Again"});
      occuredError.conpass  = "Please Enter Password Again";
     }
     else if(user.password.length < 8){
      occuredError.conpass = "Length of Password should have at least 8";
    }
    else if( user.password !== user.conpass){
      occuredError.password = "Password Not Matched";
      occuredError.conpass = "Password Not Matched";
    } 
    else{
      // connection for frontend and backend
      const selectedUserRole = document.getElementById("user").value;

      
      const path = selectedUserRole === 'admin' ? `${BaseURL}/admin/signup` : `${BaseURL}/user/signup` ;
        try{
          const response = await fetch( path , { 
            method: "POST",
            headers : {
              "Content-Type" : "application/json",
            },
            body : JSON.stringify(user)
          });
  
          console.log(response);
          showMess(true);

          setTimeout(() =>{
          
            // Redirect or take action based on successful login
            // Redirect based on user role
            if (selectedUserRole === 'admin') {
              navigate('/login'); // Navigate admin to dashboard
            } else {
              navigate('/login'); // Navigate renter to book bicycle page
            }
        }, 2000 );
        }
        catch(err){
           console.log({error : "Failed to Signup"})
           
        }
     }

     showError(occuredError);
  };

  return (
    <div className="register-container" >
    
      <form className="register-form"   >
        <h2>Register</h2>
        <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" alt='valid sign pic' style={{height:'20px', marginRight:'8px'}}/>{user.name}  You have Registered Sucessffuly.</p> : ""}</h2>
        <div className="input-group" >
            <label for="user">Choose an User:</label>
            <select name="user" id="user">
              <option value="customer">Renter</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        <label>Name:</label>
        <span style={{color:'red'}}>{error.name}</span>
        <input
          type="text"
           required
          onChange={handleChange}
          value ={user.name}
          name = "name"
          autoComplete='off'
        />
        <label>Roll Number:</label>
        <span style={{color:'red'}}>{error.rollno}</span>
        <input
          type="text"
          required
          onChange={handleChange}
          value ={user.rollno}
          name = "rollno"
        />
        <label>Registration Number:</label>
        <span style={{color:'red'}}>{error.regno}</span>
        <input
          type="text"
          required
          onChange={handleChange}
          value ={user.regno}
          name = "regno"
        />
        <label>Programme:</label>
        <span style={{color:'red'}}>{error.program}</span>
        <input
          type="text"
          required
          onChange={handleChange}
          value ={user.program}
          name = "program"
        />
        <label>Mobile Number:</label>
        <span style={{color:'red'}}>{error.mobile}</span>
        <input
          type="tel"
          required
          onChange={handleChange}
          value ={user.mobile}
          name = "mobile"
        />
        <label>Email:</label>
        <span style={{color:'red'}}>{error.email}</span>
        <input
          type="email"
          required
          onChange={handleChange}
          value ={user.email}
          name = "email"
        />
        <label>Password:</label>
        <span style={{color:'red'}}>{error.password}</span>
        <input
          type="password"
          required
          onChange={handleChange}
          value ={user.password}
          name = "password"
        />
        <label>Confirm Password:</label>
        <span style={{color:'red'}}>{error.conpass}</span>
        <input
          type="password"
          required
          onChange={handleChange}
          value ={user.conpass}
          name = "conpass"
        />
        <button type="submit"  onClick ={handleSubmit} >Register</button>
      </form>
   
    </div>
  )
}

export default Signup
