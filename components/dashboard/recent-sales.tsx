import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sale, Customer } from "@/types";
import { CUSTOMERS } from "@/lib/constants";

interface RecentSalesProps {
  sales: Sale[];
}

export default function RecentSales({ sales }: RecentSalesProps) {
  // Helper function to find customer by ID
  const findCustomerById = (id: string): Customer | undefined => {
    return CUSTOMERS.find(customer => customer.id === id);
  };

  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>
          Showing the {sales.length} most recent transactions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sales.map((sale) => {
            const customer = findCustomerById(sale.customerId);
            if (!customer) return null;
            
            return (
              <div key={sale.id} className="flex items-center">
                <Avatar className="h-9 w-9 mr-3">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${parseInt(customer.id.replace('cust', ''))}`} alt={`${customer.firstName} ${customer.lastName}`} />
                  <AvatarFallback>{customer.firstName[0]}{customer.lastName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {customer.firstName} {customer.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {customer.email}
                  </p>
                </div>
                <div className="font-medium">
                  ${sale.totalAmount.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}