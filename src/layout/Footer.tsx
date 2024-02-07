import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
    return (
        <footer
            className="relative bg-white dark:bg-grey-light pt-8 md:pt-10 lg:pt-12">
            <div className="container px-8 mx-auto">
                <div className="flex mb-4">

                    <ScrollLink
                        to='hero'
                        smooth={true}
                        duration={300}
                        className='text-black dark:text-white cursor-pointer'>
                        <div className=''>

                        </div>
                        <p className='uppercase text-2xl font-bold font-rale'>Hiroshi</p>
                    </ScrollLink>
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