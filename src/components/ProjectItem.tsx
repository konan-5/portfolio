import React from "react";
import { ProjectItemProps } from "../utils/interfaces";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import linkIcon from '../assets/icons/link.png'

import 'swiper/css';
import 'swiper/css/pagination';

const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    const { images, title, description, project_link } = props;
    return (
        <div className="w-full rounded-lg pt-4 shadow-[0px_4px_10px_2px_grey] ">
            <div className="relative w-full">
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="rounded-lg"
                >
                    {
                        images.map((item) => (
                            <SwiperSlide key={`${item}`} className="px-4 py-2">
                                <div className="group rounded-lg shadow-[0px_2px_8px_2px_grey] overflow-hidden relative">
                                    <img src={item} alt="" className="rounded-lg w-auto h-full group-hover:scale-125 hover:opacity-70 transition-all duration-300" />
                                    <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full flex justify-center items-center top-0 z-20 transition-all duration-300">
                                        {project_link &&
                                            <a href={project_link} className="w-[50px] h-[50px] mx-4 shadow-[1px_2px_6px_3px_rgba(50,50,50,.8)] rounded-full p-2" target="_blank">
                                                <img src={linkIcon} alt="Live Site " title="Go to the site" />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="px-4 mt-4">
                    <h5 className="mb-3 text-center md:text-lg font-mont dark:text-white font-semibold ">{title}</h5>
                    <h6 className="mb-4 break-all font-popp text-sm md:text-base font-medium dark:text-white">{description}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem