import React from 'react'
import { seats } from '../data'
import '../CSS/SelectSeats.css'
import SelectInputs from './SelectInputs'
import { useContext } from 'react'
import BsContext from '../Context/BsContext'
  
const SelectSeats = () => {
  const context = useContext(BsContext);
  const [noOfSeat,setNoOfSeat] = [context.noOfSeat,context.setNoOfSeat];


  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats : </h1>
        <div className="SS_main_container">
          {seats.map((seat,index) => {
            return(
             <div key={index}>
              <SelectInputs seat={seat} text={seat} noOfSeat={noOfSeat} changeNoOfSeat={setNoOfSeat}/>
             </div> 
            )
          })}
        </div>

    </div>
  )
}

export default SelectSeats