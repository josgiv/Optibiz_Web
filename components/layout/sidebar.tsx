"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronLeft, 
  LayoutDashboard, 
  Users, 
  ClipboardList,
  ShoppingCart, 
  BriefcaseBusiness, 
  Wallet, 
  Calendar, 
  FileBox, 
  Settings, 
  HelpCircle, 
  ChevronRight,
  Boxes,
  BarChart3,
  Headphones,
  FileText
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  user: User;
}

interface SidebarItemType {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed: boolean;
  isActive: boolean;
}

const mainItems: SidebarItemType[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "HR & Payroll",
    href: "/hr",
    icon: Users,
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: Boxes,
  },
  {
    name: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    name: "CRM",
    href: "/crm",
    icon: Headphones,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: BriefcaseBusiness,
  },
  {
    name: "Assets",
    href: "/assets",
    icon: ShoppingCart,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
];

const SidebarItem = ({ item, isCollapsed, isActive }: SidebarItemProps) => {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center py-3 px-3 my-1 rounded-lg gap-3 transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-muted text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span>{item.name}</span>}
    </Link>
  );
};

export function Sidebar({ isCollapsed, toggleSidebar, user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-card text-card-foreground border-r shadow-sm transition-all duration-300",
        isCollapsed ? "w-[80px]" : "w-[240px]"
      )}
    >
      <div className="flex items-center h-16 px-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center gap-2 px-2">
            <div className="font-bold text-xl text-[#5271ff]">OptiBiz</div>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          {!isCollapsed && (
            <div className="text-xs font-semibold text-muted-foreground/70 mb-2 px-2">
              MAIN MENU
            </div>
          )}
          <nav className="space-y-1 px-2">
            {mainItems.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
                isCollapsed={isCollapsed}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto p-4 border-t">
        <div
          className={cn(
            "flex items-center gap-3",
            isCollapsed ? "flex-col" : "flex-row"
          )}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col flex-1 overflow-hidden">
              <div className="text-sm font-medium leading-none truncate">
                {user.name}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {user.role}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}