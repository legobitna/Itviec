import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form,Button} from"react-bootstrap"
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

export default function Login() {
   let email=''
   let password =''
   const dispatch = useDispatch()
   const history = useHistory()

  const login = (e)=>{
    e.preventDefault();
    let user = {email:email,password:password}
    dispatch({type:"LOGIN",payload:user})
    history.goBack()
    
  }
  return (
    <div className="App">
      <div className="searchHeader-login">
        <div className="pageMenu">
          <img
            className="logo-itviec"
            alt="itviec"
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          />
        </div>
      </div>
    <div className="middle">
        <h1>Login</h1>
      <Form className="login-form" onSubmit={(e)=>login(e)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>email= e.target.value}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange = {(e)=>password=e.target.value} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="danger" type="submit">
    Submit
  </Button>
</Form>
</div>
    </div>
  );
}
