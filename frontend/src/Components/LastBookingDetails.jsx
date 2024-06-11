import React from "react";
import "../CSS/LastBookingDetails.css";
import { movieList, slots, seats } from "../data";
import { useContext } from "react";
import BsContext from "../Context/BsContext";
import { useEffect } from "react";

const LastBookingDetails = () => {

  const context = useContext(BsContext);

  const [handleGetBooking,lastBookingDetails] = [context.handleGetBooking,context.lastBookingDetails];
  // console.log(handleGetBooking);
  console.log(lastBookingDetails)
  useEffect(() => {
    handleGetBooking();
  },[])

  return (
    <div className="LBD-container">
      <div className="LBD-header">Last Booking</div>
      {
        lastBookingDetails ? (
          <>
            <div className="seats_container">
              <p className="seats_header">Seats:</p>
              <ul className="seats">
                {seats.map((seat, index) => {
                  return (
                    <li key={index} className="seat_value">
                      {seat} : <span>{lastBookingDetails.seats[seat]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        ) : (
          <p className="no_booking">No Booking Yet</p>
        )
      }
      <p className="slot" style={{textAlign:"left"}}>Slot :  <span>{lastBookingDetails.slots}</span></p>
      <p className="movie">Movie :  <span>{lastBookingDetails.movie}</span></p>
    </div>
  );
};

export default LastBookingDetails;
