import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

function Blogs() {
    // consume
    const { loading, posts } = useContext(AppContext);
    console.log(posts, 'value: ' + posts.length);
    console.log(typeof posts.length);
    return (
        <div className="w-11/12 max-w-[670px] flex flex-col gap-y-6 py-3 mx-auto my-[4rem] items-center  ">
            {
                loading ? (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (
                                <div>
                                    <p>Not Founded ..</p>
                                </div>
                            ) :
                            (
                                posts.map((post) => {
                                    return (<div key={post.id} className='shadow-sm border-2 p-4 m-2 hover:shadow-2xl rounded-md transition-all duration-150'>
                                        <p className='font-bold '>{post.title}</p>
                                        <p className='text-sm'>
                                            By <span className='italic text-[.9rem]'>{post.author}</span> on <span className='font-semibold underline  '>{post.category}</span>
                                        </p>
                                        <p className='text-sm mb-2'>Posted on {post.date}</p>
                                        <p className='font-semibold'>{post.content}</p>
                                        <div className='text-blue-500 flex flex-wrap gap-x-4 my-2 text-[.8rem] py[.5rem] text-sm' >
                                            {
                                                (post.tags.map((tag, inx) => {
                                                    return <p key={inx} className='underline font-bold'>#{tag}</p>
                                                }))
                                            }
                                        </div>
                                    </div>)
                                })
                            )
                    )
            }
        </div>
    )
}

export default Blogs
