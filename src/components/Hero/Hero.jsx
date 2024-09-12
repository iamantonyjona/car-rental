import React, {useEffect, useState} from "react";
import carPng from "../../assets/car.png";
import yellowCarPng from "../../assets/banner-car.png";

const Hero = ({theme}) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
        <div className="container min-h-[617px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                <div data-aos="zoom-in" 
                     data-aos-duration="1500"
                     className="order-1 sm:order-2">
                    <img src={theme=== "dark" ? carPng : yellowCarPng} alt="" className="relative -z-10 max-h-[600px] sm:scale-125 
                                             drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50) ]"/>
                </div>
                <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                    <p 
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="text-primary text-2xl font-serif">Effortless</p>
                    <h1 
                      data-aos="fade-right"
                      data-aos-delay="600"
                      className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                    > We are car rental company  a business that provides vehicles 
                        for temporary use by customers, usually for a fee. 
                       
                    </p>
                    <button 
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="btn bg-primary hover:bg-primary/80 transtion  duration-500 py-2 px-6 text-black">Get Start    
                    </button>
                       
                </div>
            </div>
        </div> 
    </div>
  );
};

export default Hero;
