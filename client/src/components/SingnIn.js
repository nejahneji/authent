import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/actions/userActions';
import './Singnin.css'

const SingnIn = () => {
    const [email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(loginUser({email,password}))
    }
    return (
//         <div className="col-md-5 m-auto">
//             <Form >
//   <Form.Group className="mb-3" controlId="formBasicEmail">
   
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
    
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit"onClick={handleSubmit} >
//     Connect
//   </Button>
//   <h4>OR</h4>
//   <Link to='/login'>
//   <Button variant="primary" type="submit" >
//     SignIn
//   </Button>
//   </Link>
// </Form>
//         </div>
<div className='contain'>
       <p className='heading'>Login in</p>
       <div className='box'>
         <p>Email</p>
         <div>
           <input type='email' name='' id='' placeholder='enter your email'/>
         </div>
       </div>
       <div className='box'>
         <p>Password</p>
         <div>
           <input type='password' name='' id='' placeholder='enter your password'/>
         </div>
       </div>
       <button className='loginbtn'>Login</button>
       <p className='text'>Dont have an account ?</p>
       <Link to='/login'>
       <button className='loginbtn'>Sign UP</button>
  </Link>
     </div>
    )
}

export default SingnIn
