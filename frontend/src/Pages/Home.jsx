import React from "react";
import SelectMovie from "../Components/SelectMovie";
import "../CSS/Home.css";
import LastBookingDetails from "../Components/LastBookingDetails";
import TimeSchedule from "../Components/TimeSchedule";
import SelectSeats from "../Components/SelectSeats"; 
import { useContext } from "react";
import BsContext from "../Context/BsContext";

const Home = () => {
  const context = useContext(BsContext);
  const [
    movie,
    time,
    noOfSeat,
    lastBookingDetails,
    handlePostBooking,
    handleGetBooking,
  ] = [context.movie, context.time, context.noOfSeat, context.lastBookingDetails, context.handlePostBooking, context.handleGetBooking];
  
  const handleBooking = () => {
    if(!movie || !time || !noOfSeat){
      alert("Please select movie, time and seats");
    }else{
      handlePostBooking();
    }
  }

  return (
    <>
      <h1>Welcome to Book My Show</h1>
      <div className="container">
        <div className="wrapper">
          <div className="select_movie_component">
            <SelectMovie />
          </div>
          <div className="last_booking_details_container">
            <LastBookingDetails/>
          </div>
        </div>
        <div className="time_seats_container">
            <TimeSchedule/>
            <SelectSeats/>
            <button className="BN-btn" 
            onClick={() => {
              handleBooking();
            }
            }>Book Now!!</button>  
        </div>
      </div>
    </>
  );
};

export default Home;
