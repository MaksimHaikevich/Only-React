import * as React from "react";
import {useEffect, useState} from "react";
import {TweenLite} from "gsap";

const myObject = {
    totalValue: 1
};

const Number = props => {
    const [total, setTotal] = useState(props.number);
    useEffect(() => {
        TweenLite.to(myObject, 0.5, {
            totalValue: props.number,
            roundProps: "totalValue",
            onUpdate: () => {
                setTotal(myObject.totalValue);
            }
        });
    }, [props.number]);
    return <>{total}</>;
};

export default Number;