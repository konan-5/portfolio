import React from "react";
import { ProjectItemProps } from "../utils/interfaces";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    const { images, title } = props;
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
                <div className="mt-4">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem