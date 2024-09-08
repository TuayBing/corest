import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselAds = () => {
  return (
    <div className="w-[18.125rem] h-[6.938rem]">
      <Carousel showThumbs={false}>
        <div className="w-[18.125rem] h-[6.938rem]">
          <div className="bg-[#7B7B7B] w-full h-full md:flex md:justify-center md:items-center">
            Ads Photo
          </div>
        </div>
        <div className="w-[18.125rem] h-[6.938rem]">
          <div className="bg-[red] w-full h-full md:flex md:justify-center md:items-center">
            Ads Photo
          </div>
        </div>
        <div className="w-[18.125rem] h-[6.938rem]">
          <div className="bg-[pink] w-full h-full md:flex md:justify-center md:items-center">
            Ads Photo
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselAds;