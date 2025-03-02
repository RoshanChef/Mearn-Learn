import React from 'react'
import Navbar from '../components/Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

export default function Hero() {
    return (
        <div>
            <Navbar />
            <Page1/>
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    )
}
