import React from 'react'
import { navLinks } from '../utils/constants'
import ThemeToggler from '../components/ThemeToggler'
import { Link as ScrollLink } from "react-scroll";
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';
import { useTheme } from '../contexts/ThemeProvider';

const Header: React.FC = () => {

    const [hamburger, setHamburger] = React.useState<boolean>(false);
    const { theme } = useTheme();

    return (
        <>
            <header
                className={`fixed z-40 top-0 left-0 h-[70px] w-full flex items-center bg-[rgba(255,255,255,.8)] dark:bg-[rgba(255,255,255,0)] backdrop-blur-[30px] shadow-[0_3px_6px_3px_rgba(0,0,0,0.4)] transition-all duration-300`}>
                <div className='container mx-auto flex items-center justify-between px-2'>
                    <ScrollLink
                        to='hero'
                        smooth={true}
                        duration={300}
                        className='text-black flex items-center dark:text-white cursor-pointer'>
                        <img className="w-[35px] h-[35px]" src={theme == "light" ? logoLight : logoDark} alt="" />
                        <p className='hidden sm:inline ml-4 uppercase text-2xl font-bold font-rale'>Hiroshi</p>
                    </ScrollLink>
                    <div className='flex items-center'>
                        <ul className='hidden md:flex'>
                            {
                                navLinks.map((item, key) => (
                                    <li className='' key={`pc-nav${key}`}>
                                        <ScrollLink
                                            to={item.href}
                                            smooth={true}
                                            duration={300}
                                            className='text-grey dark:text-gray-light hover:text-primary dark:hover:text-primary font-semibold font-popp py-2 pl-8 cursor-pointer'>
                                            {item.title}
                                        </ScrollLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <ThemeToggler />
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center cursor-pointer md:hidden transition-all duration-300" onClick={() => setHamburger(prev => !prev)}>
                            <div className={`bg-gray dark:bg-gray-light w-[18px] h-[2px] transition-all duration-500 ${hamburger ? '-rotate-45 translate-y-[8px] delay-200' : 'rotate-0 translate-y-0'}`}></div>
                            <div className={`bg-gray dark:bg-gray-light h-[2px] flex justify-center items-center my-[6px] transition-all duration-300 ${hamburger ? 'w-0' : 'w-[18px] delay-300'}`}></div>
                            <div className={`bg-gray dark:bg-gray-light w-[18px] h-[2px] transition-all duration-500 ${hamburger ? 'rotate-45 -translate-y-[8px] delay-200' : 'rotate-0 translate-y-0'}`}></div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`md:hidden fixed z-30 w-full rounded-b-md bg-gray dark:bg-black shadow-[0_20px_40px_20px_rgb(0,0,0,.3)] transition-all duration-500 ${hamburger ? 'translate-y-[70px]' : '-translate-y-[300px]'}`}>
                <ul className={`w-auto h-auto py-4 px-2  my-auto mx-0 outline-4 `}>
                    {
                        navLinks.map((item, key) => (
                            <li className='text-center w-full ' key={`mobile-nav${key}`}>
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setHamburger(false)} className='rounded-md py-2 block font-medium text-white border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'>{item.title}</ScrollLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Header