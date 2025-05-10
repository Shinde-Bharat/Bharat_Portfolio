"use client"
import React, { useMemo } from 'react'


import { BentoGrid } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { BentoGridItem } from './ui/BentoGridItem'
export default function Grid() {
    return (
        <section id='about' >
            <BentoGrid className="w-full py-20">
                {gridItems.map(({ id, title, description, className, imgClassName, titleClassName, spareImg, img }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}


                    />
                ))} 
            </BentoGrid>
        </section>
    )
}
