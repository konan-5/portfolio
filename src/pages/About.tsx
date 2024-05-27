import React from 'react'
import { Element } from 'react-scroll';
const About: React.FC = () => {
    return (
        <Element name={'about'} id='about' className='pb-10 py-20 md:py-20'>
            <div className='container mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">About</h2>
                <h3 className='max-w-[90%] md:max-w-[80%] mx-auto text-sm md:text-lg text-center dark:text-secondary' id="about-description">
                    Software Engineer with comprehensive about more than 6 years background in web development and over 4 years of specialized experience in blockchain technology for smart contract development and blockchain infrastructure with a strong commitment to writing clean, scalable, and reusable code. Engaged in hands-on AI projects since this year, actively pursuing continuous learning and practical application in the field. Known for exceptional self-management skills on solo projects and seamless integration into team environments and also passionate about leveraging my technical skills and industry knowledge to drive forward the adoption and development of blockchain technology, aiming to deliver cutting-edge projects that meet and exceed project goals.
                </h3>
            </div>
        </Element>
    )
}

export default About;   