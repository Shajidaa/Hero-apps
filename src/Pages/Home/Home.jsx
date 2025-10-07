import React from 'react';
import useProducts from '../../Hooks/Hooks';

const Home = () => {
    const {loading,error,products}=useProducts();
    console.log({loading,error,products});
    
    return (
        <div>
            this is home page 
        </div>
    );
};

export default Home;