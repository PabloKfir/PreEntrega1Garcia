import CartWidget from "../cartwidget/CartWidget";
import controller from "../assets/controller.png";
import './NavBar.css'
const NavBar = () =>{
return(
<nav className='navbar'>
    
    <div className='navbar__name'>
    <img src={controller} alt='controller'/>
        <h1 alt='controller'>Happy Gaming</h1>
    </div>
    <div className='navbar__button'>
        <button className='playstation'>Playstation 5</button>
        <button className='playstation'>Playstation 4</button>
        <button className='xbox'>XBox Series X/S</button>
        <button className='xbox'>Xbox One</button>
        <button className='nintendo'>Nintendo</button>
        <button className='otros'>Clasicos</button>

    </div>
    <CartWidget />
</nav>
);
};

export default NavBar