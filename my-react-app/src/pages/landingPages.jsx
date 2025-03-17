import React, { useState } from 'react';

export default function LandingPage() {
    const [openModal, setOpenModal] = useState(false);
    const [emails, setEmails] = useState([]);

    function sendEmail(event) {
        event.preventDefault();
        const email = event.target.email.value;
        setEmails(prevEmails => [...prevEmails, email]);
        alert("Your email has been sent. We'll get back to you");
        event.target.reset();
    }

    return (
        <div className='bg-gray-300 min-h-screen'>
            {/* Header Section */}
            <div className="text-center font-bold py-8">
                <h1 className="text-3xl animate-pulse shadow-glow">Low Cost, High Reward Websites</h1>
                <h2 className="text-xl text-gray-700 mt-2">Stop wasting money on sites that go nowhere!</h2>
            </div>

            {/* Images Section */}
            <div className="mb-9 flex justify-around items-center px-6">
                <div>
                    <img 
                        alt="Happy business man" 
                        src="th45.jpeg" 
                        className='my-4 w-64 h-auto rounded-lg shadow-lg'
                    />
                </div>
                <div className="max-w-md">
                    <h3 className='my-8 text-2xl font-semibold'>Let me guess...</h3>
                    <p className='my-4 italic'>You're paying way more for websites than they're worth.</p>
                    <p className='my-4 italic'>You're running out of money on a design that goes nowhere.</p>
                    <p className='my-4 italic'>You might be losing customer trust.</p>
                    <p className='my-4 italic'>You can't afford to hire a copywriter, SEO expert, and developer.</p>
                </div>
            </div>

            {/* Call to Action */}
            <div className='text-center py-6'>
                <button 
                    className='bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300'
                    onClick={() => setOpenModal(true)}
                >
                    Get Started
                </button>
                <p className='font-bold mt-2'>Cancel Anytime</p>
            </div>

            {/* Modal */}
            {openModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                        <h1 className='font-bold text-2xl pb-4 text-center'>Save Money and Time</h1>
                        <form className='flex flex-col' onSubmit={sendEmail}>
                            <label className='mb-1 font-semibold'>Name</label>
                            <input type="text" className='p-2 rounded-md border border-gray-400 mb-4' required/>
                            <label className='mb-1 font-semibold'>Email</label>
                            <input type="email" name="email" className='p-2 rounded-md border border-gray-400 mb-4' required/>
                            <label className='mb-1 font-semibold'>What do you need?</label>
                            <textarea className="p-2 rounded-md border border-gray-400 mb-4" required/>
                            <div className='flex justify-between'>
                                <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'>
                                    Submit
                                </button>
                                <button type="button" className='bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition' onClick={() => setOpenModal(false)}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className='bg-blue-200 text-black text-center p-10 shadow-md'>
                <h2 className='font-bold text-2xl pb-4 text-center'>Like money?</h2>
                <p>
                    Everyone wants to start a business which would be successful one day, but it's tough these days. It can be overwhelming to get your foot in that door and really make something happen. I tried for so long to start my own business, but every time I'd get rejection letters. It drove me nuts until...    
                </p>
                <h2>Until..?</h2>
                <p>
                    Until I found a genius way to dramatically lower the cost and time it takes to deliver a great product. To really deliver your message as a business you need a sales funnel, but that means you have to hire a developer, a copywriter, and an SEO expert. What I found was truly astonishing. I found someone with all these skills, and that person taught me. Now I enjoy doing all these tasks. It worked for me; maybe it'll work for you too.
                </p>
            </div>

            <div className='bg-blue-200 text-black text-center p-10 shadow-md'>
                <h1 className="text-3xl animate-pulse shadow-glow">Companies that helped me</h1>
                <p>Companies you might've heard of</p>
                <div className='flex justify-around flex-wrap'>
                    <img src="/CAPCITI-LOGO-V3-1020x550.jpg" className='w-40 h-40'/>
                    <img src="/CodeSpace.webp" className='w-40 h-40'/>
                </div>
            </div>

            {/* Display Collected Emails */}
            <div className='bg-gray-100 p-6 text-center mt-8 shadow-md'>
                <h2 className='font-bold text-2xl mb-4'>Collected Emails:</h2>
                {emails.map((email, index) => (
                    <p key={index}>{email}</p>
                ))}
            </div>
        </div>
    );
}
