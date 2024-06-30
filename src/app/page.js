import Banner from '@/Components/Banner';
import Nav from '@/Components/Nav';
import Services from '@/Components/Services';
import React from 'react';

const Home = () => {
    return (
        <div className='w-[95%] mx-auto'>
             <Nav/>
              <Banner/>
              <Services/>
             Home
        </div>
    );
};

export default Home;