import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import toast from 'react-hot-toast';

export default function Navbar(props) {
    
    let isLogIn = props.isLogIn;
    let setLogIn = props.setLogIn;
    return (
        <div className='flex justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} className='w-[10vw]' alt='logo'></img>
            </Link>
            <nav className='flex gap-3text-xl'>
                <ul className='list-none flex gap-5 text-gray-300 '>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-3 text-gray-300 mx-2 items-center'>
                {isLogIn &&
                    <Link to='/'>
                        <button onClick={
                            () => {
                                setLogIn(false);
                                toast.success('Logout successfully'); 
                             
                            }
                        } className='bg-slate-700 py-[5px] rounded px-[12px]'>
                            Logout
                        </button>
                    </Link>
                }
                {
                    isLogIn &&
                    <Link to='/dashboard'>
                        <button className='bg-slate-700 py-[5px] rounded px-[12px]'>
                            Dashboard
                        </button>
                    </Link>
                }
                {
                    !isLogIn &&
                    <Link to='/logIn'>
                        <button className='bg-slate-700 py-[5px] rounded px-[12px]'>
                            Log In
                        </button>
                    </Link>
                }
                {
                    !isLogIn &&
                    <Link to='/signUp'>
                        <button className='bg-slate-700 py-[5px] rounded px-[12px]'>
                            Sign Up
                        </button>
                    </Link>
                }
            </div>
        </div >
    )
}
