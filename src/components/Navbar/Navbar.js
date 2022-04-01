
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-rose-500 p-4 sticky top-0'>
            <h2 className='text-3xl font-semibold text-slate-800'>Food Village</h2>
            <div className='text-lg font-bold text-slate-800'>
                <Link className='mr-3' to="/">Home</Link>
                <Link className='mr-3' to="/Meals">Meals</Link>
                <Link className='mr-3' to="/contact">Contact</Link>
                <Link className='mr-3' to="/About">About</Link>
            </div>
        </div>
    );
};

export default Navbar;