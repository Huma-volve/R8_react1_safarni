import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HikingIcon from '@mui/icons-material/Hiking';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { SearchIcon } from "lucide-react";
import GradeIcon from "@mui/icons-material/Grade"
import BudgetRange from "./BudgetRange";

export default function FilterPanel() {
  return <>
  
    <div className="container m-auto p-6">

         {/* Back Icon */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer  border border-gray-300">
          <ArrowBackIosNewIcon fontSize="small" />
        </button>

        <div className=" p-4 flex justify-center flex-col  border-b border-gray-400 pb-7">
            
        <h2 className="text-[20px] font-bold py-3">Sort By</h2>

        <ul className=" flex flex-wrap gap-2 justify-between w-[60%] ">

            {["Price (Low to High)", "Price (High to Low)", "Biggest Deals (Highest Saving)", "Most Reviewed", "Most Reviewed"].map((item , idx)=>{
                return <li key={idx} className=" p-2 rounded-2xl border border-[#ebf5ff] text-gray-500 cursor-pointer hover:bg-[#ebf5ff] hover:text-[#1e429f]">{item}</li>
            })}

        </ul>

        </div>
        

        

            <BudgetRange/>



        <section className=" p-3 border-b border-b-gray-400">
             <h2 className="text-[20px] font-bold py-3">Adventure Style <span className=" text-gray-400">Multi Select</span></h2>

             <ul className="flex flex-wrap gap-2 justify-between max-sm:w-full md:w-[80%] p-3 m-auto">
                {[{ lnk: "Adventure Travel", icon: <HikingIcon /> } , { lnk: "City Breaks", icon: <LocationCityIcon /> } ,
             { lnk: "Water Activity", icon: <PoolIcon /> } , { lnk: "Road Trips", icon: <DirectionsCarFilledIcon /> } ].map((item , idx)=>{
                return <li key={idx} className=" p-2 rounded-2xl border border-[#ebf5ff] text-gray-500 cursor-pointer hover:bg-[#ebf5ff] hover:text-[#1e429f]">{item.icon}{item.lnk}</li>
             })}
             </ul>
        </section>

        <section className="p-3 border-b border-b-gray-400">

             <div className="flex justify-between items-center">
                <h2 className="text-[20px] font-bold py-3">Location</h2>
                <AutoAwesomeMotionIcon sx={{
                    color : "blue" ,
                    cursor : "pointer"
                }}/>
             </div>


             {/* Search Input */}
        <div className="relative w-full my-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 rounded-[10px] border border-gray-300 outline-none focus:border-blue-500"
          />
        </div>

        </section>


        <section className=" p-3">
          <h2 className="text-[20px] font-bold py-3">Rating <span className=" text-gray-400 text-[20px]">Multi Select</span></h2>

          <ul className=" grid grid-cols-3 md:grid-cols-5 gap-4 ">
            {[{ rating : "1" , icon : <GradeIcon sx={{ color: "#FACC15" }} />} ,
             { rating : "2" , icon : <GradeIcon sx={{ color: "#FACC15" }} />} , 
             { rating : "3" , icon : <GradeIcon sx={{ color: "#FACC15" }} />} , 
             { rating : "4" , icon : <GradeIcon sx={{ color: "#FACC15" }} />} , 
            { rating : "5" , icon : <GradeIcon sx={{ color: "#FACC15" }} />}].map((item , idx)=>{
              return (
              
               <li key={idx} className="text-center p-2 py-3 text-2xl rounded-2xl border border-[#ebf5ff] text-gray-500 cursor-pointer hover:bg-[#ebf5ff] hover:text-[#1e429f]">{item.icon} {item.rating}</li>
              )
            })}
          </ul>

          <div className="btns grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
               <button className="text-center p-2 rounded-[10px]  text-blue-700 border border-blue-700  cursor-pointer">Clear All</button>
               <button className="text-center p-2 rounded-[10px] bg-blue-700 text-white  cursor-pointer">56 Tours Found</button>
          </div>
        </section>


        
    </div>
  
  
  </>
}
