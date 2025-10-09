import { useParams } from "react-router";
import useApps from "../../../Hooks/Hooks";

import { addToStore, getStoreApp } from "../../../Utillity/store";
import Download from "../../../assets/icon-downloads.png";
import rat from "../../../assets/icon-ratings.png";
import like from "../../../assets/Vector (2).png";

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
import Container from "../../../Components/Header/Container/Container";

const AppDetails = () => {
  const { loading, apps } = useApps();

  const { id } = useParams();
  // console.log(Number(id));
  const appId = Number(id);

  if (loading) {
    return <p>loading..........</p>;
  }
  const app = apps.find((singleApp) => singleApp.id === appId);
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

    // toast.success("App install successfully!");
  };

  return (
    <Container>
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
            <h1 className="font-bold text-3xl/normal text-[#001931]">
              {title}
            </h1>
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
                <p className="text-base font-normal text-[#001931]">
                  Downloads
                </p>
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
                <h1 className="font-bold text-4xl text-[#001931] ">
                  {reviews}K
                </h1>
              </div>
            </div>

            <button
              onClick={() => {
                handleInstallAdd(id);
              }}
              className={`btn font-medium text-xl text-white  rounded 
                bg-[#00D390]`}
            >
              Install Now ( ${size} MB)
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
          <h1 className="text-[#001931]  font-semibold text-2xl">
            Description
          </h1>
          <p className="text-xl font-normal text-[#627382] md:mt-6 mt-3 md:pb-20 pb-10  ">
            {description}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
