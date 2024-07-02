import Image from 'next/image'
import slide1 from '@/assest/slide-01.webp'
import slide2 from '@/assest/slide-02.webp'




const Banner = () => {


    const bannerInfo=[
        {
            id:1,
            image:'https://i.ibb.co/PY2FyTQ/banner-01.webp',
            description:'On selected Womens footwear',
            discount:'20% OFF'
        },
        {
            id:2,
            image:"https://i.ibb.co/x32Z4t0/banner-02.webp",
            description:'On selected mens fashion',
            discount:'25% OFF'
        },
        {
            id:3,
            image:"https://i.ibb.co/6NRrnrg/banner-03.webp",
            description:'On selected kids fashion',
            discount:'30% OFF'
        },
    ]

    return (
        <div>
            {/* carosel */}
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                     
              <div className='relative'>
                   <Image src={slide1} alt="banner1" height={1200} width={1200} />
                   <div className='absolute top-72 left-24'> 
                    <h3 className="text-white font-semibold">Up to 70% off</h3>
                    <h2 className='text-xl text-white py-3 font-bold'>WOMENS CLOTHING</h2>
                     <button className='p-3 bg-white hover:bg-transparent font-bold hover:text-white'>Shop Now</button>
                   </div>

              </div>
                     

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                   
                <div className='relative'>
                   <Image src={slide2} alt="banner2" height={1200} width={1200} />
                   <div className='absolute top-72 right-24'> 
                    <h3 className="text-white font-semibold">Up to 70% off</h3>
                    <h2 className='text-xl text-white py-3 font-bold'>WOMENS CLOTHING</h2>
                     <button className='p-3 bg-white hover:bg-transparent font-bold hover:text-white'>Shop Now</button>
                   </div>

              </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

             <div className='mt-10 flex gap-6'>
                    {
                        bannerInfo.map(card=><div key={card?.id}>
                             <div className='relative'>
                                 <Image src={card?.image} alt=".." height={500} width={500} />
                                 <h1 className="text-lg w-full p-2 bg-gray-600 text-white text-center">{card?.description}</h1>

                                 <span className='py-7 px-2  absolute  top-60 right-1 rounded-full text-white  bg-[#FF8A65]'>
                                    {card?.discount}
                                 </span>
                             </div>
                        </div>)
                    }
             </div>


        </div>
    )
}

export default Banner