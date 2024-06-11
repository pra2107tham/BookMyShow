import React from "react";
import { slots } from "../data";
import RadioComponent from "./RadioComponent";
import "../CSS/TimeSchedule.css";
import { useContext } from "react";
import BsContext from "../Context/BsContext";
const TimeSchedule = () => {
  const context = useContext(BsContext);
  const [time, setTime] = [context.time, context.setTime];

  const handleChangeTime = (val) => {
    setTime(val);
    window.localStorage.setItem("time", val);
  }

  return (
    <>
      <div className="Slot_container">
        <div className="TS_heading"> Select a Schedule</div>
        <div className="TS_main_container">
          {slots.map((element, index) => {
            return <RadioComponent text={element} data={time} key={index} changeSelection={handleChangeTime} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSchedule;
