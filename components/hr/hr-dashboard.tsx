import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardStats } from "@/types";
import { Users, UserCheck, Wallet, Calendar } from "lucide-react";
import { Employee } from "@/types";

interface HrDashboardProps {
  stats: {
    totalEmployees: number;
    newHires: number;
    onLeave: number;
    upcomingReviews: number;
  };
  employees: Employee[];
}

export function HrDashboard({ stats, employees }: HrDashboardProps) {
  // Calculate average salaries by department
  const departmentSalaries: Record<string, { count: number; total: number }> = {};
  employees.forEach((employee) => {
    if (!departmentSalaries[employee.department]) {
      departmentSalaries[employee.department] = { count: 0, total: 0 };
    }
    departmentSalaries[employee.department].count += 1;
    departmentSalaries[employee.department].total += employee.salary;
  });

  const averageSalaries = Object.entries(departmentSalaries).map(
    ([department, { count, total }]) => ({
      department,
      average: total / count,
    })
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Employees
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">
              Across {Object.keys(departmentSalaries).length} departments
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Employees on Leave
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.onLeave}</div>
            <p className="text-xs text-muted-foreground">
              Currently on approved leave
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Reviews
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.upcomingReviews}</div>
            <p className="text-xs text-muted-foreground">
              Performance reviews due this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Payroll Budget
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(
                employees.reduce((sum, emp) => sum + emp.salary, 0)
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Monthly salary expenses
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
            <CardDescription>
              Employee distribution across departments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(departmentSalaries).map(([department, { count }]) => (
                <div key={department} className="flex items-center">
                  <div className="w-1/3 font-medium">{department}</div>
                  <div className="w-2/3 flex items-center gap-2">
                    <div
                      className="h-2 bg-[#5271ff]"
                      style={{
                        width: `${(count / stats.totalEmployees) * 100}%`,
                      }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {count} ({((count / stats.totalEmployees) * 100).toFixed(0)}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Salary Analysis</CardTitle>
            <CardDescription>
              Average salary by department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {averageSalaries.map(({ department, average }) => (
                <div key={department} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{department}</span>
                    <span className="text-sm">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(average)}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                    <div
                      className="h-full bg-[#feca4f]"
                      style={{
                        width: `${(average / 50000) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}