"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinanceDashboard } from "@/components/finance/finance-dashboard";
import { TransactionTable } from "@/components/finance/transaction-table";
import { TransactionDialog } from "@/components/finance/transaction-dialog";
import { TRANSACTIONS, ACCOUNTS } from "@/lib/constants";
import { Transaction } from "@/types";

export default function FinancePage() {
  const [transactions, setTransactions] = useState<Transaction[]>(TRANSACTIONS);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | undefined>(undefined);

  const handleAddTransaction = () => {
    setEditingTransaction(undefined);
    setDialogOpen(true);
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setDialogOpen(true);
  };

  const handleSaveTransaction = (data: any) => {
    if (editingTransaction) {
      // Update existing transaction
      setTransactions(
        transactions.map((trans) =>
          trans.id === editingTransaction.id ? { ...trans, ...data } : trans
        )
      );
    } else {
      // Add new transaction
      const newTransaction: Transaction = {
        id: `tr${transactions.length + 1}`,
        date: data.date,
        type: data.type,
        category: data.category,
        amount: data.amount,
        account: data.account,
        description: data.description || "",
        reference: data.reference || "",
        status: data.status,
        attachments: [],
      };
      setTransactions([...transactions, newTransaction]);
    }
    setDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard" className="pt-4">
          <FinanceDashboard transactions={transactions} accounts={ACCOUNTS} />
        </TabsContent>
        <TabsContent value="transactions" className="pt-4">
          <TransactionTable
            data={transactions}
            onAddTransaction={handleAddTransaction}
            onEditTransaction={handleEditTransaction}
          />
        </TabsContent>
      </Tabs>

      <TransactionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        transaction={editingTransaction}
        onSave={handleSaveTransaction}
        isEditing={!!editingTransaction}
      />
    </div>
  );
}