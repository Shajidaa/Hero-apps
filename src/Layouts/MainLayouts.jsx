import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Container from '../Components/Header/Container/Container';


const MainLayouts = () => {
    return (
        <div>
            <Container>
          <Navbar></Navbar>
            </Container>
            
            <Container >
            <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default MainLayouts;