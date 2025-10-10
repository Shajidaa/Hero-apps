import logo from "../../../assets/logo.png";

const Spinner = () => {
  <div className="col-span-full">
    <div className="flex flex-row justify-center items-center min-h-dvh  ">
      <div className="animate-spin [animation-duration-0.5s] w-40 h-40">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  </div>;
};

export default Spinner;
