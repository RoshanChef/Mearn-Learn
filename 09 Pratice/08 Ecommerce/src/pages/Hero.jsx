import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import AppProvider from '../context/context'

export default function Hero() {

    return (
        <div>
            <AppProvider>
                <Navbar />
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
            </AppProvider>
        </div>
    )
}
