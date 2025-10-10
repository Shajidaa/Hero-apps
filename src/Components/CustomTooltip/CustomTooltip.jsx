import rat from "../../assets/icon-ratings.png";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "#FF88",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        <p>
          {" "}
          {data.count} Users rat this app {data.name}{" "}
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
