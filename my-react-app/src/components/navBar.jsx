import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-blue-200 flex py-6 px-6 justify-between'>
        <div className='flex'>
        <img src="Code.png" alt="company logo" className='w-12 h-12 mx-4'/>
        <h1>Code & Copy Craft</h1>
        </div>
        <div className='flex justify-around'>
            <h1 className='font-bold text-xl'><span className="font-italic">Call now:</span>0774489359</h1>
            <button className='mx-6 bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300'>Sign in</button>
            <button className='mx-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300'>Get Started</button>
        </div>
        </div>
    )
}