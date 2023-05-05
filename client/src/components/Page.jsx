import React from "react";
import axios from 'axios'
import { useState } from "react";
const Page = () => {
  const [city,setCity] = useState('');
  const handleSubmit = async(e) => {
      e.preventDefault();
      const weatherData = await axios.post('/',{city})
      setCity('');
      console.log(weatherData.data)
  }
  return (
    <div className="bg-sky-200" >
      <form onSubmit={handleSubmit} className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <input
        type="text"
        className="text-center w-1/2 border border-black rounded-md h-12"
        placeholder="Enter City Name"
        value={city}
       onChange={e=>setCity(e.target.value)}
      />
      <button className="mt-9 bg-green-500 w-40 h-9 rounded-md">
        Search
      </button>
      </form>
    </div>
  );
};

export default Page;
