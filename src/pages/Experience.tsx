import React from "react";
import { Element } from "react-scroll";
import { experiences } from "../utils/constants";

const Experience: React.FC = () => {
    return (
        <Element name={'experience'} id='skills' className="pb-10 py-20 md:py-20 bg-white dark:bg-grey-light">
            <div className='container px-4 mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">Experience</h2>
                <ul className="">
                    {
                        experiences.map((item, key) => (
                            <li className="" key={`experience${key}`}>
                                <h4 className="">{item.role}</h4>
                                <h5 className="">{item.company}</h5>
                                <h5 className="">{item.country}</h5>
                                <h5 className="">{item.option}</h5>
                                <p className="" title="Period">{item.start_date} - {item.end_date}</p>
                                <ul className="">
                                    {
                                        item.works &&
                                        item.works.map((subItem, key) => (
                                            <li className="" key={`work${key}`}>
                                                <p className="">{subItem}</p>
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