import BurgerLines from './BurgerLines.svg'


function Burger ({burgerView, setBurgerView}){
    // console.log(burgerView)
    const clickHandle = () => {
            !burgerView ? setBurgerView(true) : setBurgerView(false)
            console.log(burgerView)
    }


    return (
        <div className={!burgerView ? 'Hide' : 'burgerButton'} onClick={clickHandle}>
        <img src={BurgerLines} alt='Burger Lines' className='burgerSvg'/>
        </div>
    )
}

export default Burger;