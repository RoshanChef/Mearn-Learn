import React, { memo } from 'react'

function Childcomponent({ btnCnt, setbtnCnt, fnx }) {
    console.log('child is called ... ');
    return <div>
        <button className="bg-[#333] p-3 m-6 text-white  rounded-md" onClick={fnx}>Another {btnCnt}</button>
    </div>
}

export default memo(Childcomponent)
