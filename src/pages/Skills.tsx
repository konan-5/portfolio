import React from "react";
import { Element } from "react-scroll";
import { skills } from "../utils/constants";

const Skills: React.FC = () => {
    return (
        <Element name={'skills'} id='skills' className="pb-10 py-20 md:py-20">
            <div className='container px-4 mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="skills-title">Skills</h2>
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-y-10  text-center">
                    {
                        skills.map((item, key) => (
                            <img src={item.icon} className="p-1 mx-auto rounded-md dark:bg-white" alt={item.skill} title={item.skill} key={`skill${key}`} />
                        ))
                    }
                </div>
            </div>
        </Element>
    )
}

export default Skills;