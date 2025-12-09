import { useEffect, useState } from "react";

export default function Fourthwebsite() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    year: "",
    price: "",
    color: "",
    capacity: "",
    model: "",
  });

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addItem = async () => {
    if (!form.name) return;

    try {
      const res = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          data: {
            year: form.year,
            price: form.price,
            color: form.color,
            capacity: form.capacity,
            model: form.model,
          },
        }),
      });

      const createdItem = await res.json();
      setItems((prev) => [...prev, createdItem]);
      setForm({
        name: "",
        year: "",
        price: "",
        color: "",
        capacity: "",
        model: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white grid grid-cols-6 gap-6 p-10">
      <div className="col-span-6 bg-gray-100 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Add Item</h2>


        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Нэр</label>
            <input
              name="name"
              type="text"
              placeholder="Нэр оруулна уу"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-lg w-full text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Жил</label>
            <input
              name="year"
              type="text"
              placeholder="Жил оруулна уу"
              value={form.year}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-lg w-full text-black"
              inputMode="numeric"
          />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Үнэ</label>
            <input
              name="price"
              type="text"
              placeholder="Үнэ оруулна уу"
              value={form.price}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-lg w-full text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Өнгө</label>
            <input
              name="color"
              type="text"
              placeholder="Өнгө оруулна уу"
              value={form.color}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-lg w-full text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Багтаамж</label>
            <input
              name="capacity"
              type="text"
              placeholder="Жишээ: 128 GB"
              value={form.capacity}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-lg w-full text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Модель</label>
            <input
              name="model"
              type="text"
              placeholder="Модель оруулна уу"
              value={form.model}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-lg w-full text-black"
            />
          </div>
        </div>

        <button
          onClick={addItem}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Нэмэх
        </button>
      </div>

      {items.length === 0 ? (
        <p className="col-span-6 text-black">Loading...</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="w-64 h-auto bg-gray-200 rounded-lg p-4 flex flex-col text-black"
          >
            <p className="text-lg font-bold mb-2">{item.name}</p>
            <div className="text-sm space-y-1">
              <p>Жил: {item.data?.year || "Мэдээлэл байхгүй"}</p>
              <p>Үнэ: {item.data?.price || "Мэдээлэл байхгүй"}</p>
              <p>Өнгө: {item.data?.color || "Мэдээлэл байхгүй"}</p>
              <p>Багтаамж: {item.data?.capacity || "Мэдээлэл байхгүй"}</p>
              <p>Модель: {item.data?.model || "Мэдээлэл байхгүй"}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
