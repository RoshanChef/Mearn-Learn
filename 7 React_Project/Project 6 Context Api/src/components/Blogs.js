import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

function Blogs() {
    // consume
    const { loading, posts } = useContext(AppContext);

    return (
        <div>
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? (
                        <div>
                            <p>Not Founded ..</p>
                        </div>
                    ) : (
                        posts.map((post) => {
                            <div key={post.id} className='font-bold'>
                                <p>{post.title}</p>
                                <p>
                                    By <span>{post.author}</span> on <span>{post.category}</span>
                                </p>
                                <p>Posted on {post.date}</p>
                                <p>{post.content}</p>
                                <div>
                                    {
                                        (post.tags.map((tag) => {
                                            <p>tag</p>
                                        }))
                                    }
                                </div>
                            </div>
                        })
                    )
                )
            }
        </div>
    )
}

export default Blogs
