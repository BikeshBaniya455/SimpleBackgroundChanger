import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" w-screen h-screen m-0 p-0 duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-black">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>

            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>

            <button
              onClick={() => {
                setColor("tomato");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "tomato" }}
            >
              tomato
            </button>

            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => {
                setColor("purple");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>

            <button
              onClick={() => {
                setColor("teal");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "teal" }}
            >
              teal
            </button>

            <button
              onClick={() => {
                setColor("white");
              }}
              className="px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              white
            </button>
            <button
              onClick={() => {
                setColor("brown");
              }}
              className="outline-black px-4 py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "brown" }}
            >
              brown
            </button>

            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-black px-4 py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-black px-4 py-1 rounded-full text-black shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
