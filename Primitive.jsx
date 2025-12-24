import { useState } from "react";

const Primotive=()=>{


    const[count,setCount]=useState(1);
    const[name,setName]=useState("srikanth");
    const[isActive,setIsActive]=useState(true);
    const[data,setData]=useState(undefined);
    const[value,setValue]=useState(null);

    const increaseCount=()=>setCount(count+1);
    const changeName=()=>setName("React Developer");
    const toggleStatus=()=>setIsActive(prev =>!prev);
    const setdefined=()=>setData("Now Defined");
    const removeNull=()=>setValue("Not Null")
     
   
    return(
        <>
        <div className="min-h-screen bg-gray-100 p-6 space-y-6">

  <div className="text-center">
    <h1 className="text-3xl font-bold text-blue-700">
      Single Component – All Primitive Types
    </h1>
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-lg font-medium">
      Number: <span className="font-bold">{count}</span>
    </p>
    <button
      onClick={increaseCount}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Increase
    </button>
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-lg font-medium">
      String: <span className="font-bold">{name}</span>
    </p>
    <button
      onClick={changeName}
      className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Change Name
    </button>
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-lg font-medium">
      Boolean:
      <span className="font-bold ml-1">
        {isActive ? "true" : "false"}
      </span>
    </p>
    <button
      onClick={toggleStatus}
      className="mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      Toggle Status
    </button>
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-lg font-medium">
      Undefined: <span className="font-bold">{String(data)}</span>
    </p>
    <button
      onClick={setdefined}
      className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
    >
      Set Value
    </button>
  </div>

  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-lg font-medium">
      Null: <span className="font-bold">{String(value)}</span>
    </p>
    <button
      onClick={removeNull}
      className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Remove Null
    </button>
  </div>

</div>


        </>
    )
}

export default Primotive;