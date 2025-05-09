import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import ContactForm from './ui/ContactForm'

function Footer() {
    return (
        <footer id='contact' className="w-full py-20 pb-10">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] z-10 custom_cursor">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the  <span className="text-purple">next level?</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <ContactForm />

            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Developed by Bharat Shinde
                </p>

                <div className="flex items-center md:gap-3 mt-3 lg:mt-0 gap-6">
                    {socialMedia.map((info) => (
                        <a key={info.id} href={info.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <div

                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer