import React,{useState} from 'react'
import { Form ,Button, Alert} from 'react-bootstrap'
import { Switch } from 'react-router-dom'
import axios from 'axios'
import './regForm.css'
import { useHistory } from 'react-router-dom'
export default function RegForm() {
    let history=useHistory()
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword=RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$');
    const [inputState,setInputState]=useState({isError:{
          username : '',
          email : '',
          password :''
    }})
    const handleChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name,value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            case "username":
                errHandle.username = value.length<6?"at least 6 char":"";
                
                break;
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
        console.log("inputstate is:",inputState)
    }
    const Submithandler=(event)=>{
        event.preventDefault();
        console.log(inputState);
        const value = inputState;
        axios.post(' https://project-node-1.herokuapp.com/postUserData',value)//jiya@gmail.com  @Debika1
        .then((res)=>{
            console.log("axios res",res);
            window.sessionStorage.setItem("token_value",res.data.token)
             history.push("/sign")

        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="container con">
            <h3> Registration Form</h3>

           <Form onSubmit={Submithandler}className="formm">
           <Form.Group className="mb-3 c" controlId="formBasicPassword">
           <Form.Label>User_ Name:</Form.Label>
           <Form.Control type="text" placeholder="enter username"  name="username" onChange={handleChange} className="p"/>
            {inputState.isError.username.length>0&&(<span>{inputState.isError.username}</span>)}
            </Form.Group>
             <Form.Group className="mb-3 " controlId="formBasicEmail">
             <Form.Label>Email address:</Form.Label>
             <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} className="p"/>
             <p className="error">
             {inputState.isError.email.length>0&&(<span>{inputState.isError.email}</span>)}
             </p>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
           </Form.Text>
           </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} className="p"/>
          </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
          <Button variant="primary" type="submit" className="sub">
           Submit
         </Button>
    </Form>
        </div>
    )
}
