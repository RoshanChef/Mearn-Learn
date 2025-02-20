import { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function Comments({ comments }) {
    const increaseLike = (id) => {

    };

    return (
        <div className="flex flex-col gap-4 p-4">
            {comments.map((ele) => (
                <div className="flex gap-2" key={ele.id}>
                    <div className="w-10 h-10 rounded-full border-2"></div>
                    <div>
                        <p className="text-xs flex gap-3">
                            <span>@{ele.id} </span>
                            <span>{ele.date} days ago</span>
                        </p>
                        <p>{ele.content}</p>
                        <div className="flex gap-3 mt-2 select-none cursor-pointer">
                            <div className="flex gap-1 items-center">
                                <AiOutlineLike  />
                                <p>{ele.like || 0}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <AiOutlineDislike />
                                <p>{ele.dislike || 0}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;
