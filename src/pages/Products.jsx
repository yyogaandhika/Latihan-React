import { BsFillExclamationDiamondFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import products from "../data/product-sedap.json";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const breadcrumb = ["Dashboard", "Product List"];
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => {
          if (response.status !== 200) {
            setError(response.data.message);
            return;
          }
          setProducts(response.data.products);
        })
        .catch((err) => {
          setError(err.message || "An unknown error occurred");
        });
    }, 500);
    return () => clearTimeout(timeout); // cleanup
  }, [query]); // <- array kosong artinya hanya dijalankan sekali setelah di-render

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  return (
    <div className="p-6">
      <PageHeader title="Products" breadcrumb={breadcrumb} />
      {errorInfo}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk..."
        className="mb-4 p-3 w-full bg-white rounded-2xl shadow-lg"
      />

      <div className="overflow-x-auto mt-6 rounded-2xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-gradient-to-b from-black via-purple-900 to-purple-700 text-white">
          <thead>
            <tr className="text-left text-sm font-semibold uppercase tracking-wider bg-black bg-opacity-60">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Vendor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-800 text-sm">
            {products.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-purple-800/40 transition-colors duration-200"
              >
                <td className="px-4 py-3 font-medium">{index + 1}.</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-white hover:text-gray-300"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">Rp {item.price * 1000}</td>
                <td className="px-4 py-3">{item.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
