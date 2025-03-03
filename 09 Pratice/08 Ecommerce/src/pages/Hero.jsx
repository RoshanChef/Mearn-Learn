import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

export default function Hero() {
    const [navcolor, setColor] = useState(true);
    return (
        <div>
            <Navbar navcolor={navcolor} />
            <Page1 />
            <Page2 navcolor={navcolor} setColor={setColor}/>
            <Page3 />
            <Page4 />
        </div>
    )
}
