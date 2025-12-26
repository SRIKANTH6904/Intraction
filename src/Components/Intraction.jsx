import GreetingSwitcher from "./GreetingSwitcher"
import LimitedCounter from "./LimitedCounter"
import ToggleMessage from "./ToggleMessage"
import UserProfile from "./UserProfile"

const Intraction = () => {

     let count = 0

     const clickdate =()=>{

        count++


        console.log(count)
     }
     const submitdata = (s)=>{

      console.log('Event object',)
   
         s.preventDefault(s)
         
        count=count+2

  


      alert(count)

     }

     const dataget=(sri)=>{ 

      console.log(sri);

      alert(sri.target.value)

     }

    const mousehover=()=>{
       
      count=count+1

      alert(count)
  
    }

    
  return (
    <>
    <div className="bg-green-600 flex-col h-30  flex justify-center items-center">
      <div className=" text-center font-extrabold  text-5xl rounded">
        Intraction Process {count}
      </div>
      <div>
        <button onClick={clickdate} className="bg-white w-20 mt-3 font-bold rounded ">Click</button>
      </div>
    </div>
    
    <section className="mt-3">
      <div className="bg-amber-300  flex-col h-30  flex justify-center items-center">
      <div className=" text-center font-extrabold  text-5xl rounded">
        onsubmit Process 
      </div>

      <form className="mt-3" onSubmit={submitdata}>
        <input  onChange={dataget} type="text"  placeholder="Enter Your Name" className="bg-white  p-1 w-50 rounded "/>
        <input type="submit" value="Register" className="bg-white p-1 ml-4 w-30 rounded"/>

      </form>
      </div>
    </section>

    <section className="mt-3"> 
     <div className="bg-red-500  flex-col h-30 flex justify-center items-center">
      <div className=" text-center font-extrabold  text-5xl rounded ">
        onmousehover Process 
      </div>
      <div>
          <button className="bg-white p-1 w-20 rounded mt-3 font-bold hover:bg-amber-300 text-black" onMouseEnter={mousehover}>Click Me</button>
        </div>
      </div>
    </section>

    <ToggleMessage/> 
    <LimitedCounter/>
    <GreetingSwitcher/>
    <UserProfile/>
    </>
  )
}

export default Intraction;
