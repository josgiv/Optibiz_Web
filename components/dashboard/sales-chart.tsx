"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SalesChartProps {
  data: Array<{ date: string; income: number; expense: number }>;
  title: string;
  description?: string;
}

export default function SalesChart({ data, title, description }: SalesChartProps) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background p-3 border rounded-lg shadow-sm">
                      <p className="font-medium">{label}</p>
                      <p className="text-sm text-[#5271ff]">
                        Income: ${payload[0].value}
                      </p>
                      <p className="text-sm text-[#feca4f]">
                        Expense: ${payload[1].value}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="income"
              fill="rgba(82, 113, 255, 0.2)"
              stroke="#5271ff"
            />
            <Area
              type="monotone"
              dataKey="expense"
              fill="rgba(254, 202, 79, 0.2)"
              stroke="#feca4f"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}