import React, { useRef, useState } from 'react'
import { BiHappyBeaming } from "react-icons/bi";

function ReplySec({ ele, setLikes }) {
    const [color, setColor] = useState(false);
    const text = useRef();
    const cnt = useRef(0);
    let [replyData, setReply] = useState({});

    function changeHand(e) {
        if (!color) {
            setColor(true);
        }
        let ele = e.target;

        setReply({ content: ele.value, like: 0, dislike: 0 });
    }
    function makeItem() {
        if (Object.keys(replyData).length == 0) return
        else {

            cnt.current += 1;
            replyData = { ...replyData, id: cnt.current }
            ele.reply.unshift(replyData);
            console.log(ele.reply);

            console.log('called ');


            text.current.value = '';
            setColor(false);
            setReply({});
        }
    }
    console.log(ele.reply);

    return (
        <div>
            <div className='mt-5 ml-6 flex items-center gap-2 w-[70vw]'>
                <div className='rounded-full border-1 w-10 h-10 bg-blue-500'></div>
                <div>
                    <textarea
                        className="left-3 top-[-1rem] w-[calc(70vw-4rem-8px)] outline-0 min-h-[16px] h-auto p-2 border-b-2  resize-none overflow-hidden"
                        rows="1" onChange={changeHand}
                        ref={text}
                        placeholder="Add a comment..."></textarea>
                    {

                        <div className="flex justify-between">
                            <BiHappyBeaming className="text-gray-600 " />
                            <div className="flex gap-3">
                                <button onClick={makeItem} className={color ? ("bg-blue-500 border py-1 px-3 cursor-pointer rounded-full text-white") : ("bg-gray-800 border py-1 px-3 cursor-pointer rounded-full text-white")} >comment</button>
                                <button onClick={() => {
                                    setColor(false);
                                    setLikes((prev) => ({ ...prev, reply: 0 }))
                                    text.current.value = ''
                                }
                                } className="border py-1 px-3 cursor-pointer bg-gray-800 text-white rounded-full">cancel</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='flex gap-2 flex-col'>
                {
                    (!!ele.reply.length) && ele.reply.map((val) => (<div key={val.id} className='flex  gap-2  items-center'>
                        <div className='rounded-full border-1 w-10 h-10 bg-blue-500'></div>
                        <div>
                            <p className='text-xs'>@{ele.id}{val.id}</p>
                            <p>{val.content}</p>
                        </div>
                    </div>))


                }

            </div>
        </div>
    )
}

export default ReplySec
