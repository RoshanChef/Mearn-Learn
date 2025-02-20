import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

function Navbar() {


    const location = useLocation();
    const isCoursePage = location.pathname.includes('/course_list');

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const { navigate } = useContext(AppContext);

    const { isEducator, setEducator } = useContext(AppContext);
    return (
        <div className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursePage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <div>
                <img onClick={() => navigate('/')} src={assets.logo} alt='not found' className='w-28 lg:w-32 cursor-pointer' />
            </div>
            {/* for web app */}
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                {
                    user &&
                    <div className='flex items-center gap-5'>
                        <button onClick={() => navigate('/educator')}>
                            {isEducator ? 'Educator Dashboard' : 'Become Educator'}
                        </button>
                        | <Link to='/my_enrollment'>My Enrollments</Link>
                    </div>
                }
                {
                    user ?
                        <UserButton />
                        :
                        <button className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer' onClick={() => openSignIn()}>Create Account</button>
                }
            </div>

            {/* for Phone Screen */}
            <div className='md:hidden flex  items-center gap-2 sm:gap-5  text-gray-500'>
                {
                    user &&
                    <button onClick={() => navigate('/educator')}>
                        {isEducator ? 'Educator Dashboard' : 'Become Educator'}
                    </button>
                    | <Link to='/my_enrollment'>My Enrollments</Link>
                }

                {
                    user ?
                        <UserButton />
                        :
                        <button onClick={() => openSignIn()}>
                            <img src={assets.user_icon} alt='not found' />
                        </button>
                }
            </div>
        </div>
    )
}

export default Navbar
