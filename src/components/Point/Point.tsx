// import React from 'react';
import {ActivePoint, PointStyled, Wrapper} from "./Point.styles";
import {useContext, useEffect, useMemo, useRef} from "react";
import EventContext from "../EventContext";
import {gsap, Power3} from "gsap";

export const Point = ({X, Y, number, onClick, setRef}) => {
    console.log('point inside ', number)
    const context = useContext(EventContext)
    console.log(setRef)

    let test = useRef(null)

    useEffect(() => {
        let pointAngleStep = -(context.current * 60) + 60
        gsap.to(test, 2.0, {rotate: pointAngleStep, ease: Power3.easeOut})
    }, [context.current])

    return (
        <Wrapper ref={ref => test = ref as any} X={X} Y={Y}>
            {context.current === number
                ? <ActivePoint ref={(ref) => setRef(ref)} onClick={onClick}>{number}</ActivePoint>
                : <PointStyled onClick={onClick}>{number}</PointStyled>}
        </Wrapper>
    );
};

export default Point;