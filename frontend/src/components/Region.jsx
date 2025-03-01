import React from "react";
import { Chart } from "react-google-charts";

const Region = ({ intensity }) => {
  let values = intensity.slice(0, 5).map(function (data) {
    if (data.region === "") {
      return ["Australia", 5];
    }
    if (data.region === "World") {
      return ["Africa", 6];
    }

    return [data.region, data.intensity];
  });
  const headers = ["Region", "Intensity"];
  values.unshift(headers);

  const data = [...values];
  const options = {
    curveType: "function",
    legend: { position: "bottom" },
    animation: {
      duration: 1000,
      easing: "out",
      startup: true,
    }
  };

  return (
    <div className="m-3 border rounded-2xl">
      <div className="flex p-5 flex-col w-[175vw] lg:w-full cursor-pointerrounded-md  pb-7 h-full bg-white inset-6 rounded-2xl justify-between">
      <h1
          className="font-medium color-h1 text-[20px]
      "
        >
          Region
        </h1>
        <p className="color-p">Representation of intensity over countries </p>

        {/* Graph Area */}
        <Chart
          chartType="ScatterChart"
          width="600px"
          height="300px"
          data={data}
          loader={
              <div className="h-[300px] w-[600px] flex items-center justify-center">
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

export default Region;
