import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials, companies } from '@/data'
import Image from 'next/image'

function Clients() {
    return (
        <section id='testimonials' className="py-20">
            <h1 className="heading custom_cursor">
                Kind words from <span className="text-purple"> satisfied clients</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">

                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {companies.map((company) => (
                        <React.Fragment key={company.id}>
                            <div className="flex md:max-w-64 max-w-32 gap-2">
                                <a href={company.link} target="_blank" rel="noopener noreferrer">
                                    <img

                                        src={company.img}
                                        alt={company.name}
                                        className={`h-10 md:h-12`}
                                    />
                                </a>

                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients