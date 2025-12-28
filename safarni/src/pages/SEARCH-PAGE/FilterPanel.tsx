import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
                return <li className=" p-2 rounded-2xl border border-[#ebf5ff] text-gray-500 cursor-pointer hover:bg-[#ebf5ff] hover:text-[#1e429f]" key={idx}>{item}</li>
            })}

            
           
        </ul>
        </div>



        
    </div>
  
  
  </>
}
