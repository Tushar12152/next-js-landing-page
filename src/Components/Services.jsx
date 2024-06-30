import React from 'react';

const Services = () => {

       const services=[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
       ]


    return (
        <div className='mt-10 w-[80%] mx-auto'>
              <h1 className='text-center font-bold text-2xl my-10'>Our services</h1>

                <div className='grid grid-cols-3 gap-6 '>
                    {
                        services.map(service=><div key={service?.id} className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                              <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                              </div>
                            </div>
                          </div>)
                    }
                </div>
              

        </div>
    );
};

export default Services;