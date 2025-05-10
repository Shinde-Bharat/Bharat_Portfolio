"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBackground";
import { Globe } from "./Globe";
import { GridGlobe } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};


