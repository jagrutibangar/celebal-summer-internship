import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';


const DashboardPage = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Body/>

      {/*
        Navbar
          -logo
          -send
          -recieve
          -track
          -UserProfile
        Body
          -Track Shipment
          -Create Shipment
          
      */}
    </div>
    </>
  );
}

export default DashboardPage;
