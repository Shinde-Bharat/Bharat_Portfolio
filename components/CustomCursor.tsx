"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor') as HTMLElement | null;

        const links = document.querySelectorAll('.custom_cursor')
        const cursorText = document.querySelector('.cursor-text') as HTMLElement | null;
        if (!cursor || !cursorText) return;

        const onMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event
            gsap.to(cursor, { x: clientX, y: clientY })
        }
        const onMouseEnterLink = (event: Event) => {
            const link = event.target as HTMLElement;
            if (link.classList.contains('view')) {
                gsap.set(cursor, { scale: 4 })
                cursorText.style.display = "block"
            } else {
                gsap.set(cursor, { scale: 4 })
            }
        }

        const onMouseLeaveLink = (event: Event) => {
            gsap.set(cursor, { scale: 1 })
            cursorText.style.display = "none"
        }


        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    })
    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'></span>
        </div>
    )
}

export default CustomCursor