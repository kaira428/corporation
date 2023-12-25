import Image from 'next/image'
import React from 'react'
import reliabilityImg from "/public/images/reliability.jpg"
import Hero from '@/components/hero'

const ReliabilityPage = () => {
    return (
        <>
            <Hero
                imgData={reliabilityImg} 
                imgAlt="reliability page" 
                title="Reliability Is Our Second Nature" />
        </>

    )
}

export default ReliabilityPage