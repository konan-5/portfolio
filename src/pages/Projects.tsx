import React from "react";
import { Element } from "react-scroll";
import { projects } from "../utils/constants";
import ProjectItem from "../components/ProjectItem";

const Projects: React.FC = () => {
    return (
        <Element name={'projects'} id="projects" className="py-10 md:py-20 bg-white dark:bg-grey-light">
            <div className="container px-4 mx-auto">
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">Projects</h2>
                <div className="flex-wrap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        projects.map((item, key) => (
                            <ProjectItem {...item} key={`projects${key}`} />
                        ))
                    }
                </div>
            </div>
        </Element>
    )
}

export default Projects 