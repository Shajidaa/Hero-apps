import rat from "../../assets/icon-ratings.png";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    const data = payload[0].payload;
    return (
      <div
        className="w-auto "
        style={{
          backgroundColor: "#FF88",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          width: "100%",
        }}
      >
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
