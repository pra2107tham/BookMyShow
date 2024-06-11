import BsContext from "./BsContext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const BsState = ({children}) => {
    const [movie, setMovie] = useState('');
    const [time, setTime] = useState('');
    const [noOfSeat,setNoOfSeat] = useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:"",
    });

    const [lastBookingDetails,setLastBookingDetails] = useState(
        {
            movie: "",
            slots: "",
            seats: {
                A1: "",
                A2: "",
                A3: "",
                A4: "",
                D1: "",
                D2: ""
            }
        }
    );

    const handlePostBooking = async() => {
        const response = await axios.post("/api/book",{
            movie: movie,
            slots: time,
            seats: noOfSeat
        })

        if(response.status === 200){
            setMovie('');
            setTime('');
            
            setLastBookingDetails(response.data.data);
            window.localStorage.clear()
            console.log(response.data.message);
        }else{
            console.log(response.data.message);
        }
    }

    const handleGetBooking = async() => {
        const response = await axios.get("/api/booking");
        console.log(response)
        if(response.status === 200){
            setLastBookingDetails(response.data.data);
            console.log(response.data.message);
        }else{
            console.log(response.data.message);
        }
    }

    useEffect(() => {
        const movie = window.localStorage.getItem("movie");
        const time = window.localStorage.getItem("time");
        const seats = JSON.parse(window.localStorage.getItem("seats"));

        if(movie){
            setMovie(movie);
        }
        if(time){
            setTime(time);
        }
        if(seats){
            setNoOfSeat(seats);
        }
        
    },[])

    return (
        <BsContext.Provider value={{movie,setMovie,time,setTime,noOfSeat,setNoOfSeat,lastBookingDetails,setLastBookingDetails, handleGetBooking, handlePostBooking}} >
            {children}
        </BsContext.Provider>

    )
}

export default BsState;