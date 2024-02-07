import React from "react";
import { socials } from "../utils/constants";

const Footer: React.FC = () => {
    return (
        <footer
            className="relative bg-white dark:bg-grey-light pt-8 md:pt-10 lg:pt-12">
            <div className="container px-8 mx-auto">
                <div className="md:flex justify-between items-end">
                    <div className="justify-between min-[530px]:flex md:block">
                        <a className="mb-4 mx-auto md:text-lg text-grey dark:text-secondary flex items-end" href="mailto:ikedahiroshi517@gmail.com">
                            <i className='bx bx-envelope mr-2 bx-sm'></i>
                            <p className="">ikedahiroshi517@gmail.com</p>
                        </a>
                        <div className="mb-4 mx-auto md:text-lg text-grey dark:text-secondary flex items-end">
                            <i className='bx bxs-map mr-2 bx-sm' ></i>
                            <p className="">Sakurai City, Nara, Japan</p>
                        </div>
                    </div>
                    <ul className="flex justify-center mb-4">
                        {
                            socials.map((item, key) => (
                                <li className="sm:ml-2 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" key={`social${key}`}>
                                    <a href={item.href} className="w-full"><img src={item.icon} alt={item.title} title={item.title} /></a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#89929e83] to-transparent dark:via-[#959CB183]"></div>
                <div className="py-8">
                    <h4 className="font-mont text-center text-lg text-body-color dark:text-white">
                        {'\u00A9'} {new Date().getFullYear()} <span className="text-primary">Hiroshi Ikeda</span>. All Rights Reserved.
                    </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer