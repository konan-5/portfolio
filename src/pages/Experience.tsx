import React from "react";
import { Element } from "react-scroll";
import { experiences } from "../utils/constants";

const Experience: React.FC = () => {
    return (
        <Element name={'experience'} id='skills' className="pb-10 py-20 md:py-20 bg-white dark:bg-grey-light">
            <div className='container px-4 mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="experience-title">Experience</h2>
                <ul className="px-2">
                    {
                        experiences.map((item, key) => (
                            <li className="relative pl-4 lg:pl-6 pb-6 border-l-2 dark:border-secondary" key={`experience${key}`}>
                                <div className="absolute top-0 z-10 bg-white dark:bg-grey-light left-0 w-[24px] h-[24px] border-[2px] dark:border-secondary rounded-full -translate-x-[14px]">
                                </div>
                                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold font-mont dark:text-white">{item.role}</h4>
                                <div className="mt-2 flex justify-between">
                                    <h5 className="text-sm lg:text-lg font-semibold dark:text-white">{item.company}, {item.country} {`(${item.option})`}</h5>
                                    <h5 className="text-sm lg:text-lg font-semibold dark:text-white" title="Period">{item.start_date} - {item.end_date}</h5>
                                </div>
                                <ul className="mt-2 lg:mt-3 list-disc dark:list-image-[rgb(255,255,255)] ml-6 lg:ml-8">
                                    {
                                        item.works &&
                                        item.works.map((subItem, key) => (
                                            <li className=" dark:marker:text-white" key={`work${key}`}>
                                                <p className="text-xs lg:text-base font-popp dark:text-white">{subItem}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Element>
    )
}

export default Experience;