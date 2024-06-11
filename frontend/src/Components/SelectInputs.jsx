import React from 'react'
import '../CSS/SelectInputs.css'
const SelectInputs = ({seat,changeNoOfSeat, noOfSeat}) => {
  // const val = e.target.value;
  const handleChange =(e) => {
    changeNoOfSeat({...noOfSeat,[seat]:Number(e.target.value)});

    window.localStorage.setItem(
      "seats",
      JSON.stringify({...noOfSeat,[seat]:Number(e.target.value)}) 
    )

  }

  return (
    <div className='form-check-label'>
        <span className='text'>{seat}</span>
        <input type="number" className='seats-input' placeholder='0' value={noOfSeat[seat]}  max='30' min='0' onChange={handleChange} />
    </div>
  )
}

export default SelectInputs