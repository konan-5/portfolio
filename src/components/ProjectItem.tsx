import React from "react";
import { ProjectItemProps } from "../utils/interfaces";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    const { images, title, description } = props;
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
                                <div className="rounded-lg shadow-[0px_2px_8px_2px_grey] overflow-hidden">
                                    <img src={item} alt="" className="rounded-lg w-auto h-full hover:scale-125 transition-all duration-300" />
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