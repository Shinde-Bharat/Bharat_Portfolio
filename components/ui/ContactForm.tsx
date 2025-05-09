"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import { cn } from "@/utils/cn";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Lottie from "react-lottie";
import animationData from '@/data/msgConfetti.json'


export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState(false);
    const [isSubmitted, setisSubmitted] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mqaqlqzp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
                setisSubmitted(true)
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setisSubmitted(false)
                }, 5000);
            } else {
                console.error("Form submission error:", response.statusText);
                setErrors(true)
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setErrors(true)
            setFormData({ name: '', email: '', message: '' });
        }
    };



    return (
        <form onSubmit={handleSubmit} className="z-10 max-w-md w-full mx-auto rounded-none  md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-100 dark:backdrop-blur-xl border-2 border-purple ">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Get in Touch
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                I&apos;d love to hear from you! Feel free to reach out if you have any questions or just want to chat.
            </p>

            <div className="mt-4 " >

                <LabelInputContainer className="mb-2">
                    <label htmlFor="name">Your Name</label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        type="text"
                        required
                        onChange={handleChange}
                        value={formData.name} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-2">
                    <label htmlFor="email">Your Email</label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="john@gmail.com"
                        type="email"
                        onChange={handleChange}
                        required
                        value={formData.email} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-2">
                    <label htmlFor="message">Your messege</label>
                    <Input
                        id="message"
                        name="message"
                        placeholder="Hii, Let's connect"
                        type="text"
                        onChange={handleChange}
                        required
                        value={formData.message} />
                </LabelInputContainer>

                <div className={`absolute bottom-0 right-0 h-screen`}>
                    {
                        isSubmitted &&
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}

                        />
                    }

                </div>
                <MagicButton
                    type="submit"
                    title={isSubmitted ? 'Message sent!' : "Send your message"}
                    icon={<FaLocationArrow />}
                    position="right"
                />
                {
                    errors && <div className="mt-2 text-sm text-red-800  dark:text-red-500">
                        <span className="font-medium">Oops!</span> Something went wrong. It&apos;s not your fault. I&apos;ll fix it soon.

                    </div>
                }
            </div>



        </form>
    );
}


const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
