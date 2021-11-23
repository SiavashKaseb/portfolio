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
                <p className="about-sub">I am Siavash from Iran
                    A web developer who may sit for hours on a line but never get bored
                    Look for challenges, new things, more design or even new games :)
                    I am very happy because I am more and more interested in my work day by day and I accept all its difficulties and continue
                </p>
            </div>

        </div>
        
    )
}

export default About
