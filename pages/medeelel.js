import { useState } from "react";

export default function Medeelel() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [lastname, setLastname] = useState("");
  const [data, setData] = useState([
    
  ]);
  const handlesubmit = () => {
    setData([
      ...data,
      {
        name: name,
        age: age,
        height: height,
        weight: weight,
        lastname: lastname,
      },
    ]);
    setName("");
    setAge("");
    setHeight(""), setWeight(""), setLastname("");
  };

  console.log(data);

  return (
    <div className="w-full h-screen bg-black flex  ml-10 mt-5 gap-20">
      <div className="flex flex-col gap-4">
        <input
          type="name"
          placeholder="Enter name..."
          className="h-12 w-36 bg-gray-500 text-white rounded-lg pl-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="age"
          placeholder="Enter age..."
          className="h-12 w-36 bg-gray-500 text-white rounded-lg pl-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="height"
          placeholder="Enter height..."
          className="h-12 w-36 bg-gray-500 text-white rounded-lg pl-2"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="weight"
          placeholder="Enter weight..."
          className="h-12 w-36 bg-gray-500 text-white rounded-lg pl-2"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="lastname"
          placeholder="Enter last name..."
          className="h-12 w-36 bg-gray-500 text-white rounded-lg pl-2"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <button
          onClick={handlesubmit}
          className="w-32 h-12 bg-blue-400 text-white"
        >
          SUBMIT
        </button>
      </div>

      <div className="flex flex-col justify-start text-white text-lg">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <p>name:{item.name}</p>
              <p>lastname:{item.lastname}</p>
              <p>age:{item.age}</p>
              <p>height:{item.height}</p>
              <p>weight:{item.weight}</p>
            </div>
          ))
        ) : (
          <p>Submit info first</p>
        )}
      </div>
    </div>
  );
}
