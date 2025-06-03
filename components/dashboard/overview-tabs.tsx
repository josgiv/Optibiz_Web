"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "@/types";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface OverviewTabsProps {
  stats: DashboardStats;
}

export default function OverviewTabs({ stats }: OverviewTabsProps) {
  // Transform financial data for HR view
  const hrData = [
    { name: "Total", value: stats.hr.totalEmployees },
    { name: "New Hires", value: stats.hr.newHires },
    { name: "On Leave", value: stats.hr.onLeave },
    { name: "Reviews", value: stats.hr.upcomingReviews },
  ];

  // Transform data for CRM view
  const crmData = [
    { name: "Total", value: stats.customers.total },
    { name: "New", value: stats.customers.new },
    { name: "Active", value: stats.customers.active },
    { name: "Inactive", value: stats.customers.inactive },
  ];

  // Transform data for Tasks view
  const tasksData = [
    { name: "Total", value: stats.tasks.total },
    { name: "Completed", value: stats.tasks.completed },
    { name: "In Progress", value: stats.tasks.inProgress },
    { name: "Overdue", value: stats.tasks.overdue },
  ];

  // Transform data for Support view
  const supportData = [
    { name: "Total", value: stats.tickets.total },
    { name: "Open", value: stats.tickets.open },
    { name: "Resolved", value: stats.tickets.resolved },
  ];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Business Overview</CardTitle>
        <CardDescription>
          Key metrics from different departments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="hr">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="hr">HR</TabsTrigger>
            <TabsTrigger value="crm">Customers</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          <TabsContent value="hr" className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hrData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)', 
                    border: '1px solid var(--border)' 
                  }}
                />
                <Bar dataKey="value" fill="#5271ff" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="crm" className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={crmData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)', 
                    border: '1px solid var(--border)' 
                  }}
                />
                <Bar dataKey="value" fill="#feca4f" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="tasks" className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tasksData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)', 
                    border: '1px solid var(--border)' 
                  }}
                />
                <Bar dataKey="value" fill="#5271ff" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="support" className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={supportData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)', 
                    border: '1px solid var(--border)' 
                  }}
                />
                <Bar dataKey="value" fill="#feca4f" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}