"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@/types";
import { SUPPLIERS } from "@/lib/constants";

const productSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Subcategory is required"),
  sku: z.string().min(1, "SKU is required"),
  description: z.string().optional(),
  costPrice: z.coerce.number().positive("Cost price must be positive"),
  sellingPrice: z.coerce.number().positive("Selling price must be positive"),
  quantity: z.coerce.number().int().nonnegative("Quantity must be >= 0"),
  reorderLevel: z.coerce.number().int().nonnegative("Reorder level must be >= 0"),
  supplier: z.string().min(1, "Supplier is required"),
  location: z.string().optional(),
  status: z.enum(["active", "inactive", "discontinued"]),
  image: z.string().optional(),
  warranty: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productSchema>;

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product;
  onSave: (data: ProductFormValues) => void;
  isEditing: boolean;
}

export function ProductDialog({
  open,
  onOpenChange,
  product,
  onSave,
  isEditing,
}: ProductDialogProps) {
  const defaultValues: Partial<ProductFormValues> = {
    name: product?.name || "",
    category: product?.category || "",
    subCategory: product?.subCategory || "",
    sku: product?.sku || "",
    description: product?.description || "",
    costPrice: product?.costPrice || 0,
    sellingPrice: product?.sellingPrice || 0,
    quantity: product?.quantity || 0,
    reorderLevel: product?.reorderLevel || 5,
    supplier: product?.supplier || "",
    location: product?.location || "Main Store",
    status: product?.status || "active",
    image: product?.image || "",
    warranty: product?.warranty || "",
  };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  const handleSubmit = (data: ProductFormValues) => {
    onSave(data);
    form.reset();
  };

  // Categories and subcategories
  const categories = [
    {
      name: "Smartphones",
      subCategories: ["iOS", "Android", "Other"],
    },
    {
      name: "Laptops",
      subCategories: ["MacOS", "Windows", "Chrome OS", "Linux"],
    },
    {
      name: "Tablets",
      subCategories: ["iOS", "Android", "Windows"],
    },
    {
      name: "Accessories",
      subCategories: ["Audio", "Monitors", "Power", "Input Devices", "Cables", "Cases"],
    },
  ];

  // Available subcategories based on selected category
  const availableSubcategories = categories.find(
    (c) => c.name === form.watch("category")
  )?.subCategories || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Product" : "Add New Product"}
            </DialogTitle>
            <DialogDescription>
              {isEditing
                ? "Update product information"
                : "Fill in the details for the new product"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="iPhone 15 Pro"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input
                  id="sku"
                  {...form.register("sku")}
                  placeholder="IP15P-128-BLK"
                />
                {form.formState.errors.sku && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.sku.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={form.watch("category")}
                  onValueChange={(value) => form.setValue("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.category && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.category.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="subCategory">Subcategory</Label>
                <Select
                  value={form.watch("subCategory")}
                  onValueChange={(value) => form.setValue("subCategory", value)}
                  disabled={!form.watch("category")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSubcategories.map((subCategory) => (
                      <SelectItem key={subCategory} value={subCategory}>
                        {subCategory}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.subCategory && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.subCategory.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...form.register("description")}
                placeholder="Product description"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="costPrice">Cost Price ($)</Label>
                <Input
                  id="costPrice"
                  type="number"
                  step="0.01"
                  {...form.register("costPrice")}
                />
                {form.formState.errors.costPrice && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.costPrice.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellingPrice">Selling Price ($)</Label>
                <Input
                  id="sellingPrice"
                  type="number"
                  step="0.01"
                  {...form.register("sellingPrice")}
                />
                {form.formState.errors.sellingPrice && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.sellingPrice.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="warranty">Warranty</Label>
                <Input
                  id="warranty"
                  {...form.register("warranty")}
                  placeholder="1 year"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  {...form.register("quantity")}
                />
                {form.formState.errors.quantity && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.quantity.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="reorderLevel">Reorder Level</Label>
                <Input
                  id="reorderLevel"
                  type="number"
                  {...form.register("reorderLevel")}
                />
                {form.formState.errors.reorderLevel && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.reorderLevel.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select
                  value={form.watch("location")}
                  onValueChange={(value) => form.setValue("location", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Main Store">Main Store</SelectItem>
                    <SelectItem value="Warehouse">Warehouse</SelectItem>
                    <SelectItem value="Display">Display</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="supplier">Supplier</Label>
                <Select
                  value={form.watch("supplier")}
                  onValueChange={(value) => form.setValue("supplier", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    {SUPPLIERS.map((supplier) => (
                      <SelectItem key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.supplier && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.supplier.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={form.watch("status")}
                  onValueChange={(value) => 
                    form.setValue("status", value as "active" | "inactive" | "discontinued")
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="discontinued">Discontinued</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.status && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.status.message}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                {...form.register("image")}
                placeholder="https://example.com/image.jpg"
              />
              {form.watch("image") && (
                <div className="mt-2 flex justify-center">
                  <img
                    src={form.watch("image")}
                    alt="Product Preview"
                    className="h-32 w-32 object-cover rounded-md border"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/300x300?text=Image+Error";
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-[#5271ff] hover:bg-[#5271ff]/90">
              {isEditing ? "Update Product" : "Add Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}