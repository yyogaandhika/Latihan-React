import frameworkData from "./Produk.json";
import { useState } from "react";

export default function FrameworkList() {
  return (
    <div className="p-8">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
          <p className="text-gray-600">Deskrispi: {item.description}</p>
          <p className="text-gray-600">Category : {item.category}</p>
          <p className="text-gray-600">Harga : ${item.price}</p>
          <p className="text-gray-600">Disc : {item.discountPercentage}%</p>
          <p className="text-gray-600">Rating : {item.rating}</p>
          <p className="text-gray-600">Stock : {item.stock}</p>
          <p className="text-gray-600">Brand : {item.brand}</p>
          <p>
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
