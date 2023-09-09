"use client";

import React from "react";

import { useAppContext } from "@/context/AppContext";

export const Counter = () => {
  const [count, setCount] = useAppContext();

  return (
    <div className="p-5 border border-violet-700 border-opacity-100 rounded-lg">
      <h3>Counter Component with React Context</h3>
      <div className="flex p-2 w-full justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <span className="text-white font-bold py-2 px-4 rounded">{count}</span>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};
