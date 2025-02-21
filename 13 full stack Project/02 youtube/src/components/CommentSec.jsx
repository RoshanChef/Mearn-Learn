import React, { useState } from 'react';
import { useRef } from 'react';
import { BiHappyBeaming } from "react-icons/bi";


function CommentSec({ comments, setComments }) {
    const cnt = useRef(0);
    const text = useRef();
    let [inputData, setInput] = useState({ id: 0, content: "" });
    const [color, setColor] = useState(false);

    const inputHandler = (e) => {
        if (!color) {
            setColor(1);
        }

        setInput((prev) => { return { ...prev, content: e.target.value } });

        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    function makeItem() {

        cnt.current += 1;
        setInput((prev) => ({ ...prev, ["id"]: cnt.current }));
        const date = new Date();
        inputData = { ...inputData, ['id']: cnt.current, ['date']: date.getDate(), ["like"]: 0, "dislike": 0, reply: [] };


        setComments((prev) => {
            let value = [...prev, inputData]
            value.sort((prev, cur) => (cur.id - prev.id));
            return value;
        });
        setInput({});
        text.current.value = '';
    }

    return <div>
        <div className="p-4 gap-4 flex w-screen items-center">
            <p className="rounded-full border-1 w-12 h-12 bg-blue-400"></p>
            <div>
                <textarea
                    ref={text}
                    className="left-3 top-[-1rem] w-[calc(100vw-6rem)] outline-0 min-h-[16px] h-auto p-2 border-b-2  resize-none overflow-hidden"
                    rows="1"
                    onChange={inputHandler}
                    placeholder="Add a comment..."
                ></textarea>
                {
                    color &&
                    <div className="flex justify-between">
                        <BiHappyBeaming className="text-gray-600 " />
                        <div className="flex gap-3">
                            <button onClick={makeItem} className={color ? ("bg-blue-500 border py-1 px-3 cursor-pointer rounded-full text-white") : ("bg-gray-800 border py-1 px-3 cursor-pointer rounded-full text-white")} >comment</button>
                            <button onClick={() => {
                                setColor(false);
                                text.current.value = '';
                            }} className="border py-1 px-3 cursor-pointer bg-gray-800 text-white rounded-full">cancel</button>
                        </div>
                    </div>
                }

            </div>
        </div>

    </div>
}

export default CommentSec
