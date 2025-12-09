import { useState } from "react";

export default function Daalgvruud() {
  const [data, setData] = useState([]);
  const [sumState, setSumState] = useState(0);
  const [maxState, setMaxState] = useState(0);
  const [avgState, setAvgState] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState(""); 

  const sum = (a, b) => a + b;
  const max = (a, b, c) => {
    if (a > b) {
      if (c > a) return c;
      return a;
    } else {
      if (c > b) return c;
      return b;
    }
  };
  const average = (a, b, c) => (a + b + c) / 3;

  const handleAddData = () => {
    if (input === "") return;

    if (data.length >= 3) {
      setError("Max is 3 numbers");
      return;
    }

    setData((prev) => [...prev, Number(input)]);
    setInput("");
    setError(""); 
  };

  const handleSubmit = () => {
    if (data.length < 3) {
      setError("Max is 3 numebrs");
      return;
    }

    const [a, b, c] = data;
    setSumState(sum(a, b));
    setMaxState(max(a, b, c));
    setAvgState(average(a, b, c));
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4">
        <h1 className="text-xl font-bold text-center text-black">Calculate</h1>

        <div className="flex gap-2">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded px-3 py-2 text-black"
            placeholder="Enter a number"
            disabled={data.length >= 3}
          />
          <button
            onClick={handleAddData}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-500"
            disabled={data.length >= 3}
          >
            Add
          </button>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
        >
          Submit
        </button>

        <div className="bg-gray-50 border p-3 rounded text-sm text-black">
          <p>Data: <b>{JSON.stringify(data)}</b></p>
        </div>

        <div className="space-y-1">
          <p className="text-black">Sum: <b>{sumState}</b></p>
          <p className="text-black">Max: <b>{maxState}</b></p>
          <p className="text-black">Average: <b>{avgState}</b></p>
        </div>
      </div>
    </div>
  );
}
