import React, { useState } from "react";
import { Element } from "react-scroll";
import axios from "axios";

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [loading, setLoading] = useState<boolean>(false);
    const handleSend = () => {

        if (!email) {
            alert('input email address')
            return
        }

        if (email) {
            let emailValidSttus = emailRegex.test(email);
            if (!emailValidSttus) {
                return;
            }
            setLoading(true);
            axios.post(`${import.meta.env.VITE_FORMSPREE_ENDPOINT}`,
                {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                }
            ).then(() => {
                setLoading(false)

            }).catch(() => {
                setLoading(false)
            })
        }
    }
    return (
        <Element name={'contact'} id='contact' className="pb-10 py-20 md:py-20">
            <div className='container px-4 mx-auto'>
                <h2 className='mb-10 text-center text-3xl md:text-4xl font-rale font-medium dark:text-white' id="about-title">Contact</h2>
                <div className="w-full md:w-[25rem] lg:w-[31.75rem] mx-auto">
                    <div className="relative mb-6">
                        <input
                            type="text"
                            className="font-popp peer px-4 py-2 w-full rounded border-[1px] dark:text-white bg-white dark:bg-grey-light border-gray hover:border-primary focus:shadow-input focus:border-primary outline-none placeholder:transition-all placeholder:duration-300 placeholder:opacity-100 focus:placeholder:opacity-0 transition-all duration-300"
                            id="Name"
                            placeholder="Your Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label
                            htmlFor="name"
                            className="font-popp absolute left-3 px-4 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] transition-all duration-300 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-grey-light -z-10 peer-focus:z-10"
                        >Your Name
                        </label>
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="email"
                            className="font-popp peer px-4 py-2 w-full rounded border-[1px] dark:text-white bg-white dark:bg-grey-light border-gray hover:border-primary focus:shadow-input focus:border-primary outline-none placeholder:transition-all placeholder:duration-300 placeholder:opacity-100 focus:placeholder:opacity-0 transition-all duration-300"
                            id="email"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            htmlFor="email"
                            className="font-popp absolute left-3 px-4 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] transition-all duration-300 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-grey-light -z-10 peer-focus:z-10"
                        >Your Email
                        </label>
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            className="font-popp peer px-4 py-2 w-full rounded border-[1px] dark:text-white bg-white dark:bg-grey-light border-gray hover:border-primary focus:shadow-input focus:border-primary outline-none placeholder:transition-all placeholder:duration-300 placeholder:opacity-100 focus:placeholder:opacity-0 transition-all duration-300"
                            id="subject"
                            placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <label
                            htmlFor="subject"
                            className="font-popp absolute left-3 px-4 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] transition-all duration-300 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-grey-light -z-10 peer-focus:z-10"
                        >Subject
                        </label>
                    </div>
                    <div className="relative mb-6">
                        <textarea
                            className="font-popp peer px-4 py-2 w-full rounded border-[1px] dark:text-white bg-white dark:bg-grey-light border-gray hover:border-primary focus:shadow-input focus:border-primary outline-none placeholder:transition-all placeholder:duration-300 placeholder:opacity-100 focus:placeholder:opacity-0 transition-opacity duration-300"
                            id="message"
                            rows={5}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label
                            htmlFor="message"
                            className="font-popp absolute left-3 px-4 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] transition-all duration-300 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-white dark:peer-focus:bg-grey-light -z-10 peer-focus:z-10"
                        >Message
                        </label>
                    </div>
                    <button onClick={handleSend}
                        className="font-popp w-full bg-primary text-white hover:bg-[#4ea9ff] px-4 py-3 rounded-md mb-4 text-lg">
                        {
                            loading &&
                            <svg aria-hidden="true" className="mr-2 inline w-6 h-6 animate-spin fill-gray-light" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        }Send Message
                    </button>
                </div>
            </div>
        </Element>
    )
}

export default Contact;