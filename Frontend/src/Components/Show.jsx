import React, { useEffect, useState } from "react";
import axios from "axios";

function Show() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const feedback = await axios.get(
          `${import.meta.env.VITE_API_Backend_URL}/feedback/show`
        );
        setData(feedback.data);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 px-6 py-2">
      <h1 className="text-white text-3xl font-serif border-b-2">Show Data</h1>
      <div className="w-[100%] h-[100%] grid grid-cols-4 grid-rows-4 gap-4 rounded-md bg-white shadow-2xl p-4">
        {data.map((item) => (
          <div key={item._id} className="border-2 p-2 rounded-md">
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Message: {item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Show;
