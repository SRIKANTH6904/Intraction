import { useState } from "react"


const LimitedCounter = () => {

    const[count,setCount]=useState(0)

    const increment =()=>{
        if (count < 10){
            setCount(count + 1);
        }
    }

    const decrement =()=>{
       if (count > 0){
        setCount(count-1);
       }
    }
  return (
   <>
    <div className="p-8 max-w-md mx-auto text-center">
      <div className="bg-gray-100 rounded-lg p-8 mb-6">
        <div className="text-6xl font-bold text-gray-800">{count}</div>
        <div className="text-sm text-gray-500 mt-2">Range: 0-10</div>
      </div>
      
      <div className="flex gap-4 justify-center">
        <button
          onClick={decrement}
          disabled={count === 0}
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-xl font-semibold"
        >
          -1
        </button>
        
        <button
          onClick={increment}
          disabled={count === 10}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-xl font-semibold"
        >
          +1
        </button>
      </div>
    </div>
   </>
  )
}

export default LimitedCounter
