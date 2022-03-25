import UpArrow from "./UpArrow/UpArrow";
import Burger from "./Burger/Burger";

function Navbar () {
    return <nav className='navWrapper'>
        <div className='nameBox'><h3>Samuel Shanagher</h3></div>
        {/*intend to have put a light/dark mode button here but will apply that as a later requirement*/}
        {/*<button className='lightMode'>L</button>*/}
        <Burger />
        <ul className='navLinks'>
            <li><a href='#main'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#footer'>Contact</a></li>
        </ul>
        <UpArrow />
    </nav>
}

export default Navbar;