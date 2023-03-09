import {SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper';
import {CSSTransition} from 'react-transition-group';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
    ChangeSliderWrapper,
    LeftButton,
    NumberOfSlider,
    RightButton,
    SliderStyled,
    Wrapper
} from "./Slider.styles";
import Slide from "./Slide/Slide";
import Arrow from "../../assets/scss/Arrow";
import * as React from "react";
import {useContext, useEffect, useRef, useState} from "react";
import EventContext from "../EventContext";
import {log} from "util";
import {gsap, Power3} from "gsap";
import styled from "styled-components";

export const data = {
    1: [
        {
            title: '2002',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2016',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            title: '2018',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
    ],
    2: [
        {
            title: '2023',
            description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            title: '2015',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2016',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2019',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
    ],
    3: [
        {
            title: '2018',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2016',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            title: '2022',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
    ],
    4: [
        {
            title: '2023',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2016',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            title: '2018',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
    ],
    5: [
        {
            title: '2013',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2016',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            title: '2019',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
    ],
    6: [
        {
            title: '2000',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2016',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
        {
            title: '2017',
            description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
        },
        {
            title: '2020',
            description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
        },
    ],
}

console.log(Object.keys(data).length, 'keys')


const Slider = () => {

    const context = useContext(EventContext)

    const sliderSettings = {
        // 440: {
        //     slidesPerView: 1,
        //     spaceBetween: 30,
        // },
        // 680: {
        //     slidesPerView: 2,
        //     spaceBetween: 30,
        // },
        // 1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        // },
    };


    const summaryCount = Object.keys(data).length

    const smoothSlider = () => {
        sliderTween.current.play();
        let test = setTimeout(() => {
            sliderTween.current.reverse();
        }, 1500)
        return () => {
            clearTimeout(test)
        }
    }

    const leftButtonHandler = (number) => {
        context.setCurrent(context.current - 1)
        // let circleAngleStep = (360 - (number - context.current) * 60)
        gsap.to(context.getRef(), 3.0, {rotate: `-=60`, ease: Power3.easeOut})
        smoothSlider()

    }
    const rightButtonHandler = () => {
        context.setCurrent(context.current + 1)
        gsap.to(context.getRef(), 3.0, {rotate: `+=60`, ease: Power3.easeOut})
        smoothSlider()
    }


    const sliderRef = useRef(null);
    const sliderTween = useRef(null);

    useEffect(() => {
        sliderTween.current = gsap.to(sliderRef.current, {
            duration: 0.5,
            opacity: 0,
            paused: true
        });
    }, []);

    return (
        <Wrapper>

            <NumberOfSlider>0{context.current}/0{summaryCount}</NumberOfSlider>
            <ChangeSliderWrapper>
                <LeftButton
                    disabled={context.current === 1} onClick={leftButtonHandler}/>
                <RightButton disabled={context.current === summaryCount} onClick={rightButtonHandler}/>
            </ChangeSliderWrapper>
            <SliderStyled
                className='box'
                ref={sliderRef}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                width={1180}
                navigation
                breakpoints={sliderSettings}
                grabCursor={true}
            >
                {
                    data[context.current].map((slide) => {
                        return (
                            <SwiperSlide>
                                <Slide title={slide.title}
                                       description={slide.description}/>
                            </SwiperSlide>)
                    })
                }
            </SliderStyled>
        </Wrapper>
    );
};


export default Slider;