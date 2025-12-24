import { useEffect, useState } from "react"
import { data } from "react-router-dom";

 const ProfileCarts =() =>{ 
    

    const [profilecards,setProfileCards]= useState([{ 
      id: 1,
      image:"portrait.avif",
      firstName: "Emily",
      lastName: "Johnson",
      age: 29,
      gender: "Male",
      email: "johnson@gamil.com",
      phone: "+81 965-431-3024",
      birthDate: "1996-5-30",
       },
    { id: 2,
      image:"portrait.avif",
      firstName: "Michael",
      lastName: "Williams",
      age: 25,
      gender: "Male",
      email: "Michael@gamil.com",
      phone: "+81 965-431-3024",
      birthDate: "2000-6-30",
       },
       { id: 3,
      image:"portrait.avif",
      firstName: "James",
      lastName: "Davis",
      age: 32,
      gender: "Male",
      email: "james@gamil.com",
      phone: "+81 965-431-3024",
      birthDate: "1993-2-18",
       },])
        const showProfiles =  async () =>{

        const ref = await fetch ("https://dummyjson.com/users") ;

        const datachange = await ref.json()

        // console.log(datachange.)

         setProfileCards(datachange.users)
       
        //  useEffect (()=>{
        //   setProfileCards(datachange.users.)
        //  },[])

       }
    return(
        <>
      <div className="bg-gray-700 h-full p-5 flex justify-between gap-5  flex-wrap ">
        
  
  {profilecards.map((e) => (
    <div
      key={e.id}
      className="bg-white w-70 h-full p-2 rounded  " >
      <img  src={e.image}/>
      <h1>First Name: {e.firstName}</h1>
      <p>Last Name: {e.lastName}</p>
      <p>Age: {e.age}</p>
      <p>Gender: {e.gender}</p>
      <p>Email: {e.email}</p>
      <p>Phone: {e.phone}</p>
      <p>Birth Date: {e.birthDate}</p>
      <button className="bg-red-600 w-25 p-1 mt-2 ml-7 rounded">ContactUs</button>
    </div>
  ))}

  <button  onClick={showProfiles} className="bg-amber-50 text-black h-7 w-35 flax justify-center  items-center flex-col mt-50 mr-25 hover:bg-red-600 font-bold" >View More</button>

</div>


        </>
    )

 }

 export default ProfileCarts