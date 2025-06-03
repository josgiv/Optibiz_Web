"use client";

import React, { useState } from "react";
import { InventoryTable } from "@/components/inventory/inventory-table";
import { InventoryDashboard } from "@/components/inventory/inventory-dashboard";
import { ProductDialog } from "@/components/inventory/product-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCTS, SUPPLIERS } from "@/lib/constants";
import { Product } from "@/types";

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setDialogOpen(true);
  };

  const handleSaveProduct = (data: any) => {
    if (editingProduct) {
      // Update existing product
      setProducts(
        products.map((prod) =>
          prod.id === editingProduct.id
            ? {
                ...prod,
                ...data,
                lastRestocked: editingProduct.quantity !== data.quantity ? new Date().toISOString().split("T")[0] : prod.lastRestocked,
              }
            : prod
        )
      );
    } else {
      // Add new product
      const newProduct: Product = {
        id: `prod${products.length + 1}`,
        name: data.name,
        category: data.category,
        subCategory: data.subCategory,
        sku: data.sku,
        barcode: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        description: data.description || "",
        costPrice: data.costPrice,
        sellingPrice: data.sellingPrice,
        quantity: data.quantity,
        reorderLevel: data.reorderLevel,
        supplier: data.supplier,
        location: data.location || "Main Store",
        image: data.image || "https://placehold.co/300x300?text=No+Image",
        status: data.status,
        lastRestocked: new Date().toISOString().split("T")[0],
        tags: [data.category.toLowerCase()],
        warranty: data.warranty || "",
      };
      setProducts([...products, newProduct]);
    }
    setDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="inventory" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Items</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" className="pt-4">
          <InventoryDashboard products={products} suppliers={SUPPLIERS} />
        </TabsContent>
        <TabsContent value="inventory" className="pt-4">
          <InventoryTable
            data={products}
            onAddProduct={handleAddProduct}
            onEditProduct={handleEditProduct}
          />
        </TabsContent>
      </Tabs>

      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        product={editingProduct}
        onSave={handleSaveProduct}
        isEditing={!!editingProduct}
      />
    </div>
  );
}