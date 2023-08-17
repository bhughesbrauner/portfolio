import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-b.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLeters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'o', 'o', 'k', 'e', 'h', 'b']
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    


    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _10`}>i</span>
                        <span className={`${letterClass} _11`}>,</span>
                        <br />
                        <span className={`${letterClass} _12`}>I</span>
                        <span className={`${letterClass} _13`}>'</span>
                        <span className={`${letterClass} _14`}>m</span>
                        <img src={LogoTitle} alt="developer"/>
                        <AnimatedLeters letterClass={letterClass}
                        strArray={nameArray}
                        index={15}/>
                        <br />
                        <AnimatedLeters letterClass={letterClass}
                        strArray={jobArray}
                        index={22}/>
                    </h1>
                    <h2>Software Engineer / Frontend Developer </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home;