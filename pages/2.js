import { useEffect, useState } from "react";

export default function Secondwebsite() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-green-50">
      <header className="w-full h-24 bg-green-200 flex items-center justify-between px-12 shadow-md">
        <div className="text-3xl font-bold text-green-800">Khangarid Homework API</div>
        <nav className="flex space-x-8 text-green-700">
          <div className="hover:underline cursor-pointer">Home</div>
          <div className="hover:underline cursor-pointer">Objects</div>
          <div className="hover:underline cursor-pointer">About</div>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start p-8 space-y-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-green-800 mb-3">API Objects</h1>
          <p className="text-green-700 mb-6">
            Data pulled directly from restful-api.dev.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s"
            alt="API Data"
            className="mx-auto w-40 mb-8"
          />
        </div>

        <div className="w-full max-w-5xl bg-green-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">API Data</h2>
          {items.length === 0 ? (
            <p className="text-green-700">Loading...</p>
          ) : (
            <ul className="grid grid-cols-2 gap-6 text-green-700">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <p className="font-semibold text-lg">{item.name}</p>
                  {item.data && (
                    <div className="text-sm mt-2">
                      {Object.entries(item.data).map(([key, value]) => (
                        <p key={key}>
                          <span className="font-medium">{key}:</span> {String(value)}
                        </p>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="w-full h-20 bg-green-200 flex items-center justify-center text-green-700 mt-auto shadow-inner">
        @address Ulaanbaatar, Mongolia
      </footer>
    </div>
  );
}
