import { useContext } from "react";
import { PiWine } from "react-icons/pi";
import { AppContext } from "../context/context";

function Navbar() {
    const {navcolor} = useContext(AppContext);
    return (
        ((navcolor) ?
            (
                <div className="flex justify-between items-center px-5 h-[3vw] z-[1]  bg-transparent backdrop-blur-[40rem]  w-full fixed text-purple-700 ">
                    <div className="font-bold  text-xl flex items-center gap-2">The Sarab <PiWine fontSize="1.4rem" className="animate-pulse text-[#ffff76]" /></div>
                    <div>
                        <ul className="flex gap-4 font-semibold cursor-pointer text-xs">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li className="text-red-300 animate-bounce">Login</li>
                        </ul>
                    </div>
                </div>
            )
            :
            (
                <div className="flex justify-between items-center px-5 h-[3vw] z-[1] backdrop-blur-[40rem]  w-full fixed text-white  ">
                    <div className="font-bold  text-xl flex items-center gap-2">The Sarab <PiWine fontSize="1.4rem" className="animate-pulse text-[#ffff76]" /></div>
                    <div>
                        <ul className="flex gap-4 font-semibold cursor-pointer text-xs">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li className="text-red-300 animate-bounce">Login</li>
                        </ul>
                    </div>
                </div>
            )
        )
    )
}

export default Navbar;