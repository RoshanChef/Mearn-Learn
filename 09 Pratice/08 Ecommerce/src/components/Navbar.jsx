import { PiWine } from "react-icons/pi";

function Navbar({ navcolor }) {

    return (
        ((navcolor) ?
            (
                <div className="flex justify-between items-center px-5 h-[3vw] z-[1]  bg-transparent backdrop-blur-[40rem]  w-full fixed text-white ">
                    <div className="font-bold  text-xl flex items-center gap-2">The Sarab <PiWine fontSize="1.4rem" className="animate-pulse text-[#ffff76]" /></div>
                    <div>
                        <ul className="flex gap-2 font-semibold cursor-pointer">
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
                <div className="flex justify-between items-center px-5 h-[3vw] z-[1] backdrop-blur-[40rem]  w-full fixed text-black ">
                    <div className="font-bold  text-xl flex items-center gap-2">The Sarab <PiWine fontSize="1.4rem" className="animate-pulse text-[#ffff76]" /></div>
                    <div>
                        <ul className="flex gap-2 font-semibold cursor-pointer">
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