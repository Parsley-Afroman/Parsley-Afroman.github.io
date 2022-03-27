import {FaRegWindowClose} from "react-icons/fa";

function DropDownMenu ({burgerView, setBurgerView}){
    function clickHandle () {
        setBurgerView(!burgerView)
    }
    return (
        <>
        <div className={!burgerView ? 'dropDownMenu' : 'Hide'}>
            <div className='cross' onClick={clickHandle}>
                <FaRegWindowClose />
            </div>
            <ul>
                <li><a href='#'>About Me</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contacts</a></li>
            </ul>
        </div>
        </>
    )
}

export default DropDownMenu;