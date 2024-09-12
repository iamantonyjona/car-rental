import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:place-item-center">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-item-center">
                <div 
                data-aos="slide-right"
                data-aos-duration="1500" >
                    <img src={CarPng} alt="" className="sm:scale-105 sm:translate-x-11 max-h-[300px] 
                                             drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]" />
                </div>
                <div>
                <div className="space-y-5 sm:p-16 pb-6">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">About us</h1>
 
                    <p data-aos="fade-up">My car rental company service provides customers the opportunity to rent vehicles for a specific period, typically ranging from a few hours to several days or even weeks. 
                        And my companies offer various types of vehicles, from economy models to luxury cars, for personal or business use
                    </p>

                    <p data-aos="fade-up">And such we provide as compact cars, SUVs, luxury cars, and sometimes even vans or trucks, depending on the customer's needs.
                    </p>
                    <button data-aos="fade-up" className="button-outline">Get Started</button>
                        
                </div>
            </div>
            </div>
            
        </div> 
    </div>
  );
};

export default About;
