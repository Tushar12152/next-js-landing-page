// components/AboutUs.js
"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import team1 from '../assest/team1.webp';
import team2 from '../assest/team2.webp';
import team3 from '../assest/team3.webp';
import team4 from '../assest/team4.webp';

const AboutUs = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    if (statsInView) {
      setAnimateStats(true);
    }
  }, [statsInView]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About us</h1>
          <p className="text-gray-600">
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur.
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-wrap mb-16">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="https://i.ibb.co/YXxpJ5Q/content-img-07-800x800.webp"
              alt="Clothes hanging"
              width={600}
              height={400}
              className="rounded"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Consectetur adipiscing elit, sed do eiusmod tempor. Mauris vulputate imperdiet</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur augue lobortis,
              hendrerit nisi non, luctus ipsum. Phasellus posuere hendrerit libero, vitae hendrerit arcu
              dapibus vel.
            </p>
            <p className="text-gray-600">
              Mauris porta aliquet ex non blandit. In magna augue, eleifend eu condimentum vel,
              sagittis vitae mi. Nunc felis convallis felis porta rhoncus felis, laoreet pretium
              hendrerit lorem vel sollicitudin.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <Image
            src="https://i.ibb.co/mHmzHbf/bg-img-03.webp"
            alt="Our history"
            width={1200}
            height={800}
            className="rounded"
          />
          <h2 className="text-2xl font-bold mt-8 mb-4">Our History</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div ref={statsRef} className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">A few facts about us</h2>
          <div className="flex justify-around">
            {['435', '232', '543', '314', '345'].map((num, index) => (
              <div key={index} className={`text-center ${animateStats ? 'animate-fadeIn' : 'opacity-0'}`}>
                <h3 className="text-3xl font-bold">{num}</h3>
                <p className="text-gray-600">
                  {index === 0 ? 'Dolore magna' : index === 1 ? 'Pharetra faucibus' : index === 2 ? 'Sollicitudin' : index === 3 ? 'Cupidatat' : 'Pellentesque'}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Meet our team</h2>
          <div className="flex justify-around flex-wrap">
            <div className="p-4">
              <Image
                src={team1}
                alt="Mariane Hayes"
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold mt-2">Mariane Hayes</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="p-4">
              <Image
                src={team2}
                alt="Steve Greer"
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold mt-2">Steve Greer</h3>
              <p className="text-gray-600">Sollicitudin</p>
            </div>
            <div className="p-4">
              <Image
                src={team3}
                alt="Juanita Berry"
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold mt-2">Juanita Berry</h3>
              <p className="text-gray-600">Eximari</p>
            </div>
            <div className="p-4">
              <Image
                src={team4}
                alt="Jessie Campbell"
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold mt-2">Jessie Campbell</h3>
              <p className="text-gray-600">Sollicitudin</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Signup & Get 10% Off</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-l"
              placeholder="Enter your email"
            />
            <button className="p-2 bg-[#60E9CE] text-white rounded-r">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
