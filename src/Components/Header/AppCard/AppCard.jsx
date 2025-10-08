// import Link from 'daisyui/components/link';
import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
// 
const AppCard = (app) => {
    
    
    const {title,id,image,ratingAvg,downloads}= app.app;

    
    return (
        <Link to={`/apps/${id}`}  className='bg-white rounded-2xl shadow w-full  md:max-w-[384px]  p-4  hover:scale-105 transition duration-150  '>
        <div className='flex flex-col justify-center  items-center'>
            <img className='w-[316px] rounded' src={image} alt="" />    
        </div>
         <h1 className='text-[#001931] mt-4  font-medium text-xl'>{title}</h1>
        <div className='flex justify-between mt-4  px-4 font-medium text-base'>
                <p className='bg-[#F1F5E8] text-[#00D390] p-1 rounded  flex justify-center gap-2 items-center'> 
                    <span className=''><Download /></span>{downloads}M</p>
                <p className='text-[#FF8811] bg-[#FFF0E1]  rounded flex justify-center items-center gap-2 p-1 '> 
                    <span><Star /></span> {ratingAvg}</p>
            </div>
        </Link>
      
    );
};

export default AppCard;