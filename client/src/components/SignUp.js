import { Button ,Form  } from 'react-bootstrap';
import React, { useState } from 'react'
import { registerUser } from '../redux/actions/userActions';
import {useDispatch} from 'react-redux'

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(registerUser({fullName,email,password,phone}))
    }
    return (
        <div className="col-md-5 m-auto" style={{"background":"rgba(255,255,255,0.623)"}}>
            <h1>Sign Up</h1>
            <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>FullName</Form.Label>
    <Form.Control type="text" placeholder="FullName" value={fullName} onChange={e => setFullName(e.target.value)}/>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="your phone please" value={phone} onChange={e => setPhone(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit"onClick={handleSubmit} >
    Submit
  </Button>
</Form>
        </div>
     

    )
}

export default SignUp
