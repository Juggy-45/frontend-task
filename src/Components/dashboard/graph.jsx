import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
import { CiMenuKebab } from "react-icons/ci";
import { BiTrendingUp } from "react-icons/bi";
import "./index.css";
  
  const data = [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 100 },
    { month: "Mar", value: 200 },
    { month: "Apr", value: 200 },
    { month: "May", value: 230 },
    { month: "Jun", value: 260 },
    { month: "Jul", value: 290 },
    { month: "Aug", value: 300 },
    { month: "Sep", value: 200 },
    { month: "Oct", value: 230 },
    { month: "Nov", value: 290 },
    { month: "Dec", value: 400 },
  ];

function graph() {
  return (
    <div className="graph">
{/* Graph Section */}
<div className="flex justify-between pl-8 pr-8 pt-4 pb-4">
  <h3 className="stats-heading"> USER STATISTICS </h3>
  <CiMenuKebab />
</div>
<hr
  style={{ borderTop: "1px solid #898989", margin: "0px 0px 10px 0" }}
/>
<AreaChart
  width={650}
  height={300}
  data={data}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <XAxis
    dataKey="month"
    style={{ fontSize: "8px", fontFamily: "Montserrat" }}
  />
  <YAxis
    domain={[0, 500]}
    ticks={[0, 100, 200, 300, 400, 500]}
    style={{ fontSize: "8px", fontFamily: "Montserrat" }}
    axisLine={false}
    tickLine={false} 
  />
  <CartesianGrid stroke="#D3D3D3" vertical={false} />
  <Tooltip />
  <Area
    type="linear"
    dataKey="value"
    stroke="#6DBCDB"
    strokeWidth={2}
    fill="#E2F2F8"
    activeDot={{ r: 8 }}
    dot={{
      r: 4,
      stroke: "#6DBCDB",
      fill: "#FFFFFF",
    }}
  />
</AreaChart>
<div className="flex justify-around pl-8 pr-8 pt-4 pb-4">
  <div>
    <h3 className="legend-heading"> Weekly Users </h3>
    <p className="legend-count">8,210</p>
    </div>
    <div>
    <h3 className="legend-heading"> Monthly Users </h3>
    <p className="legend-count">241,894</p>
    </div>
    <div>
    <h3 className="legend-heading"> Trend </h3>
    <BiTrendingUp />
    </div>
</div>
</div>
  )
}

export default graph

