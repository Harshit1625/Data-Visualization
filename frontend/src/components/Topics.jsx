import React from "react";
import { Chart } from "react-google-charts";

const Topics = ({ topics }) => {
  let values = topics.slice().map(function (data) {
    const parsedYear = parseInt(data.end_year);
    return [data.topic, parsedYear];
  });

  const headers = ["Region", "Likelihood"];
  values.unshift(headers);

  const data = [...values];

  const options = {

    is3D: true,
    animation: {
      duration: 1000,
      easing: "out",
    },
  };
  return (
    <div className="m-3 border rounded-2xl h-[390px]">
      <div className="flex p-5 flex-col w-[130vw] lg:w-full cursor-pointer pb-7  bg-white inset-6 rounded-2xl justify-between">
        <h1
          className="font-medium color-h1 text-[20px]
      "
        >
          Topics
        </h1>
        <p className="color-p">Representation of topics over years </p>

        {/* Graph Area */}
        <Chart
          chartType="PieChart"
          width="330px"
          height="300px"
          loader={
            <div className="h-[300px] w-[330px] flex items-center justify-center">
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
                <h1 className="font-semibold text-indigo-800">Loading Data</h1>
              </div>
            </div>
          }
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Topics;
