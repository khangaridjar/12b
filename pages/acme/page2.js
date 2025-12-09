import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Checkout() {
  const [email, setEmail] = useState("");
  const [emailNews, setEmailNews] = useState(false);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const router = useRouter();



  return (
    
    <div className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-2 min-h-screen">
        <div className="p-16 pl-32">
          <div className="mb-12">
          <img className="h-12 w-12 rounded-lg" src="/logo.png" onClick={() => router.push("/acme/acme")}/>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-12">
            <span className="text-white">Information</span>
            <span></span>
            <span>Shipping</span>
            <span></span>
            <span>Payment</span>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <div className="flex items-center gap-3 mt-4">
              <input
                type="checkbox"
                id="emailNews"
                checked={emailNews}
                onChange={(e) => setEmailNews(e.target.checked)}
                className="w-4 h-4 rounded border-gray-700 bg-transparent"
              />
              <label className="text-sm">
                Email me with news and offers
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Shipping address</h2>
            
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Country/Region</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="United States">United States</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                
              </button>  
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              >
                <option value="" className="text-gray-500">State</option>
              </select>
              <input
                type="text"
                placeholder="ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="saveInfo"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className="w-4 h-4 rounded border-gray-700 bg-transparent"
              />
              <label htmlFor="saveInfo" className="text-sm">
                Save this information for next time
              </label>
            </div>
            <div className="w-full flex justify-end">
              <button className="w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors">
              Continue to shipping
            </button>
            </div>
            
          </div>
        </div>

        <div className="bg-neutral-900 p-16 border-l border-gray-800">
          <div className="flex items-start gap-4 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-black rounded-lg border border-gray-700 flex items-center justify-center">
                <img src="/tshirt.png" alt="T-Shirt" className="w-16 h-16 object-cover" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                1
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Acme Circles T-Shirt</h3>
              <p className="text-sm text-gray-400">Black / S</p>
            </div>
            <div className="font-medium">$15.00</div>
          </div>

          <div className="border-t border-gray-800 my-6"></div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-400">Subtotal</span>
            <span>$15.00</span>
          </div>

          <div className="flex justify-between mb-6">
            <span className="text-gray-400">Shipping</span>
            <span className="text-gray-400 text-sm">Calculated at next step</span>
          </div>

          <div className="border-t border-gray-800 my-6"></div>

          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Total</span>
            <div className="text-right">
              <span className="text-sm text-gray-400 mr-2">USD</span>
              <span className="text-2xl font-bold">$15.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}