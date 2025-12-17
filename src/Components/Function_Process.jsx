import { useState } from "react"

const Function_Process=()=>{


    const [count,setcount]=useState(0)

    const clickData=()=>{

     setcount(count+1)
       

    }
    return(
        <>
        <div className="bg-sky-700 h-100  flex-col flex justify-center items-center mt-2">
      <div className=" text-center font-extrabold  text-5xl rounded">
        Function Process {count}
      </div>
       <div>
        <button  onClick={clickData}className="bg-white w-20 rounded mt-2 hover:bg-amber-300 font-bold">Click Me</button>
      </div>
      </div>
        </>
    )
}
export default Function_Process;