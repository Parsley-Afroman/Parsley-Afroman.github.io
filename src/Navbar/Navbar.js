import UpArrow from "./UpArrow/UpArrow";
import Burger from "./Burger/Burger";
import {useState} from "react";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

function Navbar () {

   const [burgerView, setBurgerView] = useState(true);

    return <nav className='navWrapper'>
        <DropDownMenu burgerView={burgerView} setBurgerView={setBurgerView}/>
        <div className={!burgerView ? 'Hide' : 'namebox'}><h3>Samuel Shanagher</h3></div>
        {/*intend to have put a light/dark mode button here but will apply that as a later requirement*/}
        {/*<button className='lightMode'>L</button>*/}
        <Burger burgerView={burgerView} setBurgerView={setBurgerView}/>
        <ul className='navLinks'>
            <li><a href='#main'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#footer'>Contact</a></li>
        </ul>
        <UpArrow burgerView={burgerView} />
    </nav>
}

export default Navbar;