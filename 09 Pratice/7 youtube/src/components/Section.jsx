import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import ReplySec from './ReplySec';
import { CiFlag1 } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

function Section({ ele }) {
    const [likes, setLikes] = useState({ flag: false, like: ele.like, dislike: ele.dislike, reply: false })
    function increaseCheck() {
        setLikes((prev) => ({ ...prev, like: (prev.like) ? 0 : 1 }));
    }

    function decreaseCheck() {
        setLikes((prev) => ({ ...prev, dislike: (prev.dislike) ? 0 : 1 }));
    }

    function clicking() {
        setLikes((prev) => ({ ...prev, reply: (likes.reply) ? 0 : 1 }));
    }

    console.log(ele.reply, 'reply i found here is ');


    return (
        <div className='flex justify-between' >
            <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full border-2"></div>
                <div className='relative'>
                    <p className="text-xs flex gap-3">
                        <span>@{ele.id} </span>
                        <span>{ele.date} days ago</span>
                    </p>
                    <p>{ele.content}</p>
                    <div className="flex gap-3 mt-2 select-none cursor-pointer ">
                        <div className="flex gap-1 items-center">
                            {

                                !(likes.like) &&
                                <AiOutlineLike onClick={increaseCheck} />
                            }
                            {
                                !!(likes.like) &&
                                <AiFillLike onClick={increaseCheck} />
                            }
                            <p> {likes.like}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            {
                                !(likes.dislike) &&
                                < AiOutlineDislike onClick={decreaseCheck} />
                            }
                            {
                                !!(likes.dislike) &&
                                < AiFillDislike onClick={decreaseCheck} />
                            }
                            <p>{likes.dislike}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            {!likes.reply &&
                                <MdOutlineMessage onClick={clicking} />
                            }
                        </div>
                    </div>
                    {
                        (!!likes.reply) &&
                        <div>

                            <ReplySec ele={ele} setLikes={setLikes} />
                        </div>
                    }
                </div>
            </div>
            <div className='cursor-pointer relative flex flex-col gap-2'>
                < HiOutlineDotsVertical onClick={() => setLikes((prev) => ({ ...prev, flag: (!prev.flag) }))} />
                {
                    likes.flag &&
                    <div className='flex gap-2 p-3 border-1 rounded absolute right-4 top-5 items-center'>
                        <CiFlag1 />
                        <p>Report</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Section
