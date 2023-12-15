import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Card from "../Components/Card";
import { CircularProgress } from "@mui/joy";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import DetailsModal from "../Components/DetailsModal";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(true);
  const [selectedStartup, setSelectedStartup] = useState(null);

  const [data, setData] = useState([]);

  const [filterCity, setFilterCity] = useState("");
  const [filterIndustryVertical, setFilterIndustryVertical] = useState("");
  const [filterInvestmentType, setFilterInvestmentType] = useState("");

  const [page, setPage] = useState(1);

  const handleCardClick = (startupDetails) => {
    setSelectedStartup(startupDetails);
    setModal(true);
  };

  const getData = async () => {
    setLoading(true);

    try {
      let response = await fetch(
        `http://localhost:3001/api/get?IndustryVertical=${filterIndustryVertical}&SubVertical=&Location=${filterCity}&InvestmentType=${filterInvestmentType}&page=${page}&pageSize=21`
      );
      let processed = await response.json();

      setData([]);
      setData(processed);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [filterCity, filterIndustryVertical, filterInvestmentType, page]);

  return (
    <>
      <Nav
        setCity={setFilterCity}
        setVIndustry={setFilterIndustryVertical}
        setInvestmentType={setFilterInvestmentType}
      />

      <div className="flex justify-center mt-5 bg-transparent items-center gap-3 shadow-sm">
        <span className="text-gray-600 font-bold text-md">Page {page}</span>
        <div className="flex justify-evenly gap-2 items-center w-max">
          <button
            className="border-2 rounded-md border-gray-400 p-2"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            className="border-2 rounded-md border-gray-400 p-2"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex justify-center w-screen h-screen bg-gray-100 z-0">
        {loading ? (
          <div className="w-9/12 bg-white shadow-md flex flex-wrap justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="w-screen md:w-10/12 lg:w-9/12 overflow-y-auto scrollbar-thin scrollbar-thumb-black bg-white flex justify-center p-4 shadow-md">
              <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((ele) => {
                  return (
                    <Card
                      key={ele._id}
                      data={ele}
                      handleCardClick={handleCardClick}
                    />
                  );
                })}

                <div
                  className={`${
                    modal ? "fixed" : "hidden"
                  } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg`}
                >
                  <DetailsModal
                    setModalState={setModal}
                    data={selectedStartup}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
