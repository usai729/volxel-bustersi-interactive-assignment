import React from "react";
import { Link } from "react-router-dom";
import { Option, Select } from "@mui/joy";

export default function Nav({ setCity, setVIndustry, setInvestmentType }) {
  const handleCityChange = (event, newValue) => {
    setCity(newValue);
  };

  const handleIndustryChange = (event, newValue) => {
    setVIndustry(newValue);
  };

  const handleInvestmentTypeChange = (event, newValue) => {
    setInvestmentType(newValue);
  };

  return (
    <>
      <div className="text-white sticky top-0 z-10 flex flex-wrap gap-5 md:gap-0 md:flex-nowrap p-5 pr-10 pl-10 w-screen justify-between items-center shadow-md bg-black drop-shadow-lg">
        <div className="flex justify-between w-full md:w-auto items-center gap-2">
          <Link to="/" className="cursor-pointer font-semibold">
            Volxel
          </Link>
        </div>

        {/*
         *
         * More filters can be added from the backend. If there are many varities
         *
         */}
        <ul className={`flex flex-wrap gap-4 items-center p-2 w-max`}>
          <li>
            <Select
              className="outline-none rounded-sm text-black"
              placeholder="City"
              onChange={handleCityChange}
              value=""
            >
              <Option value="" disabled>
                City
              </Option>
              <Option value="Bangalore">Bangalore</Option>
              <Option value="Hyderabad">Hyderabad</Option>
              <Option value="Mumbai">Mumbai</Option>
              <Option value="New Delhi">New Delhi</Option>
            </Select>
          </li>
          <li>
            <Select
              className="outline-none rounded-sm text-black"
              placeholder="Industry Vertical"
              onChange={handleIndustryChange}
              value=""
            >
              <Option value="" disabled>
                Industry Vertical
              </Option>
              <Option value="Consumer Internet">Consumer Internet</Option>
              <Option value="Technology">Technology</Option>
              <Option value="eCommerce">eCommerce</Option>
            </Select>
          </li>
          <li>
            <Select
              className="outline-none rounded-sm text-black"
              placeholder="Investment Type"
              onChange={handleInvestmentTypeChange}
              value=""
            >
              <Option value="" disabled>
                Investment Type
              </Option>
              <Option value="Seed Funding">Seed Funding</Option>
              <Option value="Private Equity">Private Equity</Option>
            </Select>
          </li>
        </ul>
      </div>
    </>
  );
}
