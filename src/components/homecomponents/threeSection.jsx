// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import calculatorAndPen from "../../../public/assets/calculatorAndPen.png";
import classWithWhiteWoman from "../../../public/assets/classWithWhiteWoman.png";
import decoration from "../../../public/assets/decoration.png";
import together from "../../../public/assets/togetherHand.png";
import firstHeroPic from "../../../public/assets/firstHeroPic.png";
import stadium from "../../../public/assets/stadium.png";
import nigeria from "../../../public/assets/nigerian.png";
import forever from "../../../public/assets/forever.png";
import buleShirtGuy from "../../../public/assets/buleShirtGuy.png";

const images = [
  [
    { src: calculatorAndPen, title: "Calculator and Pen" },
    { src: classWithWhiteWoman, title: "Class with White Woman" },
    { src: decoration, title: "Decoration" },
    { src: together, title: "Together" },
  ],
  [
    {
      src: firstHeroPic,
      title: "Calculator and Pen",
    },
    {
      src: together,
      title: "Class with White Woman",
    },
    {
      src: classWithWhiteWoman,
      title: "Decoration",
    },
    {
      src: calculatorAndPen,
      title: "Together",
    },
  ],
  [
    {
      src: stadium,
      title: "NEW HORIZONS",
    },
    {
      src: nigeria,
      title: "COMMUNITY",
    },
    {
      src: buleShirtGuy,
      title: "ENGAGEMENT",
    },
    {
      src: forever,
      title: "GROWTH",
    },
  ],
  [
    { src: calculatorAndPen, title: "Calculator and Pen" },
    { src: classWithWhiteWoman, title: "Class with White Woman" },
    { src: decoration, title: "Decoration" },
    { src: together, title: "Together" },
  ],
];

export default function ThreeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full p-12">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="md:text-[24px] sm:text-[18px] text-[14] font-bold text-[#B4020A] inline-block">
            Lorem Ipsum Dolor
          </h1>
          <div className="w-1/2 rounded-xl p-1 h-1 bg-[#FF9900] mt-1"></div>{" "}
          {/* Accent line */}
        </div>

        {/* Pagination Dots */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-[#B4020A]" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="sm:grid grid-cols-2 md:grid-cols-4 gap-4">
        {images[activeIndex].map((image, idx) => (
          <div
            key={idx}
            className="relative w-full h-40 md:h-48 rounded-lg mt-4 overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.title}
              className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute bottom-0 w-[60%] font-semibold text-[16px] bg-[#B4020A] text-center py-3 text-white font-semibold text-sm">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
