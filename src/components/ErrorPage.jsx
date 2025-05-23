import React from "react";


export default function ErrorPage({ code, description, image}){
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
          <img src={image} alt="Error Illustration" className="w-96 mb-6" />
          <h1 className="text-6xl font-bold text-white mb-2">{code}</h1>
          <p className="text-xl text-gray-300">{description}</p>
        </div>
      );
}