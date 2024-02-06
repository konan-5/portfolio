import React from 'react'

const About: React.FC = () => {
    return (
        <section id='about' className='py-16'>
            <div className='container mx-auto'>
                <h2 className='text-center text-3xl md:text-4xl font-rale font-medium dark:text-white underline' id="about-title">Introduction</h2>
                <h3 className='max-w-[80%] mx-auto mt-10 text-lg' id="about-description">
                    Full Stack Developer with comprehensive about 6 years background in software engineering and over 3 years of specialized experience in blockchain technology focusing on Solidity and Rust for smart contract development and blockchain infrastructure. Strong knowledge in crafting Dapps utilizing frameworks like React and Vue, with a strong commitment to writing clean, scalable, and reusable code. Led development of $100K research project which was deemed a “silver standard” by the client. Known for exceptional self-management skills on solo projects and seamless integration into team environments. Passionate about leveraging my technical skills and industry knowledge to drive forward the adoption and development of blockchain technology, aiming to deliver cutting-edge projects that meet and exceed project goals.
                </h3>
            </div>
        </section>
    )
}

export default About;