import React from 'react'
import EffectBackground from '../components/EffectBackground';

const Hero: React.FC = () => {
    return (
        <section id='hero' className='bg-white relative h-[60vh]'>
            <div className='absolute z-20'>hero</div>
            <EffectBackground />
        </section>
    )
}

export default Hero;