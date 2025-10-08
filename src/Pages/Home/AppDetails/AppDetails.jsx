import React from "react";
import { useParams } from "react-router";
import useApps from "../../../Hooks/Hooks";

const AppDetails = () => {
  const { id } = useParams();
  console.log(Number(id));

  const { loading, apps } = useApps();
  //  console.log({loading,error,apps});
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

  return (
    <div className=" p-4    ">
      <div className="flex  gap-3">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <button className="btn">Install Now (291 MB)</button>
        </div>
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
