import React, { useState } from 'react';

export default function LandingPage() {
function sendEmail(){
    alert("Your email has been sent. We'll get back to you")
    preventDefault()
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
                <button className='bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300'>
                    Get Started
                </button>
                <p className='font-bold mt-2'>Cancel Anytime</p>
            </div>

            {/* Info Section */}
            <div className='flex justify-center py-12 px-6'>
                <div className="bg-black text-white p-10 rounded-lg max-w-2xl shadow-lg">
                    <h1 className="font-bold text-2xl pb-4">Save Money and Time</h1>
                    <p className='leading-relaxed'>
                        I understand exactly what you're going through. Starting a business is exciting until you see the total costs. 
                        Sometimes, you just want to give up when you think about all the businesses that fail. But that doesn’t have to be you! 
                        Hiring an SEO expert, developer, and copywriter separately can cost a fortune. By choosing a smart, all-in-one solution, 
                        you stay ahead of newer competitors who are still gathering funds. While they’re catching up, you’ll be hiring employees.
                    </p>

                    {/* Contact Form */}
                    <div className='py-8'>
                        <form className='flex flex-col'>
                            <label className='mb-1 font-semibold'>Name</label>
                            <input type="text" className='p-2 rounded-md border border-gray-400 mb-4' required/>
                            <label className='mb-1 font-semibold'>Email</label>
                            <input type="email" className='p-2 rounded-md border border-gray-400 mb-4' required/>
                            <label className='mb-1 font-semibold'>What do you need?</label>
                            <textarea className="p-2 rounded-md border border-gray-400 mb-4" required/>
                            <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition' onClick={sendEmail}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-blue-200 text-black text-center p-10'>
            <h1 className="text-3xl animate-pulse shadow-glow">Companies that helped me</h1>
            <p>Companies you might've heard of</p>
            <div className='flex justify-around flex-wrap'>
            <img src="/CAPCITI-LOGO-V3-1020x550.jpg" className='w-40 h-40'/>
            <img src="/CodeSpace.webp" className='w-40 h-40'/>
            </div>
            </div>
        </div>
    );
}