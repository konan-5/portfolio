import React from "react";
import { ProjectItemProps } from "../utils/interfaces";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ProjectItem: React.FC<ProjectItemProps> = (props) => {

    const { images, title } = props;
    return (
        <div className="w-full bg-prima rounded-lg p-2 border-[1px] shadow-[0px_5px_5px_grey] ">
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
                            <SwiperSlide key={`${item}`} className="">
                                <img src={item} alt="" className="rounded-lg w-auto h-full " />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem