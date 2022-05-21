import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-md'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border  rounded-box w-52">
                            <Navigations />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-neutral normal-case text-2xl">Bike's Accessories</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-neutral menu-horizontal p-0">
                        <Navigations />
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=92310" alt='amar-mata' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border rounded-box w-52">
                            <li>
                                <button className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </button>
                            </li>
                            <li><button>Settings</button></li>
                            {/* {
                                user ?
                                    <li><button >Log Out</button></li>
                                    :
                                    <li><Link to='/login'>Login</Link></li>
                            } */}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar

const Navigations = () => {
    return (
        <>
            <li >
                <Link to='/home'>
                    Home
                </Link>
            </li>
            <li tabIndex="0">
                <Link to='/product'>
                    Products
                </Link>
            </li>
            <li className='mx-2'><NavLink to='/services'>Services</NavLink></li>
            <li className='mx-2'><NavLink to='/blogs'>Blogs</NavLink></li>
            <li className='mx-2'><NavLink to='/contact'>Contact</NavLink></li>
        </>
    )
}