import {FaArrowUp} from "react-icons/fa";

function UpArrow({burgerView}) {
    return (
       <>
           <a href='#main' className={!burgerView ? 'Hide' : 'upArrow'}>
               <FaArrowUp />
           </a>
       </>
    );
}

export default UpArrow;