import { Download, Star } from 'lucide-react';
import React from 'react';
//  {
//     "image": "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
//     "title": "TaskNest: To-Do Organizer",
//     "companyName": "FlowFrame Apps",
//     "id": 12,
//     "description": "TaskNest: To-Do Organizer transforms chaotic to-do lists into a simple, elegant productivity system. It helps you capture, categorize, and prioritize tasks effortlessly. Whether you’re planning projects, shopping lists, or study schedules, TaskNest adapts to your workflow. The app uses color-coded labels and deadlines to keep everything organized. Smart reminders notify you at just the right time, so you never forget important deadlines. You can also group tasks by project or goal, allowing for clear structure. TaskNest’s drag-and-drop interface makes reordering quick and satisfying. Daily summaries and progress bars help visualize productivity. The app syncs across devices, ensuring seamless continuity between desktop and mobile. TaskNest’s goal isn’t just to help you remember—it’s to help you execute efficiently. By simplifying complexity and promoting clarity, TaskNest empowers you to stay productive, focused, and stress-free in a world full of distractions.",
//     "size": 54,
//     "reviews": 6100,
//     "ratingAvg": 4.8,
//     "downloads": 8700000,
//     "ratings": [
//       { "name": "1 star", "count": 210 },
//       { "name": "2 star", "count": 340 },
//       { "name": "3 star", "count": 620 },
//       { "name": "4 star", "count": 1500 },
//       { "name": "5 star", "count": 3430 }
//     ]
//   }
const AppCard = (app) => {
    
    
    const {title,image,ratingAvg,downloads}= app.app;

    
    return (
        <div  className='bg-white rounded-2xl shadow w-full  md:max-w-[384px]  p-4  hover:scale-105 transition duration-150  '>
        <div className='flex flex-col justify-center  items-center'>
            <img className='w-[316px] rounded' src={image} alt="" />    
        </div>
         <h1 className='text-[#001931] mt-4  font-medium text-xl'>{title}</h1>
        <div className='flex justify-between mt-4  px-4 font-medium text-base'>
                <p className='bg-[#F1F5E8] text-[#00D390] p-1 rounded  flex justify-center gap-2 items-center'> 
                    <span className=''><Download /></span>{downloads}</p>
                <p className='text-[#FF8811] bg-[#FFF0E1]  rounded flex justify-center items-center gap-2 p-1 '> 
                    <span><Star /></span> {ratingAvg}</p>
            </div>
        </div>
      
    );
};

export default AppCard;