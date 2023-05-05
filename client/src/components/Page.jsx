import React from "react";

const Page = () => {



  return (
    <div className="bg-sky-200" >
      <form className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <input
        type="text"
        className="text-center w-1/2 border border-black rounded-md h-12"
        placeholder="Enter City Name"
       
      />
      <button className="mt-9 bg-green-500 w-40 h-9 rounded-md">
        Search
      </button>
      </form>
    </div>
  );
};

export default Page;
