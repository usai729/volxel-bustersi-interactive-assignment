import React from "react";

import { FaDollarSign, FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { Button } from "@mui/joy";

export default function Card({ data, handleCardClick }) {
  return (
    <div className="flex flex-col rounded-md shadow-md bg-white p-4 w-[90vw] md:w-[20rem] drop-shadow-sm border-t-1p5 border-gray-300">
      <h3 className="text-xl font-bold mb-2 text-center text-black">
        {data.StartupName}
      </h3>
      <div className="flex justify-around mb-4">
        <div className="flex items-center gap-1">
          <FaLocationPin color="gray" size="18" />
          <p className="text-gray-700 font-semibold">{data.CityLocation}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaDollarSign color="gray" size="18" />
          <p className="text-gray-700 font-semibold">
            {data.AmountInUSD || "N/A"}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 mr-2">Started on: {data.Date}</p>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleCardClick(data)}
          size="sm"
          className="rounded-md px-2 py-1"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
