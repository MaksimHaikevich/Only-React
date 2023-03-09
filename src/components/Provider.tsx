import EventContext from "./EventContext";
import {useRef, useState} from "react";
import * as React from "react";

type Props = {
    children: JSX.Element[] | JSX.Element | any
};

const EventProvider = ({children}: Props) => {
    const [current, setCurrent] = useState<number>(1);

    let circle = useRef(null)

    const setRef = (ref) => circle.current = ref
    const getRef = () => circle.current

    return (
        <EventContext.Provider value={{current, setCurrent, setRef, getRef} as any}>
            {children}
        </EventContext.Provider>
    );
};
export default EventProvider