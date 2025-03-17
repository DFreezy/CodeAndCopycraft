import React, { useState } from 'react';

export default function Navbar() {
    const [openModal, setOpenModal] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        alert("Your email has been sent. We'll get back to you");
    }

    return (
        <div className='bg-blue-200 flex py-6 px-6 justify-between'>
            <div className='flex items-center'>
                <img src="Code.png" alt="company logo" className='w-12 h-12 mx-4' />
                <h1>Code & Copy Craft</h1>
            </div>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl'><span className="italic">Call now:</span> 0774489359</h1>
                <button 
                    className='mx-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300' 
                    onClick={() => setOpenModal(true)}
                >
                    Get Started
                </button>
            </div>

            {/* Modal */}
            {openModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
                        <h1 className='font-bold text-2xl pb-4 text-center'>Save Money and Time</h1>
                        <form className='flex flex-col' onSubmit={sendEmail}>
                            <label className='mb-1 font-semibold'>Name</label>
                            <input type="text" className='p-2 rounded-md border border-gray-400 mb-4' required />
                            <label className='mb-1 font-semibold'>Email</label>
                            <input type="email" className='p-2 rounded-md border border-gray-400 mb-4' required />
                            <label className='mb-1 font-semibold'>What do you need?</label>
                            <textarea className="p-2 rounded-md border border-gray-400 mb-4" required />
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
        </div>
    );
}


/*
fetch("xdfhgtghjyghj")
.then(res => res.json)
.catch(error => console.log(err))
if(!res.ok){

}

*/