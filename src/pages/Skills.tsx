import React from "react";
import { Element } from "react-scroll";

const Skills: React.FC = () => {
    return (
        <Element name={'skills'} id='skills' className="py-10 md:py-20">
            <div className='container mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">Skills</h2>
            </div>
        </Element>
    )
}

export default Skills;