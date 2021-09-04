import './Navbar.css'

const Navbar = () => {
    return (
        <header>
           <p className='Logo'>navbar</p> 
           <input type='checkBox' name='' className='but'/>
           <div className='nav'>
               <ol>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Services</a></li>
                   <li><a href="#">Contact</a></li>
               </ol>
           </div>
        </header>
    )
}

export default Navbar
