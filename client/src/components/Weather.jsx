import React from 'react'

import { useLocation,useNavigate } from 'react-router-dom'

const Weather = () => {
    const {state} = useLocation();
    const {data} = state
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
  return (
    <div className='w-full h-[100vh] bg-sky-200'>
        <h1 className='text-[10vmin] font-bold text-center'>{data.location.name}</h1>
        <div className='flex flex-col justify-center items-center my-32'>
            <img className='max-w-6xl' src={data.current.condition.icon} alt="" />
            <h3 className='text-center pt-5'>{data.current.condition.text}</h3>
        </div>
        <div className='flex flex-row justify-around text-2xl'>
            <h1>Temp : {data.current.temp_c}°</h1>
            <h1>Humidity: {data.current.humidity}</h1>
            <h1>Feelslike : {data.current.feelslike_c}°</h1>
        </div>

        <div className='text-center w-full h-full'>
            <button onClick={back} className='bg-yellow-500 w-20 p-2 my-20 rounded-md p-3'>Back</button>
        </div>
        
    </div>
  )
}

export default Weather