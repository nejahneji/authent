import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../redux/actions/userActions";
import "./userNavbar.css";

const UserNavbar = () => {
  const cart = useSelector (state => state.cart);
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.userReducer)
  const {cartItems} = cart
  return (
    <header>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgyKWQn7NprgQtWYqtKcjcRHxz3qxPcqrYQ&usqp=CAU"
        alt=""
      />
      <input type="checkBox" name="" className="but" />
      <div className="nav">
        <ol>
        
          <Link to='/about'>
            <li>
              <a href="#">About US</a>
            </li>
          </Link>
          <Link>
            <li>
              <a href="#">Services</a>
            </li>
          </Link>
          <Link to='/contact'>
            <li>
              <a href="#">Contact</a>
            </li>
          </Link>
          { token.user.isAdmin ? <Link to="/AdminDashbord">
            <li>
              <a href="#">Admin</a>
            </li>
          </Link> :<></>}
          <Link to="/">
            <li onClick={()=>dispatch(logOut())}>
              <a href="#">Log Out</a>
            </li>
          </Link>
          <Link to="/Command">
            <li>
              <a href="#"><i class="fas fa-cart-arrow-down"></i>
              {cartItems.length > 0 && (<span className="notification">{cartItems.length}</span>)}
              </a>
            </li>
          </Link>
        </ol>
      </div>
    </header>
  );
};

export default UserNavbar;
