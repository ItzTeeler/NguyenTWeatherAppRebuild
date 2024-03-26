import React from "react";
import Image from "next/image";
import RemoveFav from "@/Assets/FavoriteRemove.png";
import CloudySmall from "@/Assets/CloudySmall.png";
const FavoriteComponent = () => {
  return (
    <div className="bg-[#5193DE] py-[10px] pl-[15px] pr-[10px] text-white font-[Inter] mt-[20px]">
      <div className="flex justify-between mb-[6px] items-center">
        <p className="text-[20px]">Northridge, CA</p>
        <div className="flex items-center">
          <p className="text-[20px]">68°F</p>
          <Image src={RemoveFav} alt="Minus Fav" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src={CloudySmall} alt="CloudySmall" />
          <p className="text-[12px]">Cloudy</p>
        </div>
        <div className="flex items-center text-[12px]">
          <p>
            H: <span>69</span>
          </p>
          <p>
            L: <span>49</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteComponent;
