import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";
import "./Singnin.css";

const SingnIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isAuth,loading} = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  // <Redirect to="/test" />  :
  return (
    <div>
      { loading ? <h1>loading...</h1>: isAuth ? <Redirect to='/UserDashbord'/> :  (
      <div className="contain">
        <p className="heading">Login in</p>
        <div className="box">
          <p>Email</p>
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="box">
          <p>Password</p>
          <div>
            <input
              type="password"
              name=""
              id=""
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="loginbtn" type="submit" onClick={handleSubmit}>
          Login
        </button>
        <p className="text">Dont have an account ?</p>
        <Link to="/login">
          <button className="loginbtn">Sign UP</button>
        </Link>
      </div>
    )}
    </div>
  );
};

export default SingnIn;
