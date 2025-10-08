import { useParams } from "react-router";
import useApps from "../../../Hooks/Hooks";

import { addToStore } from "../../../Utillity/store";
import Download from "../../../assets/icon-downloads.png";
import rat from "../../../assets/icon-ratings.png";
import like from "../../../assets/Vector (2).png";
import React from "react";
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

  const { id } = useParams();
  console.log(Number(id));

  if (loading) {
    return <p>loading..........</p>;
  }
  const app = apps.find((singleApp) => singleApp.id === Number(id));
  //  console.log(app);

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
  // console.log(reverseRatings);

  const handleInstallAdd = (id) => {
    addToStore("install", id);
  };

  return (
    <div className=" mt-20 ">
      <div className="flex justify-between items-center gap-10">
        <div className="w-[350px] h-[350px] ">
          <img
            src={image}
            className=" shadow  w-full h-full  object-contain "
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

          <div className="flex gap-10 my-8 ">
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
            className="btn font-medium text-xl text-white bg-[#00D390] rounded"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr className="text-gray-400 my-8" />
      <div>
        <h1 className="text-[#001931]  font-semibold text-2xl">Ratings</h1>
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
        </div>
      </div>
      <hr className="text-gray-400 my-8" />

      <div>
        <h1 className="text-[#001931]  font-semibold text-2xl">Description</h1>
        <p className="text-xl font-normal text-[#627382] md:mt-6 mt-3 md:pb-20 pb-10  ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;

//    "image": "https://i.ibb.co.com/Xxqtr01p/Untitled-design.png",
//     "title": "Time Planner: Schedule & Tasks",
//     "companyName": "Boostify Apps",
//     "id": 1,
//     "description": "Time Planner: Schedule & Tasks is designed for people who want to manage every aspect of their day with precision. It combines a sleek interface with intelligent scheduling tools that make organizing tasks feel effortless. Users can divide their goals into projects, assign due dates, and set priority levels to focus on what matters most. The app supports both short-term and long-term planning, helping you visualize how your time is spent across work, study, and personal life. A powerful calendar view allows for drag-and-drop task management, while smart reminders ensure you never miss a commitment. The integrated analytics dashboard gives insights into your daily habits, revealing how efficiently you use your time. With dark mode, widget support, and cross-device synchronization, Time Planner is not just a to-do list—it’s a full productivity ecosystem built for consistency, balance, and growth in your everyday routine.",
//     "size": 48,
//     "reviews": 8700,
//     "ratingAvg": 4.8,
//     "downloads": 90,
//     "ratings": [
//       { "name": "1 star", "count": 300 },
//       { "name": "2 star", "count": 500 },
//       { "name": "3 star", "count": 800 },
//       { "name": "4 star", "count": 1800 },
//       { "name": "5 star", "count": 5300 }
//     ]
