import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { infoData } from "./data";

function InfoData() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div class="data-info">
                <p>Top {counterOn && <CountUp start={0} end={25} duration={3} />}</p>
                <span>{infoData[0].text}</span>
            </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div class="data-info">
                <p>{counterOn && <CountUp start={0} end={1500} duration={3} />}</p>
                <span>{infoData[1].text}</span>
            </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div class="data-info">
                <p>{counterOn && <CountUp start={0} end={550} duration={3} />}</p>
                <span>{infoData[2].text}</span>
            </div>
        </ScrollTrigger>
        </>
    )
}



export default InfoData