import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../data";
import { MdCurrencyRupee } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

const DetailPage = () => {
    const ele = useParams('id');
    let value = data.find((val) => val.id == ele.id);

    return <div className="flex flex-col">
        <Navbar />
        <div>
            <div className="mt-10 flex  text-black">
                <div className="image h-[90vh] w-[50%] flex justify-center items-center">
                    <img src={value.image} alt="" className="h-full" />
                </div>
                <div className="p-4 flex flex-col w-[50%]">
                    <h1 className="font-bold text-2xl">{value.title}</h1>
                    <p className="text-gray-700">{value.description}</p>
                    <div className="flex gap-2 m-2.5">
                        <div className="border-2 w-max px-2 rounded-md py-0.5 border-gray-500">
                            {value.category}
                        </div>
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <IoIosStar
                                    key={i}
                                    style={{
                                        fill: i < Math.floor(value.rating.rate) ? "gold" : "lightgray",
                                        fontSize: "1.2rem",
                                    }}
                                />
                            ))}
                            <p className="text-[.8rem]">({(value.rating.rate)})</p>
                        </div>
                    </div>
                    <div className="flex gap-0 items-center">
                        <p><MdCurrencyRupee /></p>
                        <p className="font-bold">{value.price}</p>
                    </div>

                    <div className="flex cursor-pointer active:scale-90 items-center gap-4 p-4 capitalize w-max shadow-md h-6 shadow-[#c5c5c5]">
                        <BsCart4 />
                        <p >Add to cart</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default DetailPage;