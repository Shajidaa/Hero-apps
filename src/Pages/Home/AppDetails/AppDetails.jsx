import { useParams } from "react-router";
import useApps from "../../../Hooks/Hooks";

import { addToStore } from "../../../Utillity/store";
import Download from "../../../assets/icon-downloads.png";
import rat from "../../../assets/icon-ratings.png";
import like from "../../../assets/Vector (2).png";

import ErrorApp from "../ErrorPages/ErrorApp";
import Spinner from "../../../Components/Header/Spinner/Spinner";
import AppContext from "../../../context/AppContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
const AppDetails = () => {
  const { loading, apps } = useApps();
  const { setInstall, install } = useContext(AppContext);

  const { id } = useParams();
  const appId = Number(id);

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!appId) {
    return <ErrorApp></ErrorApp>;
  }
  const app = apps.find((singleApp) => singleApp.id === appId);

  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || [];
  const reverseRatings = [...ratings].reverse();

  const handleInstallAdd = (id) => {
    addToStore("install", id);
    setInstall([...install, id]);
  };
  const isInstalled = install.some((appId) => appId === id);

  return (
    <div className=" mt-20 container mx-auto lg:p-2 p-5 ">
      <div className="flex flex-col justify-center  md:flex-row md:justify-between items-center gap-10">
        <div className="md:w-[350px] w-full  md:h-[350px] ">
          <img
            src={image}
            className=" shadow rounded-xl w-full h-full  object-contain "
            alt=""
          />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-3xl/normal text-[#001931]">{title}</h1>
          <p className="font-normal text-xl text-[#627382] ">
            Developed by{" "}
            <span className=" !text-xl gradient-text">{companyName}</span>
          </p>
          <hr className="text-gray-400 mt-8" />

          <div className="flex md:flex-row flex-col gap-10 my-8 ">
            <div className="flex flex-col">
              <div className="w-10 h-10 ">
                <img className="object-cover" src={Download} alt="" />
              </div>
              <p className="text-base font-normal text-[#001931]">Downloads</p>
              <h1 className="font-bold text-4xl text-[#001931] ">
                {downloads}M
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 ">
                <img className="object-cover" src={rat} alt="" />
              </div>
              <p className="text-base font-normal text-[#001931]">
                Average Ratings
              </p>
              <h1 className="font-bold text-4xl text-[#001931] ">
                {ratingAvg}
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 ">
                <img className="object-cover" src={like} alt="" />
              </div>
              <p className="text-base font-normal text-[#001931]">
                Total Reviews
              </p>
              <h1 className="font-bold text-4xl text-[#001931] ">{reviews}K</h1>
            </div>
          </div>

          <button
            onClick={() => {
              handleInstallAdd(id);
            }}
            disabled={isInstalled}
            className={`btn font-medium text-xl text-white  rounded
              bg-[#00D390]`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <hr className="text-gray-400 my-8" />
      <div>
        <h1 className="text-[#001931]  font-semibold text-2xl">Ratings</h1>
      </div>
      <hr className="text-gray-400 my-8" />
      <div className="h-[400px] w-full">
        {ratings && ratings.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={reverseRatings}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                axisLine={false}
                strikethroughThickness={false}
                type="number"
              />
              <YAxis
                axisLine={false}
                strikethroughThickness={false}
                dataKey="name"
                type="category"
              />
              <Tooltip />
              <Legend />

              <Bar
                axisLine={false}
                dataKey="count"
                barSize={20}
                fill="#FF8811"
              />
            </ComposedChart>
          </ResponsiveContainer>
        ) : (
          <p>no chart found</p>
        )}
      </div>{" "}
      */
      <div>
        <h1 className="text-[#001931]  font-semibold text-2xl">Description</h1>
        <p className="text-xl font-normal text-[#627382] md:mt-6 mt-3 md:pb-20 pb-10  ">
          {description}
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppDetails;
