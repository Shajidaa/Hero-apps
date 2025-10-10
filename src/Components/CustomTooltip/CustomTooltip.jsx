import rat from "../../assets/icon-ratings.png";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    const data = payload[0].payload;
    return (
      <div className="md:w-auto  max-w-full bg-[#FF88] p-2.5 rounded">
        <p className="flex flex-row justify-center items-center gap-1">
          {" "}
          {data.count} Users rating this app {data.name}{" "}
          <span className=" inline-block ">
            {" "}
            <img src={rat} alt="" className="w-5 h-5 " />
          </span>
        </p>
      </div>
    );
  }
};

export default CustomTooltip;
