import React from 'react';
import useApps from '../../../Hooks/Hooks';
import AppCard from '../../../Components/Header/AppCard/AppCard';

const Apps = () => {
        const {loading,error,apps}=useApps();
    return (
        <div>
             <h1 className='font-bold text-3xl text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  '>Trending Apps</h1>
           <p className='text-[#627382] text-xl font-normal lg:leading-20 md:leading-15 leading-10
            text-center'>Explore All Trending Apps on the 
            Market developed by us.</p>
            
           <div className='grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-0 md:px-4'>
            {
                apps.map(app=>
                <AppCard app={app} >
                 </AppCard>)
            }
           </div>
        </div>
    );
};

export default Apps;