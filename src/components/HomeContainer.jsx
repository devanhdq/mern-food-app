import React from 'react';
import Delivery from "../images/delivery.png";
import HeroBackground from "../images/heroBg.png"
import {heroData} from "../utils/data";

function HomeContainer(props) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id="home">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 p-1 rounded-full">
                    <p className="text-base text-orange-300 ">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full object-cover drop-shadow-xl">
                        <img
                            src={Delivery}
                            alt="Delivery"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <p className="text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor">
                    The FastBest Delivery in {" "}
                    <span className="text-orange-600 text-[3rem] md:text-[5rem]">Your City</span>
                </p>
                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur dolor dolore enim
                    et fugiat magnam maxime perspiciatis sunt velit.
                </p>
                <button
                    type="button"
                    className="bg-gradient-to-br
                    from-orange-400 to-orange-500 w-full px-4 py-2
                    rounded-full hover:shadow-lg transition-all ease-in-out duration-100 cursor-pointer md:w-auto ">
                    Order Now
                </button>
            </div>

            <div className="py-2 flex-1 flex items-center justify-center relative">
                <img
                    src={HeroBackground}
                    alt="HeroBackground"
                    className="h-420 lg:h-650 lg:w-auto ml-auto w-full"
                />
                <div
                    className="w-full h-full absolute top-0 left-0
                    flex items-center justify-center py-4 px-32 gap-4 flex-wrap">
                    {heroData && heroData.map(item => (
                        <div key={item.id}
                             className="w-190 p-4 bg-red-600
                                          bg-cardOverlay backdrop-blur-md
                                          rounded-3xl flex flex-col justify-center
                                          items-center drop-shadow-lg ">
                            <img
                                src={item.imageSrc}
                                alt="I1"
                                className="w-40 -mt-20"
                            />
                            <p
                                className="text-lg font-semibold text-textColor"
                            >{item.name} </p>
                            <p className="text-md text-gray-500 font-semibold my-4">{item.desc}</p>
                            <p className="text-lg text-red-500 font-semibold">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeContainer;