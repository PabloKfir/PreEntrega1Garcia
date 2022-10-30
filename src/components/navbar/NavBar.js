import CartWidget from "../cartwidget/CartWidget";
import controller from "../assets/controller.png";
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () =>{
return(
<nav className='navbar'>
    
    <div className='navbar__name'>
    <img className='navbar__logo'src={controller} alt='controller'/>
       <Link to='/'><h1 alt='controller'>Happy Gaming</h1></Link>
    </div>
    <div className='navbar__categories'>
        <NavLink to={`category/ps5`} className={({isActive})=> isActive ? 'active' : 'playstation'}>Playstation 5</NavLink>
        <NavLink to={`category/ps4`} className={({isActive})=> isActive ? 'active' : 'playstation'}>Playstation 4</NavLink>
        <NavLink to={`category/xbox-series`} className={({isActive})=> isActive ? 'active' : 'xbox'}>XBox Series X/S</NavLink>
        <NavLink to={`category/xboxone`} className={({isActive})=> isActive ? 'active' : 'xbox'}>Xbox One</NavLink>
        <NavLink to={`category/switch`} className={({isActive})=> isActive ? 'active' : 'nintendo'}>Nintendo</NavLink>
        <NavLink to={`category/clasicos`} className={({isActive})=> isActive ? 'active' : 'otros'}>Clasicos</NavLink>

    </div>
    <CartWidget />
</nav>
);
};

export default NavBar