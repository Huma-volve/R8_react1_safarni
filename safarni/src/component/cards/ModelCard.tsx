import pic from "@/assets/jeep.png"
export default function ModelCard() {
  return (
    <div className=" p-8 space-y-2 border-none shadow-[0_0_15px_rgba(0,0,0,0.1),0_0_5px_rgba(0,0,0,0.05)] cursor-pointer flex items-center justify-center flex-col rounded-3xl transition-all hover:shadow-[0_0_35px_rgba(0,0,0,0.1),0_0_25px_rgba(0,0,0,0.05)]">
      <img src={pic} alt="logo" className="w-24 h-12 object-center" />
      <p className="font-poppins text-[20px]"> jepp</p>
      <p className="text-[#1C64F2] font-poppins text-[17px]">+32</p>
    </div>
  )
}
