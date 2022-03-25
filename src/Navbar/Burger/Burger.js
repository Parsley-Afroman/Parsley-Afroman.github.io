import BurgerLines from './BurgerLines.svg'

function Burger (){
    return (
        <div className='burgerButton'>
        <img src={BurgerLines} alt='Burger Lines' className='burgerSvg'/>
        </div>
    )
}

export default Burger;