import { useEffect, useState } from "react";
import React from "react";

export default function Firstwebsite() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/12b/students");
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-orange-50">
  <header className="w-full h-24 bg-orange-200 flex items-center justify-between px-12 shadow-md">
    <div className="text-3xl font-bold text-orange-800">Khangarid Website</div>
    <nav className="flex space-x-8 text-orange-700">
      <div className="hover:underline cursor-pointer">Home</div>
      <div className="hover:underline cursor-pointer">About</div>
      <div className="hover:underline cursor-pointer">Contact</div>
    </nav>
  </header>

  <main className="flex-1 flex flex-col items-center justify-start p-8 space-y-6">
    <div className="text-center max-w-3xl">
      <h1 className="text-4xl font-bold text-orange-800 mb-3">My Website Info</h1>
      <p className="text-orange-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img
        src="https://freepngimg.com/save/10443-business-free-download-png/652x500"
        alt="Business"
        className="mx-auto rounded-lg shadow-md mb-8"
      />
    </div>

    <div className="w-full max-w-4xl bg-orange-100 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-orange-800 mb-4">API Data</h2>
      {data.length === 0 ? (
        <p className="text-orange-700">Loading...</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 text-orange-700 list-disc pl-5">
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  </main>

  <footer className="w-full h-20 bg-orange-200 flex items-center justify-center text-orange-700 mt-auto shadow-inner">
    @address Ulaanbaatar, Mongolia
  </footer>
</div>

  );
}
