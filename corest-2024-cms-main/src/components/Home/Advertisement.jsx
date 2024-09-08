import React from "react";
import RestaurantLogo from "./RestaurantLogo";
import CarouselAds from "./CarouselAds";

const Advertisement = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <RestaurantLogo />
      <CarouselAds />
    </div>
  );
};

export default Advertisement;