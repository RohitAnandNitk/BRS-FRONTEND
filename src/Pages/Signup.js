import React, { useState } from 'react'
import './Signup.css'


const Signup = () => {
// here we can create useState for each input field insted we can create in one useState.
  const [user , setUser] = useState({
    name:"" , 
    rollno :"",
    regno:"", 
    prog:"", 
    mob:"",
    email:"",
     pass:"", 
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
          [e.target.prog]: e.target.prog,
          [e.target.mob]: e.target.mob,
          [e.target.email]: e.target.email,
          [e.target.pass]: e.target.pass,
          [e.target.conpass]: e.target.conpass
        });
  };
      
   
    const handleSubmit = (e) =>{
     e.preventDefault();
    // console.log(e.name);
    const occuredError  = {};

     // chechk the empty field
     if(user.name == ""){
        //  showError({name :"Please Enter Name"});
         occuredError.name = "Please Enter Name"
     }
     if(user.rollno== ""){
      // showError({rollno :"Please Enter Roll No."});
      occuredError.rollno = "Please Enter Roll No.";
     }
     if(user.regno == ""){
      // showError({regno :"Please Enter Registration No."});
       occuredError.regno = "Please Enter Registration No.";
     }
     if(user.email == ""){
      // showError({prog :"Please Enter Programe"});
      occuredError.email = "Please Enter Email";
     }else if(!user.email.endsWith("@gmail.com")  || user.email[0] == '@'){
      occuredError.email = "Please Enter Valid Email";  
     }
     if(user.prog == ""){
      // showError({prog :"Please Enter Programe"});
      occuredError.prog = "Please Enter Programe";
     }
     if(user.mob == ""){
      // showError({mob :"Please Enter Mobile Number"});
      occuredError.mob = "Please Enter Mobile Number";
     }
     else if(user.mob.length < 10 || isNaN(user.mob)){
      if(user.mob.length < 10 )  occuredError.mob = "Please Enter Valid Mobile Number";
      if(isNaN(user.mob) )  occuredError.mob = "Please Enter Digit Only";
     }
     
    if(user.pass == ""){
      // showError({pass :"Please Enter Password Again"});
      occuredError.pass = "Please Enter Password";
    }
    else if(user.pass.length < 8){
      occuredError.pass = "Length of Password should have at least 8";
    }


     if(user.conpass == ""){
      //  showError({conpass :"Please Enter Password Again"});
      occuredError.conpass  = "Please Enter Password Again";
     }
     else if(user.pass.length < 8){
      occuredError.conpass = "Length of Password should have at least 8";
    }
    else if( user.pass != user.conpass){
      occuredError.pass = "Password Not Matched";
      occuredError.conpass = "Password Not Matched";
    } 
    else{
        showMess(true);
     }

     showError(occuredError);
  };

  return (
    <div className="register-container" >
    
      <form className="register-form"   >
        <h2>Register</h2>
        <h2 style={{color:'green', fontSize:'20px'}}>{ sucess ? <p><img src = "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon-thumbnail.png" style={{height:'20px', marginRight:'8px'}}/>{user.name}  You have Registered Sucessffuly.</p> : ""}</h2>
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
        <span style={{color:'red'}}>{error.prog}</span>
        <input
          type="text"
          required
          onChange={handleChange}
          value ={user.prog}
          name = "prog"
        />
        <label>Mobile Number:</label>
        <span style={{color:'red'}}>{error.mob}</span>
        <input
          type="tel"
          required
          onChange={handleChange}
          value ={user.mob}
          name = "mob"
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
        <span style={{color:'red'}}>{error.pass}</span>
        <input
          type="password"
          required
          onChange={handleChange}
          value ={user.pass}
          name = "pass"
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
