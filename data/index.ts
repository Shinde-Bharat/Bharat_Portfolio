export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building something new",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Bakery E-Commerce Platform",
        des: "Developed a full-fledged e-commerce platform for a bakery shop, allowing customers to browse and purchase products online. Implemented role-based functionalities for customers, shop owners, and delivery personnel. Created a product management system for the bakery owner to add, edit, and manage products. Integrated secure payment gateways and cart functionality with order tracking.",
        img: "/p1_3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/redux.svg", "/express.svg", "/mongo.svg", "/cloudinary.svg", "/jwt.svg"],
        link: "https://bakery-ecommerce-frontend.vercel.app/",
        code: "https://github.com/Shinde-Bharat/E-commerce-Website-for-Reusable-Medical-Products",

    },
    {
        id: 2,
        title: " Signature Forgery Detection using ML",
        des: "Built a machine learning model for detecting signature forgery and verifying authenticity.Utilized a multilayer perceptron model for signature analysis.",
        img: "/sign.png",
        iconLists: ["/s_1.png", "/s_2.png", "/s_3.png", "/s_4.png", "/s_5.png"],
        link: "",
        code: "https://github.com/Shinde-Bharat/Signature-Forgery",
    },
    {
        id: 3,
        title: " Website Development for Swagat Banquets",
        des: "Created an Online Banquet Booking System for efficient hall reservation management.Implemented a user-friendly platform for customers to check hall availability and book halls.",
        img: "/swaget.png",
        iconLists: ["/sw_1.png", "/sw_2.png", "/sw_3.png", "/sw_4.png", "/sw_5.png",],
        link: "",
        code: "https://github.com/Shinde-Bharat/Swagat_Banquets-",
    },

    {
        id: 4,
        title: "E-commerce-Website-for-Reusable-Medical-Products",
        des: "The platform allows users to list medical products they no longer need, while others can purchase and reuse them, promoting sustainability and affordability in the healthcare sector.",
        img: "/b1.png",
        iconLists: ["/py_1.png", "/py_2.png", "/py_3.png", "/py_4.png"],
        link: "",
        code: "https://github.com/Shinde-Bharat/E-commerce-Website-for-Reusable-Medical-Products",
    },
];


export const companies = [

    {
        id: 1,
        name: "Bluestock Fintech",
        link: "https://bluestock.in/",
        img: "/clients/bluestock1.png",
    },
    {
        id: 2,
        name: "Ajspire Technologies Pvt. Ltd.",
        link: "https://ajspire.com/",
        img: "/clients/logo-1.png",
    },
    {
        id: 3,
        name: "Swagat Banquet ",
        link: "",
        img: "/clients/image.png",
    },
    // {
    //     id: 4,
    //     name: "jeevanaadhar",
    //     link: "https://www.jeevanaadharservices.in/",
    //     img: "/clients/jeevanaadhar.png",
    // },
    
];


export const testimonials = [
    {
        quote:
            "Bharat’s ability to build robust backend systems and deliver a user-friendly front-end for Invest.io made a real impact. His precision and dedication to improving the user experience were outstanding. I highly recommend him as a committed and skilled developer.",
        name: "Ganesh Karale",
        id: 1,
        photo: '/testimonials/ganesh.png',
        title: "Bluestock Fintech",
    },
    {
        quote:
            "Bharat played a key role in developing an efficient online booking system for Swagat Banquets. His focus on usability, backend logic, and database integration showcased his strong development skills and commitment to delivering practical, real-world solutions.",
        name: "Mrs. Rajendr Mirajkar",
        id: 2,
        photo: '/testimonials/sanket.jpg',
        title: "Swagat Banquets Hall Kolhapur"
    },
    {
        quote:
            "Bharat designed a complete e-commerce platform for a bakery, skillfully integrating secure payments, role-based access, and product management. His thoughtful approach to user experience and robust backend logic made the demo both functional and impressive.",
        name: "Sanket Jadhav",
        id: 3,
        photo: '/testimonials/sanket.jpg',
        title: "Industry mentor"
    },
    // {
    //     quote:
    //         "Rohit's work on the NoCheat Browser was exceptional. His technical knowledge and attention to detail were key in building a secure platform tailored for our needs. Rohit’s contributions significantly elevated our project, and I look forward to working with him again.",
    //     name: "Dr. Sandeep Kadam",
    //     id: 4,
    //     photo: '/testimonials/sandeep.jpeg',
    //     title: "Head of Operations, WeShineTech",
    // },
    // {
    //     quote:
    //         "Rohit led our ISO Digitalization Support System project with great professionalism. He demonstrated strong leadership in UI/UX design and API integration. His commitment and expertise ensured our project met all requirements effectively. I highly recommend him for future projects.",
    //     name: "Ramlal Pujari",
    //     id: 5,
    //     photo: '/testimonials/ramlal.jpg',
    //     title: "Manager, Fluid Controls Pvt. Ltd.",
    // },
];




export const workExperience = [
    {
        id: 1,
        title: " Software Engineer Intern - Bluestock Fintech",
        desc: "Developed Invest.io, a platform offering streamlined access to fundamental stock data of Nifty-100 companies; built responsive web interfaces, integrated APIs for mobile support, and ensured seamless data flow—enhancing accessibility and improving user experience across platforms.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
        link: "https://drive.google.com/file/d/1KRffxo-JWTmn3Uh7yd3QI2Z4J0kC6gm3/view?usp=sharing",
    },
    {
        id: 2,
        title: "Project Intern - Ajspire Technologies Pvt.Ltd.",
        desc: "Developed a full-fledged e-commerce platform for a bakery shop, allowing customers to browse and purchase products online. Implemented role-based functionalities for customers, shop owners, and delivery personnel. Created a product management system for the bakery owner to add, edit, and manage products. Integrated secure payment gateways and cart functionality with order tracking.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
        link: "https://drive.google.com/file/d/1KXQZ_N4wYKAntlYVJekvYVug1uC7e9YL/view?usp=sharing",
    },
    {
        id: 3,
        title: "Project - Swagat Banquets Hall",
        desc: "Designed to streamline and enhance the process of managing banquet bookings and events.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
        link: "https://drive.google.com/file/d/17NmTTb81OnJ1WXQbrKGpa25h_5pIarms/view?usp=sharing",
    },
    {
        id: 4,
        title: "Publicity Team Member - CEC VIIT Pune",
        desc: " Actively participated as a member of the publicity team, contributing to the promotion of events and activities .",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
        link: "https://drive.google.com/file/d/1eE8nhWOD9onbWEuLu2xBN3nxZwCCaB-k/view?usp=sharing",
    }
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Shinde-Bharat"
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/bharat-shinde-/"
    },


];
