import { DASHBOARD_STATS } from "@/lib/constants";
import StatsCard from "@/components/dashboard/stats-card";
import SalesChart from "@/components/dashboard/sales-chart";
import RecentSales from "@/components/dashboard/recent-sales";
import InventoryStatus from "@/components/dashboard/inventory-status";
import CategoryDistribution from "@/components/dashboard/category-distribution";
import OverviewTabs from "@/components/dashboard/overview-tabs";
import { DollarSign, Users, Package, ShoppingCart, BarChart3 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Sales"
          value={`$${DASHBOARD_STATS.sales.thisMonth.toLocaleString()}`}
          description="This month"
          trend="up"
          trendValue={`${DASHBOARD_STATS.sales.growth}%`}
          icon={<DollarSign className="h-4 w-4" />}
        />
        
        <StatsCard
          title="Active Customers"
          value={DASHBOARD_STATS.customers.active}
          description={`${DASHBOARD_STATS.customers.new} new this month`}
          icon={<Users className="h-4 w-4" />}
        />
        
        <StatsCard
          title="Inventory Items"
          value={DASHBOARD_STATS.inventory.totalProducts}
          description={`${DASHBOARD_STATS.inventory.lowStock} low stock items`}
          icon={<Package className="h-4 w-4" />}
        />
        
        <StatsCard
          title="Profit"
          value={`$${DASHBOARD_STATS.finance.profit.toLocaleString()}`}
          description={`${((DASHBOARD_STATS.finance.profit / DASHBOARD_STATS.finance.revenue) * 100).toFixed(1)}% margin`}
          trend="up"
          icon={<BarChart3 className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Sales Chart - Takes 4 columns on all screen sizes */}
        <SalesChart 
          data={DASHBOARD_STATS.finance.cashflow} 
          title="Cash Flow"
          description="Income vs expenses over time"
        />
        
        {/* Overview Tabs - Takes 3 columns on large screens */}
        <OverviewTabs stats={DASHBOARD_STATS} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Sales - Takes 4 columns on large screens */}
        <RecentSales sales={DASHBOARD_STATS.sales.recentSales} />
        
        {/* Inventory Status - Takes 3 columns on large screens */}
        <div className="col-span-4 lg:col-span-3 grid gap-4 grid-cols-1">
          <InventoryStatus products={DASHBOARD_STATS.inventory.topSelling} />
          <CategoryDistribution data={DASHBOARD_STATS.sales.salesByCategory} />
        </div>
      </div>
    </div>
  );
}