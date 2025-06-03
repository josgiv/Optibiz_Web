"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { CURRENT_USER } from "@/lib/constants";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        user={CURRENT_USER}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          user={CURRENT_USER}
          toggleSidebar={toggleSidebar}
          isCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}