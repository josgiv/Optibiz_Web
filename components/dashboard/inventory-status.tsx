import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface InventoryStatusProps {
  products: Array<{
    productId: string;
    name: string;
    sold: number;
  }>;
}

export default function InventoryStatus({ products }: InventoryStatusProps) {
  // Get the max sold value for scaling the progress bar
  const maxSold = Math.max(...products.map((p) => p.sold));

  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
        <CardDescription>
          Best performing items this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.productId} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium text-sm">{product.name}</div>
                <div className="text-sm text-muted-foreground">
                  {product.sold} units
                </div>
              </div>
              <Progress 
                className="h-2" 
                value={(product.sold / maxSold) * 100} 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}