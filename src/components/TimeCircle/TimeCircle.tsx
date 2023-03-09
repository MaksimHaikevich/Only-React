import {Circle, Container, From, To, Wrapper, YearsPeriod} from "./TimeCircle.styles";
import Point from "../Point/Point";
import {useContext, useEffect, useMemo, useRef, useState} from "react";
import EventContext from "../EventContext";

import {Power3} from 'gsap'
import {gsap} from "gsap";
import * as React from "react";
import {data} from "../Slider/Slider";
import Number from "./Number";

const count = 6

export const TimeCircle = () => {

    const context = useContext(EventContext)

    const fromValue = (value) => Math.min(...data[value].map((obj) => {
        return obj.title
    }))

    const toValue = (value) => Math.max(...data[value].map((obj) => {
        return obj.title
    }))

    const [fromNumber, setFromNumber] = useState(fromValue(context.current))
    const [toNumber, setToNumber] = useState(toValue(context.current))

    useEffect(() => {
        setFromNumber(fromValue(context.current))
        setToNumber(toValue(context.current))
    }, [context.current])

    function pointPosition(angle, radius) {
        const x = radius + Math.cos(-angle * Math.PI / 180) * radius - 26

        const y = radius + Math.sin(-angle * Math.PI / 180) * radius - 26
        return {x, y, testFlag: angle}
    }

    function drawPoints(count, firstPointAngle, radius) {
        const angleStep = 360 / count
        const pointsArray = []

        for (let i = firstPointAngle; i < firstPointAngle + 360; i += angleStep) {
            pointsArray.push(pointPosition(i, radius))
        }

        return pointsArray
    }

    const testArray = useMemo(() => {
        return drawPoints(count, 60, 265)
    }, [])
    console.log('context.current', testArray)

    // let circle = useRef(<Circle/>)
    let point = useRef(null)

    const setRefCircle = (ref) => circle = ref
    const setRefPoint = (ref) => point = ref

    let circle = useRef(null)

    const pointHandler = (number) => {
        const coeff = Math.abs(context.current - number) > (count / 2) ? -1 : 1
        const razniza = number - context.current
        let circleAngleStep = (coeff * (count - number) * 60 + (coeff * 60))
        console.log('circleAngleStep', circleAngleStep, coeff)
        // let circleAngleStep = 60
        // console.log(pointAngleStep, 'point step')
        context.setCurrent(number)

        gsap.to(context.getRef(), 3.0, {rotate: `+=${60}`, ease: Power3.easeOut})
        return 1
    }


    return (
        <Wrapper>
            <Container>
                <YearsPeriod>
                    <From>
                        <Number number={fromNumber}/>
                    </From>
                    <To><Number number={toNumber}/></To>
                </YearsPeriod>
                <Circle ref={(ref) => context.setRef(ref)}>
                    {testArray.map((point, id) => {
                        const number = testArray.indexOf(point) + 1
                        return <Point setRef={setRefPoint} X={point.x} Y={point.y}
                                      number={number}
                                      onClick={() => pointHandler(number)}/>
                    })}
                </Circle>
            </Container>
        </Wrapper>
    );
};


export default TimeCircle;