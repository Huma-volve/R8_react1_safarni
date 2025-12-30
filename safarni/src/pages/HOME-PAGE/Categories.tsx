import { useState } from "react"


export default function Categories() {

    const [allCategories] =useState([

        { imgCategories : "/images/Frame 10154 (1).png" , nameCategories : "Flight"},
        { imgCategories : "/images/Frame 10154.png" , nameCategories : "Cars"},
        { imgCategories : "/images/Ellipse 25.png" , nameCategories : "Tours"},
        { imgCategories : "/images/Frame 10154 (2).png" , nameCategories : "Hotel"},
    ])

  return <>
  
  <div className="container p-5 py-10">
    <h2 className=" text-[20px] md:text-[25px] py-2">Categories</h2>
    <div className="grid grid-cols-4 ">

        {allCategories.map((item , idx )=>{
            return  <div key={idx} className="card p-2 flex flex-col justify-center items-center gap-3">
            <img className="" src={item.imgCategories} alt="" />
            <h3 className=" text-sm md:text-2xl font-bold text-[#1a56db]">{item.nameCategories}</h3>
          </div>
        })}
          
      

    </div>
  </div>
  
  </>
}
