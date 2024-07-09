import { useState } from "react";

const Sidebar = ({
  setKey,
  data,
  setOpen,
  setPair,
  setValue,
  open,
  value,
  option,
  topics,
  sectors,
  regions,
  pestle,
  sources,
  countries,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="mt-[60px]">
      <button
        className="fixed z-10 ml-[225vw] bg-white p-2 mt-1  rounded-2xl lg:hidden"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {openMenu ? (
          <svg
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#3730A3"
            stroke-width="0.00024000000000000003"
            className="w-9 h-9 mt-2"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"
                fill="#3730A3"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#3730A3"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 7L7 7M20 7L11 7"
                  stroke="#3730A3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M20 17H17M4 17L13 17"
                  stroke="#3730A3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 12H7L20 12"
                  stroke="#3730A3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            <h3 className="color-p mb-3">Filter</h3>
          </>
        )}
      </button>

      {openMenu && (
        <div className="fixed lg:flex border-2 lg:flex-col bg-white rounded-xl w-[50vw] right-4 h-[90vh]  justify-start p-4 overflow-y-auto">
          <h1 className="color-p mb-3">Filter</h1>

          {/* Sector */}
          <div>
            <div
              onClick={() => {
                setValue("sector");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>Sector</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "sector" && open && (
              <div className="mt-2 grid grid-cols-1">
                {sectors.map((data) => {
                  if (data.sector === "") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          value={data.sector}
                          onClick={() => {
                            setKey("sector");
                            setPair(data.sector);
                          }}
                          key={data._id}
                        >
                          {data.sector}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* Topics */}
          <div>
            <div
              onClick={() => {
                setValue("topics");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>Topics</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "topics" && open && (
              <div className="mt-2 grid grid-cols-1">
                {topics.map((data) => {
                  if (data.topic === "") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          onClick={() => {
                            setKey("topic");
                            setPair(data.topic);
                          }}
                          key={data._id}
                        >
                          {data.topic}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* Region */}

          <div>
            <div
              onClick={() => {
                setValue("region");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>Region</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "region" && open && (
              <div className="mt-2 grid grid-cols-1">
                {regions.map((data) => {
                  if (data.region === "") {
                    return;
                  }
                  if (data.region === "world") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          onClick={() => {
                            setKey("region");
                            setPair(data.region);
                          }}
                          key={data._id}
                        >
                          {data.region}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* End Year */}
          <div>
            <div
              onClick={() => {
                setValue("end-year");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>End Year</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "end-year" && open && (
              <div className="mt-2 grid grid-cols-5">
                {option.map((data) => {
                  if (data.end_year === "") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          value={data.end_year}
                          onClick={(e) => {
                            setKey("end_year");
                            setPair(e.target.value);
                          }}
                          key={data._id}
                        >
                          {data.end_year}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pestle */}

          <div>
            <div
              onClick={() => {
                setValue("pestle");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>Pestle</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "pestle" && open && (
              <div className="mt-2 grid grid-cols-1">
                {pestle.map((data) => {
                  if (data.pestle === "") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          value={data.pestle}
                          onClick={() => {
                            setKey("pestle");
                            setPair(data.pestle);
                          }}
                          key={data._id}
                        >
                          {data.pestle}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* Source */}

          <div>
            <div
              onClick={() => {
                setValue("source");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>Source</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "source" && open && (
              <div className="mt-2 grid grid-cols-1">
                {sources.map((data) => {
                  if (data.source === "") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          value={data.source}
                          onClick={() => {
                            setKey("source");
                            setPair(data.source);
                          }}
                          key={data._id}
                        >
                          {data.source}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          {/* Country */}

          <div>
            <div
              onClick={() => {
                setValue("country");
                setOpen(!open);
              }}
              className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
            >
              <h3>Country</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>

            {value === "country" && open && (
              <div className="mt-2 grid grid-cols-1">
                {countries.map((data) => {
                  if (data.country === "") {
                    return;
                  }
                  return (
                    <>
                      <ul className=" cursor-pointer ml-2 mt-1">
                        <li
                          className="border p-2 hover:border-indigo-800 rounded-md"
                          value={data.country}
                          onClick={() => {
                            setKey("country");
                            setPair(data.country);
                          }}
                          key={data._id}
                        >
                          {data.country}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          {/*  */}
        </div>
      )}

      {/* Sidebar for lg screen*/}
      <div className="hidden lg:flex border-2 lg:flex-col bg-white rounded-xl w-[22.5vw] h-[90vh] fixed justify-start p-4 overflow-y-auto mr-9">
        <h1 className="color-f mb-3">Filter</h1>

        {/* Sector */}
        <div>
          <div
            onClick={() => {
              setValue("sector");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>Sector</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "sector" && open && (
            <div className="mt-2 grid grid-cols-1">
              {sectors.map((data) => {
                if (data.sector === "") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        value={data.sector}
                        onClick={() => {
                          setKey("sector");
                          setPair(data.sector);
                        }}
                        key={data._id}
                      >
                        {data.sector}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {/* Topics */}
        <div>
          <div
            onClick={() => {
              setValue("topics");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>Topics</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "topics" && open && (
            <div className="mt-2 grid grid-cols-1">
              {topics.map((data) => {
                if (data.topic === "") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        onClick={() => {
                          setKey("topic");
                          setPair(data.topic);
                        }}
                        key={data._id}
                      >
                        {data.topic}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {/* Region */}

        <div>
          <div
            onClick={() => {
              setValue("region");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>Region</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "region" && open && (
            <div className="mt-2 grid grid-cols-1">
              {regions.map((data) => {
                if (data.region === "") {
                  return;
                }
                if (data.region === "world") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        onClick={() => {
                          setKey("region");
                          setPair(data.region);
                        }}
                        key={data._id}
                      >
                        {data.region}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {/* End Year */}
        <div>
          <div
            onClick={() => {
              setValue("end-year");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>End Year</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "end-year" && open && (
            <div className="mt-2 grid grid-cols-5">
              {option.map((data) => {
                if (data.end_year === "") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        value={data.end_year}
                        onClick={(e) => {
                          setKey("end_year");
                          setPair(e.target.value);
                        }}
                        key={data._id}
                      >
                        {data.end_year}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {/* Pestle */}

        <div>
          <div
            onClick={() => {
              setValue("pestle");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>Pestle</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "pestle" && open && (
            <div className="mt-2 grid grid-cols-1">
              {pestle.map((data) => {
                if (data.pestle === "") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        value={data.pestle}
                        onClick={() => {
                          setKey("pestle");
                          setPair(data.pestle);
                        }}
                        key={data._id}
                      >
                        {data.pestle}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {/* Source */}

        <div>
          <div
            onClick={() => {
              setValue("source");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>Source</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "source" && open && (
            <div className="mt-2 grid grid-cols-1">
              {sources.map((data) => {
                if (data.source === "") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        value={data.source}
                        onClick={() => {
                          setKey("source");
                          setPair(data.source);
                        }}
                        key={data._id}
                      >
                        {data.source}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {/* Country */}

        <div>
          <div
            onClick={() => {
              setValue("country");
              setOpen(!open);
            }}
            className="mt-3 cursor-pointer text-xl border flex justify-between p-2 font-semibold"
          >
            <h3>Country</h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {value === "country" && open && (
            <div className="mt-2 grid grid-cols-1">
              {countries.map((data) => {
                if (data.country === "") {
                  return;
                }
                return (
                  <>
                    <ul className=" cursor-pointer ml-2 mt-1">
                      <li
                        className="border p-2 hover:border-indigo-800 rounded-md"
                        value={data.country}
                        onClick={() => {
                          setKey("country");
                          setPair(data.country);
                        }}
                        key={data._id}
                      >
                        {data.country}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Sidebar;
