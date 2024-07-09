import React from "react";
import { Chart } from "react-google-charts";


const Country = ({ country }) => {
  let values = country.map(function (data) {
    if (data.country === "" || data.likelihood === 0) {
      return ['Australia', 9];
    }

    return [data.country, data.likelihood];
  });
  console.log(values);
  const headers = ["Region", "Likelihood"];
  values.unshift(headers);

  const data = [...values];
  const options = {
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div className="m-3 border rounded-2xl">
      <div className="flex p-5 pb-7 lg:w-full w-[312vw] sm:w-[155vw] md:w-[113vw] flex-col cursor-pointerrounded-md h-full bg-white inset-6 rounded-2xl justify-between">
      <h1
          className="font-medium color-h1 text-[20px]
      "
        >
          Country
        </h1>
        <p className="color-p">Representation of likelihood over countries </p>

        {/* Graph Area */}
        <Chart
          chartType="LineChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
          loader={
              <div className="h-[300px] w-[985px] flex items-center justify-center">
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
        />
      </div>
    </div>
  );
};

export default Country;
