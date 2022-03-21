import UpArrow from "./UpArrow/UpArrow";

function Navbar () {
    return <nav className='navWrapper'>
        <div className='nameBox'><h3>Samuel Shanagher</h3></div>
        <button className='lightMode'>L</button>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <UpArrow />
    </nav>
}

export default Navbar;