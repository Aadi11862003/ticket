import React from 'react';
import '../index.css';


const teamMembers = [
    {
        name: "Aditya Bhardwaj",
        role: "Event Manager",
        photo: "https://via.placeholder.com/150",
    },
    {
        name: "Aashwin Garg",
        role: "Coordinator",
        photo: "https://via.placeholder.com/150",
    },
    {
        name: "Aditi",
        role: "Designer",
        photo: "https://via.placeholder.com/150",
    },
    {
        name: "Abhinav Thakur",
        role: "Marketing Specialist",
        photo: "https://via.placeholder.com/150",
    },
];

const AboutUs = () => {
    return (
        <div className="bg-black py-16 px-6 md:px-24">
            <div className="max-w-5xl mx-auto bg-gray-300 text-violet-300 p-10 rounded-xl shadow-xl">
                <h1 className="text-5xl font-extrabold text-center text-violet-400 mb-8">
                    About Us
                </h1>
                <p className="text-xl leading-relaxed mb-6">
                    Welcome to <span className="font-bold">TickEve</span>! We are a team of passionate event planners and coordinators dedicated to making your events unforgettable.
                </p>

                {/* Team Section */}
                <h2 className="text-4xl font-bold text-center  mb-10">
                    Meet Our Team
                </h2>
                <div className="flex flex-wrap justify-center bg-slate-900 gap-8 mb-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="max-w-xs  rounded-lg shadow-md p-5">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="rounded-full w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-center  mb-2">
                                {member.name}
                            </h3>
                            <p className="text-lg text-center ">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Project Overview Section */}
                <h2 className="text-4xl mb-5 font-bold ml-[420px] ">
                    Project Overview
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center mb-10">
                    <img 
                        src="https://via.placeholder.com/400x250" 
                        alt="Project Overview Illustration" 
                        className="rounded-lg shadow-lg mb-4 md:mb-0"
                    />
                    <div>
                        <p className="text-lg  leading-relaxed mb-4">
                            Our Event Management System is designed to streamline the process of planning, organizing, and managing events of all types and sizes. Whether it's a corporate meeting, a wedding, or a social gathering, our platform provides all the tools needed to ensure a successful and memorable event.
                        </p>
                        <p className="text-lg  leading-relaxed mb-4">
                            <strong>What Our System Does:</strong>
                        </p>
                        <ul className="list-disc list-inside text-lg  mb-6">
                            <li>Event Planning: Allows users to create and plan events by setting dates, locations, and other important details.</li>
                            <li>Guest Management: Easily manage guest lists, send invitations, and track RSVPs.</li>
                            <li>Task Coordination: Assign tasks to team members and track progress to ensure everything is on schedule.</li>
                            <li>Vendor Management: Connect with vendors for catering, decorations, and other services needed for the event.</li>
                            <li>Budget Tracking: Keep track of expenses and stay within your budget with our budgeting tools.</li>
                            <li>Customizable Experience: Tailor the event details to match the specific needs and preferences of each client.</li>
                            <li>Real-time Updates: Stay informed with real-time updates and notifications about any changes or developments in the event planning process.</li>
                        </ul>
                    </div>
                </div>

                {/* Vision for the Future Section */}
                <h2 className="text-3xl font-bold ml-[420px] mb-6 mt-12">
                    Our Vision for the Future
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center mb-10">
                    <img 
                        src="https://via.placeholder.com/400x250" 
                        alt="Vision for the Future Illustration" 
                        className="rounded-lg shadow-lg mb-4 md:mb-0"
                    />
                    <div>
                        <p className="text-lg  leading-relaxed mb-4">
                            We are constantly innovating and improving our platform to stay ahead of the curve in the event management industry. Our vision is to become the go-to solution for event planners worldwide, providing cutting-edge tools and features that make every event a success.
                        </p>
                        <p className="text-lg  leading-relaxed mb-4">
                            With your support, we will continue to evolve, delivering even more value and making your event planning experience as seamless as possible.
                        </p>
                    </div>
                </div>

                {/* AI-Powered Voice Command & Text Input Section */}
                <h2 className="text-3xl font-bold ml-[420px]  mb-6">
                    AI-Powered Voice Command & Text Input
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center mb-10">
                    <img 
                        src="https://via.placeholder.com/400x250" 
                        alt="AI Voice Command Illustration" 
                        className="rounded-lg shadow-lg mb-4 md:mb-0"
                    />
                    <div>
                        <p className="text-lg  leading-relaxed mb-4">
                            Our Event Management System is powered by advanced AI technology that allows users to interact with the platform using both voice commands and text input. This feature ensures that event management is not only efficient but also accessible and adaptable to different user preferences.
                        </p>
                        <p className="text-lg  leading-relaxed mb-4">
                            <strong>Key Features:</strong>
                        </p>
                        <ul className="list-disc list-inside text-lg  mb-6">
                            <li>Hands-Free Operation: Manage your event tasks using voice commands, perfect for multitasking or when you're on the go.</li>
                            <li>Flexible Input: Easily switch between text input and voice commands, allowing you to work in the way that suits you best.</li>
                            <li>AI-Driven Efficiency: Our AI processes voice commands in real-time, providing immediate responses and actions.</li>
                            <li>Enhanced Accessibility: This feature makes our platform more accessible, ensuring that all users, including those with disabilities, can efficiently manage events.</li>
                        </ul>
                        <p className="text-lg  leading-relaxed">
                            With AI at its core, our system transforms the event planning process, making it more intuitive, responsive, and user-friendly.
                        </p>
                    </div>
                </div>

                {/* Ending Section */}
                <div className="bg-black-900 text-violet py-10 px-6 rounded-lg text-center">
                    <h2 className=" text-4xl font-bold mb-4">Join Us on Our Journey</h2>
                    <p className="text-lg mb-10 leading-9">
                        We're excited to continue growing and improving our platform with the support of our users. Join us on this journey, and let's make every event a success together.
                    </p>
                    <a href="#contact" className="text-lg bg-white px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
