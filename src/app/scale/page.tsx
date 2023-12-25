import React from 'react'
import scaleImg from "/public/images/scale.jpg"
import Hero from '@/components/hero'

const ScalePage = () => {
    return (
        <>
            <Hero
                imgData={scaleImg} 
                imgAlt="Scale Page" 
                title="Scale to Infinity" />
        </>

    )
}

export default ScalePage