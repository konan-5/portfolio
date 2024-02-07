import React from 'react'
import { Element } from 'react-scroll';
const About: React.FC = () => {
    return (
        <Element name={'about'} id='about' className='py-10 md:py-20'>
            <div className='container mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">About</h2>
                <h3 className='max-w-[90%] md:max-w-[80%] mx-auto text-sm md:text-lg text-center dark:text-secondary' id="about-description">
                    Full Stack Developer with comprehensive about 6 years background in software engineering and over 3 years of specialized experience in blockchain technology focusing on Solidity and Rust for smart contract development and blockchain infrastructure. Strong knowledge in crafting Dapps utilizing frameworks like React and Vue, with a strong commitment to writing clean, scalable, and reusable code. Led development of $100K research project which was deemed a “silver standard” by the client. Known for exceptional self-management skills on solo projects and seamless integration into team environments. Passionate about leveraging my technical skills and industry knowledge to drive forward the adoption and development of blockchain technology, aiming to deliver cutting-edge projects that meet and exceed project goals.
                </h3>
            </div>
        </Element>
    )
}

export default About;