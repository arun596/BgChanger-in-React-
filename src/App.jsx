import {useState} from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-800"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 hover:cursor-pointer rounded-full" style={{backgroundColor: "red"}}>Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 hover:cursor-pointer rounded-full" style={{backgroundColor: "Green"}}>Green</button>

          <button onClick={() => setColor("yellow")} className="outline-none px-4 hover:cursor-pointer rounded-full" style={{backgroundColor: "yellow"}}>Yellow</button>

          <button onClick={() => setColor("purple")} className="outline-none px-4 hover:cursor-pointer rounded-full" style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
