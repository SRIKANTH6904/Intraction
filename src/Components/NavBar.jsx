import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-slate-900 text-slate-100 px-6 py-4 flex justify-between items-center ">
        
        <div className="text-sky-400 font-extrabold text-2xl tracking-wide">
          Logo
        </div>
        <div className="flex gap-8">
          <Link to="/"className="text-slate-200 font-medium hover:text-sky-400">Home</Link>
         <Link to="Intraction" className="text-slate-200 font-medium hover:text-sky-400 ">Intraction</Link>
         <Link to="/Function" className="text-slate-200 font-medium hover:text-sky-400 w-">Function_Process</Link>
        </div>
        
        </div>
    </>
  )
}

export default NavBar;
