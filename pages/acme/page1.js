import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {useRouter} from "next/navigation"; 


const products = [
  { name: "Acme Circles T-Shirt", price: "$20.00 USD", image: "/tshirt.png" },
  { name: "Acme Drawstring Bag", price: "$12.00 USD", image: "/bag.png" },
  { name: "Acme Cup", price: "$15.00 USD", image: "/blackcup.png" },
  { name: "Acme Hoodie", price: "$35.00 USD", image: "/hoodie.png" },
  { name: "Acme White T-Shirt", price: "$18.00 USD", image: "/whitetshirt.png" },
  { name: "Acme Beanie", price: "$10.00 USD", image: "/beanie.png" },
  { name: "Acme White T-Shirt", price: "$18.00 USD", image: "/cup2.png" },

];

export default function Home() {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const colors = ["Black", "White", "Blue"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

    const isAddToCartEnabled = selectedColor && selectedSize;

    return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 flex flex-col">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4" onClick={() => router.push("/acme/acme")}>
          <img className="h-12 w-12 rounded-lg" src="/logo.png"/>
          <span className="font-bold text-lg">ACME STORE</span>
          <nav className="ml-6 space-x-4">
            <a href="#" className="hover:underline">All</a>
            <a href="#" className="hover:underline">Shirts</a>
            <a href="#" className="hover:underline">Stickers</a>
          </nav>
        </div>

        <div className="relative">
          <input type="text" placeholder="Search for products..." className="rounded px-3 py-1 text-neutral-300" />
        </div>

        <button className="ml-4 p-2 border border-white rounded">🛒</button>
      </header>

      




      <main className="grid grid-cols-3 gap-6 flex-grow bg-black h-[900px]">
        <div className="col-span-2 bg-black p-4 rounded">
          <div className="relative">
            <Image src="/tshirt.png" width={700} height={700} alt="T-Shirt" className="mx-auto"/>
          </div>
        </div>

        <div className="flex flex-col gap-6">
            <p className="text-7xl mt-10">Acme Circles T-Shirt</p>
            <div className="h-12 w-24 flex justify-center items-center bg-blue-600 rounded-full">$20.00USD</div>
            <div className="border border-b w-full border-gray-300 h-[1/2px]"/>
            <p className="text-2xl">COLOR</p>
            <div className="flex gap-2">
                {colors.map((color) => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-10 w-20 flex justify-center items-center rounded-3xl transition-all ${
                      selectedColor === color 
                        ? ' border-2 border-blue-400' 
                        : 'bg-neutral-900 border-2 border-transparent hover:border-neutral-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
            </div>
            <p className="text-2xl">SIZE</p>
             <div className="flex gap-2">
                {sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 flex justify-center items-center rounded-3xl transition-all ${
                      size === "XXXL" ? "w-20" : "w-16"
                    } ${
                      selectedSize === size 
                        ? 'border-2 border-blue-400' 
                        : 'bg-neutral-900 border-2 border-transparent hover:border-neutral-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
            </div>
            <p className="text-neutral-500">60% combed ringspun cotton/40% polyester jersey tee.</p>
            <button 
              onClick={() => router.push("/acme/page2")}
              disabled={!isAddToCartEnabled}
              className={`h-18 w-full rounded-full transition-all ${
                isAddToCartEnabled 
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' 
                  : 'bg-neutral-700 opacity-50'
              }`}
            >
              Add To Cart
            </button>
        </div>
      </main>

     



      <p className="mt-10 text-3xl">Related Products</p>
      <Marquee autoFill play={false}>
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
              <img className="h-12 w-12 rounded-lg" src="/logo.png"/>
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