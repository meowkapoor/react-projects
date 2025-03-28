import { useState } from "react";
import Colorbtn from "../components/Colorbtn";

function App() {

  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-3 py-2">
          <button 
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "red"}}>
            red
          </button>
          <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "green"}}>
            green
          </button>
          <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "blue"}}>
            blue
          </button>
          <button 
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "black"}}>
            black
          </button>
          <Colorbtn color="yellow" setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App;
