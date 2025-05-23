import { useState } from "react";
import frameworkData from "./Produk.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.title.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-200 to-purple-300 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Framework List</h1>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-3 border border-gray-300 rounded mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        name="selectedTag"
        className="w-full p-3 border border-gray-300 rounded mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
          >
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">Description: {item.description}</p>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Discount: {item.discountPercentage}%</p>
              <p className="text-gray-600">Rating: {item.rating}</p>
              <p className="text-gray-600">Stock: {item.stock}</p>
              <p className="text-gray-600">Brand: {item.brand}</p>
              <div className="mt-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}