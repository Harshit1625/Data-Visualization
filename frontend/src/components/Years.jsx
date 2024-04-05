import React from "react";
import { Chart } from "react-google-charts";

const Years = ({ sector }) => {
  let values = sector.map(function (data) {
    if (data.end_year === "" || data.sector === "" || data.region === "") {
      return ["", 0, 0, ""];
    }
    const parsedYear = parseInt(data.end_year);
    return [data.sector, parsedYear, data.relevance, data.region];
  });

  const headers = ["Sector", "End Year", "Relevance", "Region"];
  values.unshift(headers);

  const data = [...values];

  const options = {
    title: "Relevance of different sectors in different regions over years",
    hAxis: { title: "Years" },
    vAxis: { title: "Relevance" },
    bubble: { textStyle: { fontSize: 11 } },
  };
  return (
    <div
      id="likeYears"
      className="shadow-lg m-3 cursor-pointer rounded-2xl  bg-white"
    >
      <div className="flex lg:w-full w-[312vw] sm:w-[312vw] md:w-[113vw] p-5 flex-col cursor-pointerrounded-md  pb-7 h-full bg-white inset-6 rounded-2xl justify-between">
        <h1
          className="text-indigo-800 font-bold text-[20px] border-indigo-800
            "
        >
          Years
        </h1>

        {/* Graph Area */}

        <Chart
          chartType="BubbleChart"
          width="100%"
          height="400px"
          data={data}
          loader={
              <div className="h-[400px] w-[100%] flex items-center justify-center">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3730A3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mr-2 animate-spin shadow"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M21 12a9 9 0 11-6.219-8.56"></path>{" "}
                    </g>
                  </svg>
                  <h1 className="font-semibold text-indigo-800">
                    Loading Data
                  </h1>
                </div>
              </div>
            }
          options={options}
        />
      </div>
    </div>
  );
};

export default Years;
