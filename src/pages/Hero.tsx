import React from 'react'
import EffectBackground from '../components/EffectBackground';
import heroImage from '../assets/hero-image.png'
import TypeWriter from 'typewriter-effect'

const Hero: React.FC = () => {
    return (
        <section id='hero' className='bg-white relative h-[calc(100vh-70px)]'>
            <div className='absolute z-20 h-full w-full'>
                <div className='h-full container gap-10 md:gap-20 lg:gap-32 mx-auto flex flex-col md:flex-row justify-center items-center'>
                    <div className='shadow-[0_3px_6px_3px_rgba(0,0,0,0.4)] rounded-full w-[200px] md:w-[250px] lg:w-[300px]'>
                        <img src={heroImage} className='rounded-full'></img>
                    </div>
                    <div className=''>
                        <h1 className='text-white text-4xl md:text-5xl lg:text-7xl font-bold font-mont text-center md:text-left'>Hiroshi Ikeda</h1>
                        <h2 className='mt-5 text-2xl md:text-3xl text-secondary text-center font-semibold font-popp'>
                            <TypeWriter
                                options={{
                                    strings: [
                                        'Frontend Developer',
                                        'Smart contract Engineer',
                                        'Full Stack Developer',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 10,
                                    delay: 120,
                                }}
                            />
                        </h2>
                    </div>
                </div>
            </div>
            <EffectBackground />
        </section>
    )
}

export default Hero;