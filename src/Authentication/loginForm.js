import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import './loginForm.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
export const LoginForm = () => {
    let history=useHistory()
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState,setInputState]=useState({isError:{
        email : '',
        password :''
  }})
  const handleChange=(event)=>{
    event.persist();
    let {name,value}=event.target
    let errHandle={...inputState.isError};

    switch(name){
        case "email":
            errHandle.email=
            validateEmail.test(value)?"":"wrong answer"
            break;
       case "password":
            errHandle.password=
            validatePassword.test(value)?"":"invalid password"
            break;
            default:
                break;
    }
    setInputState({...inputState,[name]:value,isError:errHandle})
    // console.log("inputstate is:",inputState)
}

const Submithandler=(event)=>{
    event.preventDefault();
    console.log(inputState);
    const value = inputState;
    axios.post('https://project-node-1.herokuapp.com/postLoginData',value)
    .then((res)=>{
        console.log("axios res",res);
        window.sessionStorage.setItem("token_value",res.data.token)
        history.push("/subcat")
    })
    .catch((err)=>{
        console.log(err);
    })
}
    return (
        <div className="container ">  
        <section className="row justify-content-center">
            <section className="col-12 col-sm-6 col-md-3">
          <Form onSubmit={Submithandler} className="form-container">
             <Form.Group className="mb-3 " controlId="formBasicEmail">
             <Form.Label>Email address:</Form.Label>
             <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} className="p"/>
             <p className="error">
             {inputState.isError.email.length>0&&(<span>{inputState.isError.email}</span>)}
             </p>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Password:</Form.Label>
             <Form.Control type="password" placeholder=" Enter your Password" name="password" onChange={handleChange} className="p"/>
             {inputState.isError.password.length>0&&(<span>{inputState.isError.password}</span>)}
             </Form.Group>
             <h6>Forgot password ?</h6>
             <Button variant="primary" type="submit" className="b">
             Login
            </Button>
                <h6 className="not">Not a member?<a href="#" className="sign"> sign Up</a></h6>
        
       </Form>
       </section>
       </section>
        </div>
    )
}
