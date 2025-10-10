import rat from "../../assets/icon-ratings.png";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    const data = payload[0].payload;
    return (
      <div className="w-[220px]  sm-w-fit bg-[#FF88] p-2.5 rounded">
        <p className="flex flex-row text-sm md:text-base justify-center items-center gap-1">
          {" "}
          {data.count} Users rated this app {data.name}{" "}
          <span className=" md:inline-block hidden ">
            {" "}
            <img src={rat} alt="" className="w-5 h-5 " />
          </span>
        </p>
      </div>
    );
  }
};

export default CustomTooltip;
