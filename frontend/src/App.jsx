import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Intensity from "./components/Intensity";
import fetchData from "./util/fetchData";
import Likelihood from "./components/Likelihood";
import Relevance from "./components/Relevance";
import Years from "./components/Years";
import Country from "./components/Country";
import Region from "./components/Region";
import Topics from "./components/Topics";
import MoonLoader from "react-spinners/MoonLoader";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  const [dataVisuals, setDataVisuals] = useState([]); //primary data
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState("region");
  const [pair, setPair] = useState("Northern America");
  const [incomingData, setIncomingData] = useState([]); //filtered data
  const [load, setLoad] = useState(true);

  axios.defaults.baseURL = "http://localhost:4000/";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("/all").then((response) => {
      const { data } = response;
      setDataVisuals(data);
      setIncomingData(data);
      setLoad(false);
    });
  }, []);

  //to fetch data on selected filter
  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      try {
        const result = await fetchData(key, pair);
        setIncomingData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAndUpdate();
  }, [key, pair]);

  // console.log(dataVisuals);

  //function to remove duplicates
  function removeDuplicates(array, property) {
    const lookup = {};
    const uniqueArray = [];

    for (let obj of array) {
      const value = obj[property];
      if (!lookup[value]) {
        lookup[value] = true;
        uniqueArray.push(obj);
      }
    }
    return uniqueArray;
  }

  //for Sidebar
  const option = removeDuplicates(dataVisuals, "end_year");
  const topics = removeDuplicates(dataVisuals, "topic");
  const sectors = removeDuplicates(dataVisuals, "sector");
  const regions = removeDuplicates(dataVisuals, "region");
  const pestle = removeDuplicates(dataVisuals, "pestle");
  const sources = removeDuplicates(dataVisuals, "source").slice(0, 15);
  const countries = removeDuplicates(dataVisuals, "country");

  //for components //ID stands for incoming data
  const optionID = removeDuplicates(incomingData, "end_year");
  const topicsID = removeDuplicates(incomingData, "topic");
  const countriesID = removeDuplicates(incomingData, "country");
  const likelihoodID = removeDuplicates(incomingData, "likelihood");
  const intensityID = removeDuplicates(incomingData, "intensity");

  return (
    <>
      {/* Header */}

      {load ? (
        <>
          <div className="shadow w-[100vw] p-3 z-20 bg-white rounded-xl flex items-center">
            <h1 className="text-indigo-800 font-bold text-[18px] ml-[1vw] mt-2 mr-[70vw]">
              Dashboard
            </h1>
          </div>

          <div className="loader">
            <span className="color-h1">Loading data</span>
            <MoonLoader color={"purple"} loading={load} size={20} />
          </div>
        </>
      ) : (
        <>
          {/* Main */}
          <div className="shadow w-full p-3 fixed z-20 bg-white flex items-center">
              <h1 className="color-h1 font-bold text-[18px] ml-[1vw] mt-2 mr-[70vw]">
                Dashboard
              </h1>
              <div className="bg-slate-200 flex pl-2 pr-2 pt-1 pb-1 gap-2 rounded ml-[14.5vw]">
              <AccountCircleIcon />
              <h1 className="color-p">Admin</h1>
              </div>
          </div>
          <div className="flex ml-5 relative">
            <div className="w-[75vw] mt-[50px] h-[90vh]">
              <div className="flex w-full">
                <Topics topics={topicsID} />
                <Region intensity={intensityID} />
              </div>
              <Years sector={incomingData} />
              <div className="flex ml-4">
                <Relevance relevant={incomingData} />
                <Likelihood like={likelihoodID} />
              </div>
              <Country country={countriesID} />
              <Intensity year={optionID} />
            </div>
            <Sidebar
              setValue={setValue}
              setKey={setKey}
              setPair={setPair}
              setOpen={setOpen}
              open={open}
              value={value}
              option={option}
              topics={topics}
              sectors={sectors}
              regions={regions}
              pestle={pestle}
              sources={sources}
              countries={countries}
              data={incomingData}
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
