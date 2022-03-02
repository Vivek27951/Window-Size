import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [size, setSize] = useState(window.screen.width);
  const [color, setColor] = useState("blue");

  const actualWidth = () => {
    setSize(window.innerWidth);
    const randomColor = Math.floor(Math.random() * 16777215 * size).toString(
      16
    );
    setColor(randomColor);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);

    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div
      className="bg-slate-900 h-screen flex flex-col justify-center items-center lg:text-5xl md:text-4xl text-xl text-blue-600"
    >
      <h1 className="p-2 hover:border-2 border-white rounded-xl hover:cursor-pointer">
        The Actual Size of the Window is
      </h1>
      <h1
        className="font-bold hover:cursor-pointer lg:m-10 m-5 border-2 p-1 border-white rounded-xl hover:text-6xl"
        style={{ color: `#${color}` }}
      >
        {size}
      </h1>
    </div>
  );
};

export default WindowSize;
