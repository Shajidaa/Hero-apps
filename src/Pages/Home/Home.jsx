import React from 'react';

import useApps from '../../Hooks/Hooks';
import AppCard from '../../Components/Header/AppCard/AppCard';

const Home = () => {
    const {loading,error,apps}=useApps();
    // console.log({loading,error,apps});
    const trendingApps=apps.slice(0,8);
    // console.log(trendingApps);
    
    return (
        <div>
            <div>
        <h1>Trending Apps</h1>
           <p>Explore All Trending Apps on the 
            Market developed by us.</p>
            </div>
           <div>
            {
                trendingApps.map(app=>
                <AppCard key={app.id} app={app} >
                 </AppCard>)
            }
           </div>
        </div> 
    );
};

export default Home;