import Image from 'next/image'
import React from 'react'
import perfImg from "/public/images/performance.jpg"
import Hero from '@/components/hero'

const PerformancePage = () => {
    return (
        <>
            <Hero
                imgData={perfImg} 
                imgAlt="Welding Robots" 
                title="High Performance Guaranteed" />
        </>
    )
}

export default PerformancePage