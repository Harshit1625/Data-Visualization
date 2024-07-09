import { Chart } from "react-google-charts";

const Relevance = ({ relevant }) => {
  let values = relevant.map(function (data) {
    if (data.country === "") {
      return [0, 0];
    }

    return [data.country, data.relevance];
  });
  const headers = ["Region", "Relevance"];
  values.unshift(headers);

  const data = [...values];
  return (
    <>
      <div id="likeRelevance">
        <div className="flex p-4 w-[175vw] lg:w-full flex-col cursor-pointer mt-3 border rounded-2xl justify-between">
        <h1
          className="font-medium color-h1 text-[20px]
      "
        >
          Relevance
        </h1>
        <p className="color-p mb-3">Representation of relevance in regions over countries </p>


          {/* Graph Area */}
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="620px"
            height="310px"
            loader={
              <div className="h-[310px] w-[620px] flex items-center justify-center">
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
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default Relevance;
// #3730A3
