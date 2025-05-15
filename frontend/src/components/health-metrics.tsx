"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Current Weight",
    value: "171 lbs",
    change: "-2.3 lbs",
    trend: "down",
  },
  {
    title: "BMI",
    value: "24.8",
    change: "-0.3",
    trend: "down",
  },
  {
    title: "Calorie Intake",
    value: "1,850",
    change: "-150",
    trend: "down",
  },
  {
    title: "Heart Rate",
    value: "68 bpm",
    change: "-3 bpm",
    trend: "down",
  },
];

export function HealthMetrics() {
  return (
    <>
      {metrics.map((metric) => (
        <Card className="border border-neutral-300" key={metric.title}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between space-y-0 px-5">
              <p className="text-lg font-semibold text-black">{metric.title}</p>
            </div>
            <p className="text-3xl font-extrabold px-5">{metric.value}</p>
            <div className="flex items-center px-5 font-medium">
              {metric.trend === "down" ? (
                <ArrowDown className="h-4 w-4 text-[#40BD3E] mr-1" />
              ) : (
                <ArrowUp className="h-4 w-4 text-red-500 mr-1" />
              )}
              <p
                className={`text-base ${
                  metric.trend === "down" ? "text-[#40BD3E]" : "text-red-500"
                }`}
              >
                {metric.change} this month
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
