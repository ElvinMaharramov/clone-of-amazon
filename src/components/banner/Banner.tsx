import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Image from 'next/image';

import FirstSliderImage from '../../images/slider/slider-image-one.jpg';
import SecondSliderImage from '../../images/slider/slider-image-two.jpg';
import ThirdSliderImage from '../../images/slider/slider-image-three.jpg';
import FourthSliderImage from '../../images/slider/slider-image-four.jpg';
import FifthSliderImage from '../../images/slider/slider-image-five.jpg';

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel
                // autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                // interval={1000}
                showArrows={true}
            >
                <div>
                    <Image priority={true} src={FirstSliderImage} alt='Slider' />
                </div>
                <div>
                    <Image priority={true} src={SecondSliderImage} alt='Slider' />
                </div>
                <div>
                    <Image priority={true} src={ThirdSliderImage} alt='Slider' />
                </div>
                <div>
                    <Image priority={true} src={FourthSliderImage} alt='Slider' />
                </div>
                <div>
                    <Image priority={true} src={FifthSliderImage} alt='Slider' />
                </div>
            </Carousel>
            <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div>
        </div>
    )
}

export default Banner;