import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";

function Main () {
    return (
        <main id='main'>
            <AboutMe />
            <div id='projects'>
                <Projects />
            </div>
        </main>
    )
}

export default Main;