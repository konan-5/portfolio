import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { socials } from "../utils/constants";

const Footer: React.FC = () => {
    return (
        <footer
            className="relative bg-white dark:bg-grey-light pt-8 md:pt-10 lg:pt-12">
            <div className="container px-8 mx-auto">
                <div className="md:flex justify-between items-end">
                    <div className="mb-4">
                        <ScrollLink
                            to='hero'
                            smooth={true}
                            duration={300}
                            className='text-black dark:text-white cursor-pointer'>
                            <p className='uppercase text-2xl font-bold font-rale mb-4'>Hiroshi</p>
                        </ScrollLink>
                        <a className="mt-4 md:text-lg text-primary dark:text-secondary" href="mailto:ikedahiroshi517@gmail.com">ikedahiroshi517@gmail.com</a>
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