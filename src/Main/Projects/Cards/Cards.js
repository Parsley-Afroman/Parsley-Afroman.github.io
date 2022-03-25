import CardOne from './Screenshot 2022-03-24 at 16.29.31.png'
import CardTwo from './Screenshot 2022-03-25 at 10.39.43.png'

function Cards (){
    return (
        <>
        <div className='cardShow'>
            <img src={CardOne} className='cardImage'/>
            <div className='briefDescription Hide'>
                <p className='cardHeader headerThree'>
                    Wordle
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum enim itaque libero mollitia
                    odio officiis veniam voluptatem? Asperiores aut commodi eaque eius esse harum impedit laboriosam
                    modi quibusdam quo ratione, tempore vitae voluptatem? Accusamus architecto distinctio earum enim
                    impedit inventore ipsam modi molestias nam omnis, quibusdam repellendus temporibus unde!</p>
            </div>
        </div>
            <div className='cardShow'>
                <img src={CardTwo} className='cardImage'/>
                <div className='briefDescription Hide'>
                    <p className='cardHeader headerThree'>
                        Wordle
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum enim itaque libero mollitia
                        odio officiis veniam voluptatem? Asperiores aut commodi eaque eius esse harum impedit laboriosam
                        modi quibusdam quo ratione, tempore vitae voluptatem? Accusamus architecto distinctio earum enim
                        impedit inventore ipsam modi molestias nam omnis, quibusdam repellendus temporibus unde!</p>
                </div>
            </div>
            <div className='cardShow'>
                <div className='briefDescription Hide'>
                    <p className='cardHeader headerThree'>
                        Wordle
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum enim itaque libero mollitia
                        odio officiis veniam voluptatem? Asperiores aut commodi eaque eius esse harum impedit laboriosam
                        modi quibusdam quo ratione, tempore vitae voluptatem? Accusamus architecto distinctio earum enim
                        impedit inventore ipsam modi molestias nam omnis, quibusdam repellendus temporibus unde!</p>
                </div>
            </div>
        </>
    )
}

export default Cards;