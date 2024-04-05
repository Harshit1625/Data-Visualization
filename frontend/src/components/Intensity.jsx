
import { Chart } from "react-google-charts";

const Intensity = ({ year }) => {
  let values = year.slice().map(function (data) {
    if (data.end_year === "") {
      return [0, 0];
    }
    const parsedYear = parseInt(data.end_year);
    return [data.intensity, parsedYear];

  });
  const headers = ["Intensity", "Years"];
  values.unshift(headers);

  const data = [...values];

  const options = {
    title : 'Representation of Intensity over years',
    chartArea: { width: "80%" },
    animation: {
      startup: true,
      duration: 1000,
      easing: "out",
    },
  
    bar: { groupWidth: "100%" },
    hAxis: {
      title: "(End Year)",
    },
    vAxis: {
      title: "(Intensity)",
    },
  };

  return (
    <div className="shadow-lg rounded-2xl m-3">
      <div className="flex p-4 lg:w-full w-[312vw] sm:w-[155vw] md:w-[113vw] flex-col cursor-pointer bg-white rounded-2xl">
        <h1
          className="text-indigo-800 font-bold text-[20px] border-indigo-800
        "
        >
          Intensity
        </h1>
        <p></p>

        {/* Graph Area */}
        <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
          loader={
              <div className="h-[300px] w-[100%] flex items-center justify-center">
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

export default Intensity;
