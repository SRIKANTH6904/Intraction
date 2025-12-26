import { useState } from "react";

const UserProfile = () => {

 const [user, setUser] = useState({ name: "Guest", city: "Unknown" });
  
 const setNameToAjay = () => {
    setUser({ ...user, name: "srikanth" });
  };

  const setCityToChennai = () => {
    setUser({ ...user, city: "Chennai" });
  };

  const reset = () => {
    setUser({ name: "Guest", city: "Unknown" });
  };
 
 return (
    <>
       <div className="p-8 max-w-md mx-auto">
      <div className="bg-linear-to-br from-blue-50 to-indigo-100 rounded-lg p-6 mb-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
        <div className="space-y-2">
          <div className="text-lg">
            <span className="font-semibold text-gray-700">Name:</span>{" "}
            <span className="text-gray-900">{user.name}</span>
          </div>
          <div className="text-lg">
            <span className="font-semibold text-gray-700">City:</span>{" "}
            <span className="text-gray-900">{user.city}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <button
          onClick={setNameToAjay}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Set Name to srikanth
        </button>
        
        <button
          onClick={setCityToChennai}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Set City to Chennai
        </button>
        
        <button
          onClick={reset}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Reset
        </button>
      </div>
    </div>
    </>
  )
}

export default UserProfile
