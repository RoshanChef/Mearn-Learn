import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

function Elemenet({ question, answer, btn, clickHandler }) {
    return (
        <div className="flex flex-col justify-between items-center p-4 backdrop-blur-lg bg-[#7c7a7a2d] w-full gap-2 m-1 rounded-sm">
            {/* Question Section */}
            <div className="flex items-center gap-2 justify-between w-full transition-all duration-300">
                <p>{question}</p>
                <div className="cursor-pointer" onClick={clickHandler}>
                    {btn ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>

            {/* Answer Section with Animation */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: btn ? "auto" : 0, opacity: btn ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-xs pl-2 overflow-hidden"
            >
                <div className="border-l border-[#e9e9e983] pl-2">
                    {btn && <p>{answer}</p>}
                </div>
            </motion.div>
        </div>
    );
}

export default Elemenet;
