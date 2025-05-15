"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const weightData = [
  { date: "May 1", weight: 185, target: 180 },
  { date: "May 8", weight: 183, target: 179 },
  { date: "May 15", weight: 181, target: 178 },
  { date: "May 22", weight: 179, target: 177 },
  { date: "May 29", weight: 178, target: 176 },
  { date: "Jun 5", weight: 176, target: 175 },
  { date: "Jun 12", weight: 175, target: 174 },
  { date: "Jun 19", weight: 173, target: 173 },
  { date: "Jun 26", weight: 172, target: 172 },
  { date: "Jul 3", weight: 171, target: 171 },
];

interface WeightChartProps {
  detailed?: boolean;
}

export function WeightChart({ detailed = false }: WeightChartProps) {
  const [timeRange, setTimeRange] = useState("3m");

  return (
    <div className="space-y-4">
      {detailed && (
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border border-neutral-300"
            >
              Day
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border border-neutral-300"
            >
              Week
            </Button>
            <Button
              variant="default"
              size="sm"
              className="h-8 border bg-black text-white"
            >
              Month
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border border-neutral-300"
            >
              Year
            </Button>
          </div>

          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] h-8 border border-neutral-300">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-neutral-300">
              <SelectItem value="1m">Last month</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={weightData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis
              domain={["dataMin - 5", "dataMax + 5"]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            {detailed && <Legend />}
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Current Weight"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Target Weight"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {detailed && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-100 p-4 rounded-lg flex justify-center flex-col items-center py-6">
            <p className="text-sm text-slate-800 font-medium">Starting Weight</p>
            <p className="text-2xl font-bold">185 lbs</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg flex justify-center flex-col items-center py-6">
            <p className="text-sm text-slate-800 font-medium">Current Weight</p>
            <p className="text-2xl font-bold">171 lbs</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg flex justify-center flex-col items-center py-6">
            <p className="text-sm text-slate-800 font-medium">Weight Lost</p>
            <p className="text-2xl font-bold text-[#40BD3E]">14 lbs</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg flex justify-center flex-col items-center py-6">
            <p className="text-sm text-slate-800 font-medium">Target Weight</p>
            <p className="text-2xl font-bold">165 lbs</p>
          </div>
        </div>
      )}
    </div>
  );
}
