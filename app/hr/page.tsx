"use client";

import React, { useState } from "react";
import { EmployeeTable } from "@/components/hr/employee-table";
import { PayrollTable } from "@/components/hr/payroll-table";
import { HrDashboard } from "@/components/hr/hr-dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EMPLOYEES, DASHBOARD_STATS } from "@/lib/constants";
import { Employee, Payroll } from "@/types";
import { EmployeeDialog } from "@/components/hr/employee-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Example dummy payroll data
const dummyPayroll: Payroll[] = [
  {
    id: "pay1",
    employeeId: "emp1",
    periodStart: "2023-08-01",
    periodEnd: "2023-08-31",
    basicSalary: 3750,
    allowances: {
      housing: 500,
      transport: 200,
      meal: 100,
      other: 0,
    },
    deductions: {
      tax: 450,
      insurance: 150,
      pension: 187.5,
      loans: 0,
      other: 0,
    },
    netSalary: 3762.5,
    status: "paid",
    paymentDate: "2023-09-05",
    paymentMethod: "bank",
  },
  {
    id: "pay2",
    employeeId: "emp2",
    periodStart: "2023-08-01",
    periodEnd: "2023-08-31",
    basicSalary: 2666.67,
    allowances: {
      housing: 350,
      transport: 150,
      meal: 75,
      other: 0,
    },
    deductions: {
      tax: 320,
      insurance: 120,
      pension: 133.33,
      loans: 200,
      other: 0,
    },
    netSalary: 2469.01,
    status: "paid",
    paymentDate: "2023-09-05",
    paymentMethod: "bank",
  },
];

export default function HrPage() {
  const [employees, setEmployees] = useState<Employee[]>(EMPLOYEES);
  const [payrolls, setPayrolls] = useState<Payroll[]>(dummyPayroll);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | undefined>(undefined);
  const [payrollDialogOpen, setPayrollDialogOpen] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState<Payroll | undefined>(undefined);

  const handleAddEmployee = () => {
    setEditingEmployee(undefined);
    setDialogOpen(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
    setDialogOpen(true);
  };

  const handleSaveEmployee = (data: any) => {
    if (editingEmployee) {
      // Update existing employee
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id ? { ...emp, ...data } : emp
        )
      );
    } else {
      // Add new employee
      const newEmployee: Employee = {
        id: `emp${employees.length + 1}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        department: data.department,
        joinDate: data.joinDate,
        salary: data.salary,
        status: data.status,
        address: data.address || "",
        avatar: `https://i.pravatar.cc/150?img=${employees.length + 10}`,
        bankAccount: "",
        bankName: "",
        taxId: "",
        emergencyContact: {
          name: "",
          relationship: "",
          phone: "",
        },
        documents: [],
        performanceReviews: [],
        leaveBalance: {
          annual: 20,
          sick: 10,
          unpaid: 0,
        },
      };
      setEmployees([...employees, newEmployee]);
    }
    setDialogOpen(false);
  };

  const handleRunPayroll = () => {
    // Implementation would create new payroll entries
    alert("Payroll processing would be triggered here");
  };

  const handleViewPayroll = (payroll: Payroll) => {
    setSelectedPayroll(payroll);
    setPayrollDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" className="pt-4">
          <HrDashboard 
            stats={DASHBOARD_STATS.hr} 
            employees={employees} 
          />
        </TabsContent>
        <TabsContent value="employees" className="pt-4">
          <EmployeeTable
            data={employees}
            onAddEmployee={handleAddEmployee}
            onEditEmployee={handleEditEmployee}
          />
        </TabsContent>
        <TabsContent value="payroll" className="pt-4">
          <PayrollTable
            data={payrolls}
            onRunPayroll={handleRunPayroll}
            onViewPayroll={handleViewPayroll}
          />
        </TabsContent>
      </Tabs>

      <EmployeeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        employee={editingEmployee}
        onSave={handleSaveEmployee}
        isEditing={!!editingEmployee}
      />

      {selectedPayroll && (
        <Dialog 
          open={payrollDialogOpen} 
          onOpenChange={setPayrollDialogOpen}
        >
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Payroll Details</DialogTitle>
              <DialogDescription>
                Salary breakdown for the period {new Date(selectedPayroll.periodStart).toLocaleDateString()} - {new Date(selectedPayroll.periodEnd).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Basic Salary</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.basicSalary.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Housing Allowance</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.allowances.housing.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Transport Allowance</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.allowances.transport.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Meal Allowance</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.allowances.meal.toFixed(2)}
                        </span>
                      </div>
                      {selectedPayroll.allowances.other > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm">Other Allowances</span>
                          <span className="text-sm font-medium">
                            ${selectedPayroll.allowances.other.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between">
                        <span className="text-sm font-medium">Total Earnings</span>
                        <span className="text-sm font-medium">
                          ${(
                            selectedPayroll.basicSalary +
                            selectedPayroll.allowances.housing +
                            selectedPayroll.allowances.transport +
                            selectedPayroll.allowances.meal +
                            selectedPayroll.allowances.other
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Deductions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Tax</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.deductions.tax.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Insurance</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.deductions.insurance.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pension Contribution</span>
                        <span className="text-sm font-medium">
                          ${selectedPayroll.deductions.pension.toFixed(2)}
                        </span>
                      </div>
                      {selectedPayroll.deductions.loans > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm">Loan Repayment</span>
                          <span className="text-sm font-medium">
                            ${selectedPayroll.deductions.loans.toFixed(2)}
                          </span>
                        </div>
                      )}
                      {selectedPayroll.deductions.other > 0 && (
                        <div className="flex justify-between">
                          <span className="text-sm">Other Deductions</span>
                          <span className="text-sm font-medium">
                            ${selectedPayroll.deductions.other.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between">
                        <span className="text-sm font-medium">Total Deductions</span>
                        <span className="text-sm font-medium">
                          ${(
                            selectedPayroll.deductions.tax +
                            selectedPayroll.deductions.insurance +
                            selectedPayroll.deductions.pension +
                            selectedPayroll.deductions.loans +
                            selectedPayroll.deductions.other
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Net Salary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium">Net Pay</span>
                    <span className="text-xl font-bold text-[#5271ff]">
                      ${selectedPayroll.netSalary.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Payment Method: {selectedPayroll.paymentMethod.charAt(0).toUpperCase() + selectedPayroll.paymentMethod.slice(1)}
                    {selectedPayroll.paymentDate && (
                      <span> • Paid on {new Date(selectedPayroll.paymentDate).toLocaleDateString()}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setPayrollDialogOpen(false)}>
                Close
              </Button>
              <Button>Download Payslip</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// Import the Button and Dialog components used in the component
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";