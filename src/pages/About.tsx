import React from 'react'
import { Element } from 'react-scroll';
const About: React.FC = () => {
    return (
        <Element name={'about'} id='about' className='pb-10 py-20 md:py-20'>
            <div className='container mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">About</h2>
                <h3 className='max-w-[90%] md:max-w-[80%] mx-auto text-sm md:text-lg text-center dark:text-secondary' id="about-description">
                    A Full Stack Developer with around 6 years of software engineering expertise and more than 3 years in blockchain technology, focusing on Solidity and Rust for smart contract development. Has in-depth experience with React and Vue in creating decentralized applications (Dapps), emphasizing clean, scalable, and maintainable code. Recognized for excellent self-management in solo projects and effective teamwork. Driven by a passion to advance blockchain adoption and development, committed to delivering innovative projects that surpass objectives.
                </h3>
            </div>
        </Element>
    )
}

export default About;   