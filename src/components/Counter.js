import React, { useState } from "react";
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.css'

export default function Counter(props) {
  return (
    <div className="counter text-center">
      <CountUp end={props.counterEnd}>
      {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
                <h3><span ref={countUpRef} /></h3>
            </VisibilitySensor>
        )}
      </CountUp>
      <p>{props.title}</p>
    </div>
  );
}
