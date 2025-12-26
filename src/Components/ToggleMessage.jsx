import { useState } from "react";

const ToggleMessahe = ()=>{
        
      const[isvisible,setIsVisible]=useState(false)

    return(
        <>
         <div className="p-8 max-w-md mx-auto">
         <button onClick={()=>setIsVisible(!isvisible)} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            {isvisible? 'Hide Details':'Show Details'}</button>

            {isvisible &&(
                <p className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800">
                  These are the details.
                  </p>
            )}         
       </div>        
        </>
    )

}

export default ToggleMessahe;