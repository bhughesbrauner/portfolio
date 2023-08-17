import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ','m','e']}
                        index={15}
                    />
                </h1>
                <p>With a deep-rooted passion for software engineering, I bring a versatile skill set that encompasses both front-end and back-end technologies. My proficiency in languages such as JavaScript and Ruby, coupled with my hands-on experience with frameworks like Vue.js and Ruby on Rails, underscores my ability to craft elegant and efficient code. I thrive in collaborative environments, having seamlessly collaborated with cross-functional teams to bring complex projects to fruition. My strong problem-solving skills, honed through countless coding challenges, enable me to dissect intricate issues and devise innovative solutions.</p>
                <p>Beyond technical prowess, I am a dedicated advocate for clean code architecture and thorough documentation. My commitment to best practices ensures that my work not only meets immediate requirements but also paves the way for scalable and maintainable solutions. My drive to optimize performance led me to explore efficient algorithms and data structures, a pursuit that bolsters my ability to craft high-performance software.</p>
                <p>In addition to my technical expertise, my leadership within tech-focused communities exemplifies my commitment to fostering growth and diversity within the industry. As a proactive contributor and collaborator, I am well-equipped to drive innovation, overcome challenges, and contribute positively to any software engineering endeavor.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;