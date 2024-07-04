import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer>
            <p>Copyright Connor Page 2024</p>
            {/* <a href="https://github.com/connorpage1/" target="blank">See more projects.</a> */}
            <div id='social-icons'>
                <SocialIcon url='https://www.linkedin.com/in/gconnorpage/' />
                <SocialIcon url='https://medium.com/@gconnorpage' />
                <SocialIcon url='https://github.com/connorpage1/' />

            </div>
        </footer>
    )
}

export default Footer