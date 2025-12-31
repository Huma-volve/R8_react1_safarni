import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Slider, Box, Typography } from "@mui/material";

// البيانات المبدئية: كل كائن يمثل سعر وعدد الرحلات
const initialData = [
  { price: 0, tours: 2 },
  { price: 1000, tours: 5 },
  { price: 2000, tours: 8 },
  { price: 3000, tours: 12 },
  { price: 4000, tours: 7 },
  { price: 5000, tours: 10 },
  { price: 6000, tours: 5 },
  { price: 7000, tours: 3 },
  { price: 8000, tours: 1 },
];

export default function BudgetRangeChart() {
  // state لتحديد الحد الأدنى والأقصى للأسعار
  const [range, setRange] = useState([0, 8500]);

  // فلترة البيانات حسب الـ range
  const filteredData = initialData.filter(
    (item) => item.price >= range[0] && item.price <= range[1]
  );

  // دالة تغيير الـ Slider
const handleChange = (event: Event, newValue: number | number[]) => {
  setRange(newValue as number[]);
};


  return <>
  
  <div className="container w-full border-b border-b-gray-400 p-4">

    {/* العنوان */}
      <Typography variant="h6" sx={{
        fontWeight : "bold"
      }}  gutterBottom>
        Budget Range 
      </Typography>

    <div className="p-4 w-full   rounded-lg  m-auto">
      

      {/* AreaChart */}
      <ResponsiveContainer width="100%"  height={150} >
        <AreaChart
          data={filteredData}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis dataKey="price" hide/>
          <YAxis hide/>
          <Tooltip formatter={(value) => [`${value} Tours`, "Tours"]} />
          <Area
            type="monotone"
            dataKey="tours"
            stroke="#c1dcfd"
            fill="#c1dcfd"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Range Slider */}
      <Box sx={{ px: 2, mt: 3 }}>
        <Slider
          value={range}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={8500}
          step={100}
        />
        <Box className="flex justify-between text-sm mt-1">
          <h6 className="text-2xl">Min <span className="text-blue-600">{range[0]}$</span></h6>
          <h6 className="text-2xl">Max <span className="text-blue-600">{range[1]}$</span></h6>
        </Box>
      </Box>
    </div>
  </div>
  
  
  </>
}
