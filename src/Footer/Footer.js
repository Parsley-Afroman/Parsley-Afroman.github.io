import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer (){
    return (
        <footer id='footer'>
            <div className='footerLinks'>
                <a href='https://www.linkedin.com/in/samuel-shanagher/' target='_blank'><FaLinkedin /></a>
                <a href='https://github.com/Parsley-Afroman' target='_blank' ><FaGithub /></a>
                {/*can add insta in when I have it adapted to showing the design work I want to exhibit*/}
                {/*<a href='#'><FaInstagram /></a>*/}
            </div>
            <div className='copyright'>
                <p>&#169; 2022          Designed By Samuel Shanagher</p>
            </div>
        </footer>
    )
}

export default Footer;