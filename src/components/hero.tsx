import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface HeroProps {
    imgData: StaticImageData;
    title: string;
    imgAlt: string;
}

const Hero = (props: HeroProps) => {
    return (
        <div className="relative">
            <div className='absolute -z-10 inset-0'>
                <Image
                    src={props.imgData}
                    alt={props.imgAlt}
                    fill
                // style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="pt-48 flex justify-center items-center h-screen">
                <h1 className="text-white text-6xl">{props.title}</h1>
            </div>
        </div>
    )
}

export default Hero