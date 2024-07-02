import Banner from '@/Components/Banner';
import Nav from '@/Components/Nav';
import Services from '@/Components/Services';
import React from 'react';

const Home = () => {
    return (
        <div className='w-[100%] mx-auto '>
            <Nav />
            <div className='flex gap-6 w-[80%] mx-auto mt-10'>
                <div className='w-[20%]'>
                     {/* leftSideContents */}
                      left side contents
                </div>
                <div className='w-[80%]'>

                    <Banner />
                   
                </div>

            </div>



        </div>
    );
};

export default Home;