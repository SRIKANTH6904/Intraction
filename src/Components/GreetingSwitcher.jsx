import { useState } from "react"

 
const GreetingSwitcher = () => {
   const [message, setMessage] = useState("Welcome");
    return (
    <>
    <div className="p-8 max-w-md mx-auto text-center">
      <div className="bg-green-400 text-white rounded-lg p-8 mb-6 ">
        <div className="text-4xl font-bold text-white">{message}</div>
      </div>
      
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setMessage("Welcome")}
          className="bg-red-600 text-black px-6 py-3 rounded-lg "
        >
          Welcome
        </button>
        
        <button
          onClick={() => setMessage("Good Morning")}
          className="bg-amber-600 text-white px-6 py-3 rounded-lg "
        >
          Good Morning
        </button>
        
        <button
          onClick={() => setMessage("Good Night")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg "
        >
          Good Night
        </button>
      </div>
    </div>
    </>
  )
}

export default GreetingSwitcher
