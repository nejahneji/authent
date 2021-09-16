import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
           <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgyKWQn7NprgQtWYqtKcjcRHxz3qxPcqrYQ&usqp=CAU"
        alt=""
      />
           <input type='checkBox' name='' className='but'/>
           <div className='nav'>
               <ol>
                   
                   {/* <li><a href="#">About US</a></li>
                   <li><a href="#">Services</a></li>
                   <li><a href="#">Contact</a></li> */}
                   <Link to="/UserDashbord"><li><a href="#">User</a></li></Link>
               </ol>
           </div>
        </header>
    )
}

export default Navbar
