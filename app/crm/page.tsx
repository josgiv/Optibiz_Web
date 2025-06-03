"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerTable } from "@/components/crm/customer-table";
import { CustomerDialog } from "@/components/crm/customer-dialog";
import { TicketsTable } from "@/components/crm/tickets-table";
import { CrmDashboard } from "@/components/crm/crm-dashboard";
import { CUSTOMERS, SUPPORT_TICKETS } from "@/lib/constants";
import { Customer, SupportTicket } from "@/types";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function CrmPage() {
  const [customers, setCustomers] = useState<Customer[]>(CUSTOMERS);
  const [tickets, setTickets] = useState<SupportTicket[]>(SUPPORT_TICKETS);
  const [customerDialogOpen, setCustomerDialogOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | undefined>(undefined);
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<SupportTicket | undefined>(undefined);

  // Customer CRUD
  const handleAddCustomer = () => {
    setEditingCustomer(undefined);
    setCustomerDialogOpen(true);
  };

  const handleEditCustomer = (customer: Customer) => {
    setEditingCustomer(customer);
    setCustomerDialogOpen(true);
  };

  const handleSaveCustomer = (data: any) => {
    if (editingCustomer) {
      // Update existing customer
      setCustomers(
        customers.map((cust) =>
          cust.id === editingCustomer.id ? { ...cust, ...data } : cust
        )
      );
    } else {
      // Add new customer
      const newCustomer: Customer = {
        id: `cust${customers.length + 1}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        type: data.type,
        company: data.company,
        joinDate: new Date().toISOString().split("T")[0],
        status: data.status,
        totalPurchases: 0,
        lastPurchase: "",
        loyaltyPoints: 0,
        notes: data.notes || "",
      };
      setCustomers([...customers, newCustomer]);
    }
    setCustomerDialogOpen(false);
  };

  // Ticket CRUD
  const handleAddTicket = () => {
    setEditingTicket(undefined);
    setTicketDialogOpen(true);
  };

  const handleEditTicket = (ticket: SupportTicket) => {
    setEditingTicket(ticket);
    setTicketDialogOpen(true);
  };

  const handleSaveTicket = (data: any) => {
    if (editingTicket) {
      // Update existing ticket
      setTickets(
        tickets.map((ticket) =>
          ticket.id === editingTicket.id
            ? {
                ...ticket,
                ...data,
                updatedDate: new Date().toISOString().split("T")[0],
                resolvedDate:
                  data.status === "resolved"
                    ? new Date().toISOString().split("T")[0]
                    : ticket.resolvedDate,
              }
            : ticket
        )
      );
    } else {
      // Add new ticket
      const newTicket: SupportTicket = {
        id: `ticket${tickets.length + 1}`,
        customerId: data.customerId,
        subject: data.subject,
        description: data.description,
        category: data.category,
        priority: data.priority,
        status: "new",
        assignedTo: data.assignedTo || "",
        createdDate: new Date().toISOString().split("T")[0],
        updatedDate: new Date().toISOString().split("T")[0],
        resolvedDate: "",
        comments: [],
        attachments: [],
      };
      setTickets([...tickets, newTicket]);
    }
    setTicketDialogOpen(false);
  };

  // Ticket categories
  const ticketCategories = [
    "Product Issue",
    "Technical Support",
    "Warranty",
    "Sales Inquiry",
    "Return Request",
    "Feedback",
    "Other",
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" className="pt-4">
          <CrmDashboard customers={customers} tickets={tickets} />
        </TabsContent>
        <TabsContent value="customers" className="pt-4">
          <CustomerTable
            data={customers}
            onAddCustomer={handleAddCustomer}
            onEditCustomer={handleEditCustomer}
          />
        </TabsContent>
        <TabsContent value="tickets" className="pt-4">
          <TicketsTable
            data={tickets}
            onAddTicket={handleAddTicket}
            onEditTicket={handleEditTicket}
          />
        </TabsContent>
      </Tabs>

      <CustomerDialog
        open={customerDialogOpen}
        onOpenChange={setCustomerDialogOpen}
        customer={editingCustomer}
        onSave={handleSaveCustomer}
        isEditing={!!editingCustomer}
      />

      <Dialog open={ticketDialogOpen} onOpenChange={setTicketDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            handleSaveTicket(data);
          }}>
            <DialogHeader>
              <DialogTitle>
                {editingTicket ? "Edit Support Ticket" : "Create New Ticket"}
              </DialogTitle>
              <DialogDescription>
                {editingTicket
                  ? "Update the details of this support ticket"
                  : "Fill in the details for the new support ticket"}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerId">Customer</Label>
                  <Select
                    name="customerId"
                    defaultValue={editingTicket?.customerId}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id}>
                          {customer.firstName} {customer.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    name="category"
                    defaultValue={editingTicket?.category}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {ticketCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    name="priority"
                    defaultValue={editingTicket?.priority || "medium"}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {editingTicket && (
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      name="status"
                      defaultValue={editingTicket.status}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="waiting">Waiting</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {!editingTicket && (
                  <div className="space-y-2">
                    <Label htmlFor="assignedTo">Assign To</Label>
                    <Select name="assignedTo">
                      <SelectTrigger>
                        <SelectValue placeholder="Unassigned" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emp1">John Doe (Store Manager)</SelectItem>
                        <SelectItem value="emp2">Sarah Smith (Sales)</SelectItem>
                        <SelectItem value="emp3">Michael Johnson (Technical Support)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  defaultValue={editingTicket?.subject}
                  placeholder="Brief summary of the issue"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingTicket?.description}
                  placeholder="Detailed description of the issue"
                  rows={4}
                  required
                />
              </div>
              
              {editingTicket && (
                <div className="space-y-2">
                  <Label htmlFor="comment">Add Comment</Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Add a new comment or update"
                    rows={2}
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setTicketDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-[#5271ff] hover:bg-[#5271ff]/90">
                {editingTicket ? "Update Ticket" : "Create Ticket"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}