import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import {ChevronLeft, Clock, CalendarRange} from "lucide-react"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { MapPin } from 'lucide-react';

const CarDetails = () => {
  return (
    <div className="p-7 ">
        <Button className="rounded-full bg-gray-100 ml-2 w-10 h-10"  >
            <ChevronLeft />
        </Button>

        <div className="flex space-x-5 flex-col lg:flex-row">
            {/* car pic 3d */}
            <div>

            </div>
            {/* car info */}
            <div className="flex gap-3 space-y-6">
                <h1>S 500 Sedan</h1>
                <div className="flex flex-row ">
                    <div className="shadow ">
                        <h2>power</h2>
                        <p>429 hp @ 6,100 rpm</p>
                    </div>
                    <div className="shadow ">
                        <h2>Max Speed</h2>
                        <p>280 km/h</p>
                    </div>
                    <div className="shadow ">
                        <h2>Acceleration</h2>
                        <p>4.9 sec 0-60 mph</p>
                    </div>
                </div>
                <div>
                    <h1> plan</h1>
                    <div>
                        <Card
                            className={cn(
                                "group relative flex cursor-pointer items-stretch overflow-hidden transition-all duration-200 border-blue-500 ring-1 ring-blue-500" 
                            )}
                            >
                            <div
                                className={cn(
                                "flex w-24 flex-col items-center justify-center gap-2 p-4 transition-colors bg-blue-50"
                                )}
                            >
                                <Clock className={cn("h-6 w-6 text-blue-600" )} />
                                <span className={cn("text-2xl font-bold text-blue-700")}>${213}</span>
                            </div>

                            <div className="flex flex-1 flex-col justify-center px-6 py-4">
                                <h3 className={cn("text-xl font-bold transition-colors text-slate-900")}>
                                {"Asdasd"}
                                </h3>
                                <p className="mt-1 text-slate-500">asdasdads</p>
                            </div>
                        </Card>
                        <Card
                            className={cn(
                                "group relative flex cursor-pointer items-stretch overflow-hidden transition-all duration-200 border-blue-500 ring-1 ring-blue-500" 
                            )}
                            >
                            <div
                                className={cn(
                                "flex w-24 flex-col items-center justify-center gap-2 p-4 transition-colors bg-blue-50"
                                )}
                            >
                                <CalendarRange className={cn("h-6 w-6 text-blue-600" )} />
                                <span className={cn("text-2xl font-bold text-blue-700")}>${213}</span>
                            </div>

                            <div className="flex flex-1 flex-col justify-center px-6 py-4">
                                <h3 className={cn("text-xl font-bold transition-colors text-slate-900")}>
                                {"Asdasd"}
                                </h3>
                                <p className="mt-1 text-slate-500">asdasdads</p>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    <h1> Location</h1>
                        <InputGroup>
                            <InputGroupInput placeholder="Search..." />
                            <InputGroupAddon>
                            <MapPin/>
                            </InputGroupAddon>
                        </InputGroup>
                </div>
                <Button className="flex-1 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold h-14 rounded-xl text-lg hover:scale-105">
                    Pick UP
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CarDetails
