import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext);
    return (
        <div className="w-full m-auto flex justify-evenly border shadow-slate-950 fixed bottom-0 bg-white py-2">
            <div className="flex gap-2">
                {
                    page > 1 &&
                    <button onClick={() => handlePageChange(page - 1)} className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Previous</button>
                }
                {
                    page < totalPages &&
                    <button onClick={() => handlePageChange(page + 1)} className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Next</button>
                }

            </div>
            <div className="flex font-bold gap-1">
                Page  <p>{page} </p>of
                <p>{totalPages}</p>
            </div>

        </div>
    );
};

export default Pagination;