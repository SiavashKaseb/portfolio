import "./about.css"
import Image from "../../img/intro2.jpg"

const About = (props) => {
    return (
        <div className="about">

            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Image} alt="aboutImage" className="a-img"/>
                </div>
            </div>
            <div className="about-right">
                <h1 id={props.id} className="about-title">About Me</h1>
                <p className="about-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolor.</p>
                <p className="about-desk">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eligendi.</p>
            </div>

        </div>
        
    )
}

export default About
