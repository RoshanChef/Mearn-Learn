import React, { memo } from 'react'
/*
    memo : only runs when props get changed otherwise it doesn't get affected
*/


function Childcomponent({ btnCnt, fnx }) {
    console.log('child is called ... ');
    return <div>
        <button className="bg-[#333] p-3 m-6 text-white  rounded-md" onClick={fnx}>Another {btnCnt}</button>
    </div>
}

export default memo(Childcomponent)
