"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";

const products = [
  { name: "Acme Circles T-Shirt", price: "$20.00 USD", image: "/tshirt.png" },
  { name: "Acme Drawstring Bag", price: "$12.00 USD", image: "/bag.png" },
  { name: "Acme Cup", price: "$15.00 USD", image: "/blackcup.png" },
  { name: "Acme Hoodie", price: "$35.00 USD", image: "/hoodie.png" },
  { name: "Acme White T-Shirt", price: "$18.00 USD", image: "/whitetshirt.png" },
  { name: "Acme Beanie", price: "$10.00 USD", image: "/beanie.png" },
  { name: "Acme White T-Shirt", price: "$18.00 USD", image: "/cup2.png" }
];

export default function Home() {
  const router = useRouter();
  console.log(products.slice(1,3));
  
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 flex flex-col">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img className="h-12 w-12 rounded-lg" src="/logo.png" />
          <span className="font-bold text-lg">ACME STORE</span>
          <nav className="ml-6 space-x-4">
            <a className="hover:underline text-gray-400">All</a>
            <a className="hover:underline text-gray-400">Shirts</a>
            <a className="hover:underline text-gray-400">Stickers</a>
          </nav>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="rounded px-3 py-1 text-neutral-300 border border-neutral-800"
          />
        </div>

        <button className="ml-4 p-2 border border-white rounded">🛒</button>
      </header>




      <main className="grid grid-cols-3 gap-6 flex-grow">
        <div className="col-span-2 bg-black p-4 rounded group overflow-hidden relative border border-white/20 transition-all duration-300 hover:border-blue-500">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              onClick={() => router.push("/acme/page1")}
              src="/tshirt.png"
              width={600}
              height={600}
              alt="T-Shirt"
              className="mx-auto transition-transform duration-300 group-hover:scale-105 object-cover"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center bg-black/90 text-white rounded-full p-1 pr-3 space-x-2 backdrop-blur">
              <span className="text-sm font-medium pl-3">{products[0].name}</span>
              <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">{products[0].price}</span>
            </div>
          </div>
        </div>










        <div className="flex flex-col gap-6">
          {products.slice(1, 3).map((product, idx) => (
            <div key={idx} className="bg-black p-4 rounded relative group overflow-hidden border border-white/20 transition-all duration-300 hover:border-blue-500">
              <Image
                src={product.image}
                width={300}
                height={300}
                alt={product.name}
                className="mx-auto transition-transform duration-300 group-hover:scale-105 object-cover"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center bg-black/90 text-white rounded-full p-1 pr-3 space-x-2 backdrop-blur">
                <span className="text-sm font-medium pl-3">{product.name}</span>
                <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>











      <Marquee autoFill>
        <div className="grid grid-cols-4 gap-6 mt-6 ml-6">
          {products.slice(3).map((product, idx) => (
            <div key={idx} className="bg-black p-4 rounded relative group overflow-hidden border border-white/20 transition-all duration-300 hover:border-blue-500">
              <Image
                src={product.image}
                width={300}
                height={300}
                alt={product.name}
                className="mx-auto transition-transform duration-300 group-hover:scale-105 object-cover"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center bg-black/90 text-white rounded-full p-1 pr-3 space-x-2 backdrop-blur">
                <span className="text-sm font-medium pl-3">{product.name}</span>
                <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>








      <footer className="mt-20 border-t border-gray-800 pt-10 text-sm text-gray-400">
        <div className="flex justify-between h-[300px]">
          <div className="space-y-3 grid grid-cols-2 ml-24 gap-12">
            <div className="flex items-start gap-2">
              <img className="h-12 w-12 rounded-lg" src="/logo.png" />
              <span className="font-bold text-white text-xl">ACME STORE</span>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-xl py-20">Home</a></li>
              <li><a href="#" className="hover:underline text-xl py-20">About</a></li>
              <li><a href="#" className="hover:underline text-xl">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline text-xl">Shipping & Return Policy</a></li>
              <li><a href="#" className="hover:underline text-xl">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-xl">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-800 pt-6 flex justify-start ml-24 text-xl">
          © 2023-2025 ACME, Inc. All rights reserved. &nbsp; | &nbsp;
          <a href="#" className="hover:underline">View the source</a>
        </div>
      </footer>
    </div>
  );
}