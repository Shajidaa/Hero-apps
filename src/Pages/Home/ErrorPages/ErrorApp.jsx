import img from "../../../assets/App-Error.png";
import { Link } from "react-router";
const ErrorApp = () => {
  return (
    <div className="flex  flex-col justify-center items-center  min-h-dvh  ">
      <div>
        <img src={img} alt="" />
      </div>
      <h1 className="font-bold text-3xl p-3 text-center  md:text-5xl text-[#001931]  ">
        OPPS!! APP NOT FOUND
      </h1>
      <p
        className="text-[#627382] p-2 text-xl font-normal 
            text-center"
      >
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        to="/"
        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back !
      </Link>
    </div>
  );
};

export default ErrorApp;
