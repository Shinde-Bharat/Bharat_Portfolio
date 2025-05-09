import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { GithubReposSlider } from './GithubProject'

function RecentProjects() {
    return (
        <section id='projects' className="py-20">
            <h1 className="heading custom_cursor">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link, code }) => (
                    <div
                        className="sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
                        key={id}
                    >
                        <PinContainer
                            title={link}
                            href={link}
                        >
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1" title={title}>
                                {title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                title={des}
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 black-gradient h-8 flex justify-center items-center "
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {
                                        code && <a href={code} target='_blank' rel="noopener noreferrer" className="flex justify-center items-center text-purple hover:text-white" >
                                            <p className="flex lg:text-md md:text-xs text-sm ">
                                                Code
                                            </p>
                                            <FiGithub className="ms-1 hidden md:flex" />
                                        </a>
                                    }
                                    <a href={link} target='_blank' rel="noopener noreferrer" className="flex justify-center items-center text-purple hover:text-white" >
                                        <p className="flex lg:text-md md:text-xs text-sm ">
                                            Try it
                                        </p>
                                        <FiExternalLink className="ms-1 hidden md:flex" />
                                    </a>

                                </div>

                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            <GithubReposSlider />
        </section>
    )
}

export default RecentProjects