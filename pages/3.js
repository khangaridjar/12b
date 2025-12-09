import { useEffect, useState } from "react";
import jsonData from "@/utils/jsonData.json";

export default function Firstwebsite() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="w-full min-h-screen flex bg-white">
      <aside className="w-64 bg-white shadow-md flex flex-col p-6 space-y-6">
        <div className="text-2xl font-bold text-black">Moruvo STORE</div>
        <nav className="flex flex-col space-y-4 text-gray-700">
          <div className="cursor-pointer hover:text-orange-600">Home</div>
          <div className="cursor-pointer hover:text-orange-600">Explore</div>
          <div className="cursor-pointer hover:text-orange-600">Saved</div>
          <div className="cursor-pointer hover:text-orange-600">Cart</div>
          <div className="cursor-pointer hover:text-orange-600">Selling</div>
          <div className="cursor-pointer hover:text-orange-600">Profile</div>
          <div className="cursor-pointer hover:text-orange-600">History</div>
          <div className="cursor-pointer hover:text-orange-600">Contact us</div>
          <div className="cursor-pointer hover:text-orange-600">Setting</div>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-black">HOME</h1>

        <div className="bg-gray-200 p-6 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
             
              {item.name === "add" ? (
                <>
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-700 text-white text-4xl">
                    +
                  </div>
                  <h2 className="mt-4 font-bold">ADD PRODUCT</h2>
                  <button className="text-sm text-blue-600 hover:underline">
                    add item
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-contain mb-3"
                  />
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600 text-center">
                    {item.description}
                  </p>
                  <p className="font-semibold mt-2">{item.price}</p>

                  {item.name === "Headphones" ? (
                    <button className="mt-2 text-sm text-gray-700 hover:underline">
                      ✏ Edit
                    </button>
                  ) : (
                    <button className="mt-2 text-sm text-blue-600 hover:underline">
                      add to cart
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
