import CartWidget from "../cartwidget/CartWidget";
import controller from "../assets/controller.png";
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = () =>{
return(
<nav className='navbar'>
    
    <div className='navbar__name'>
    <img className='navbar__logo'src={controller} alt='controller'/>
       <Link to='/'><h1 alt='controller'>Happy Gaming</h1></Link>
    </div>
    <div className='navbar__categories'>
        <Link to={`category/ps5`} className='playstation'>Playstation 5</Link>
        <Link to={`category/ps4`} className='playstation'>Playstation 4</Link>
        <Link to={`category/xbox-series`} className='xbox'>XBox Series X/S</Link>
        <Link to={`category/xboxone`} className='xbox'>Xbox One</Link>
        <Link to={`category/switch`} className='nintendo'>Nintendo</Link>
        <Link to={`category/clasicos`} className='otros'>Clasicos</Link>

    </div>
    <CartWidget />
</nav>
);
};

export default NavBar