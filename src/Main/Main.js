import Profile from './profilepic.jpg'

function Main () {
    return (
        <>
        <main>
            <div className="profileImageContainer">
            <img src={Profile} alt="profile picture" className='profilePic'/>
            </div>
            <div className='introContainer'>
                <div className='aboutMe'>
                    <p className='headerThree'>About Me</p>
                    <p className='aboutMeText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eos explicabo iste odio
                        ratione recusandae, unde. Alias aliquam architecto asperiores distinctio earum et facilis id,
                        illo iusto laboriosam nesciunt nisi pariatur quae quaerat quas quidem rem repellat similique
                        tempore temporibus tenetur voluptate voluptatem. Autem dolorum eligendi ipsa itaque labore
                        laboriosam placeat possimus quos, repellat tempora voluptas voluptates. Ab accusantium animi
                        aspernatur commodi culpa dignissimos doloremque eaque expedita, explicabo illo impedit
                        necessitatibus neque nisi odit placeat provident quaerat ratione rerum sint sit soluta sunt
                        temporibus vitae voluptate voluptatem voluptatibus voluptatum? Corporis debitis eos impedit
                        praesentium quia rerum suscipit temporibus vel voluptatem.</p>
                </div>
                <div className='socialsLinks'>

                </div>
            </div>
        </main>
        </>
    )
}

export default Main;