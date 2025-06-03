export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  department: string;
  avatar: string;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  joinDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'onLeave';
  address: string;
  avatar: string;
  bankAccount: string;
  bankName: string;
  taxId: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  documents: Document[];
  performanceReviews: PerformanceReview[];
  leaveBalance: {
    annual: number;
    sick: number;
    unpaid: number;
  };
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewerId: string;
  date: string;
  rating: number;
  strengths: string[];
  weaknesses: string[];
  goals: string[];
  comments: string;
}

export interface Leave {
  id: string;
  employeeId: string;
  type: 'annual' | 'sick' | 'unpaid' | 'other';
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
}

export interface Payroll {
  id: string;
  employeeId: string;
  periodStart: string;
  periodEnd: string;
  basicSalary: number;
  allowances: {
    housing: number;
    transport: number;
    meal: number;
    other: number;
  };
  deductions: {
    tax: number;
    insurance: number;
    pension: number;
    loans: number;
    other: number;
  };
  netSalary: number;
  status: 'draft' | 'processed' | 'paid';
  paymentDate: string;
  paymentMethod: 'bank' | 'cash' | 'other';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  sku: string;
  barcode: string;
  description: string;
  costPrice: number;
  sellingPrice: number;
  quantity: number;
  reorderLevel: number;
  supplier: string;
  location: string;
  image: string;
  status: 'active' | 'inactive' | 'discontinued';
  lastRestocked: string;
  tags: string[];
  warranty: string;
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  taxId: string;
  paymentTerms: string;
  rating: number;
  status: 'active' | 'inactive';
  products: string[];
}

export interface PurchaseOrder {
  id: string;
  supplierId: string;
  orderDate: string;
  expectedDeliveryDate: string;
  status: 'draft' | 'submitted' | 'received' | 'cancelled';
  items: PurchaseOrderItem[];
  totalAmount: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  paymentDueDate: string;
  notes: string;
}

export interface PurchaseOrderItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  type: 'individual' | 'business';
  company?: string;
  joinDate: string;
  status: 'active' | 'inactive';
  totalPurchases: number;
  lastPurchase: string;
  loyaltyPoints: number;
  notes: string;
}

export interface Sale {
  id: string;
  customerId: string;
  orderDate: string;
  items: SaleItem[];
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentMethod: 'cash' | 'credit_card' | 'debit_card' | 'online' | 'credit';
  paymentStatus: 'pending' | 'partial' | 'paid';
  deliveryStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  notes: string;
}

export interface SaleItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  totalPrice: number;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  account: string;
  description: string;
  reference: string;
  status: 'pending' | 'completed' | 'failed';
  attachments: Document[];
}

export interface Account {
  id: string;
  name: string;
  type: 'cash' | 'bank' | 'credit_card' | 'other';
  currency: string;
  balance: number;
  openingBalance: number;
  openingDate: string;
  status: 'active' | 'inactive';
  notes: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  manager: string;
  team: string[];
  startDate: string;
  deadline: string;
  status: 'planning' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled';
  progress: number;
  budget: number;
  expenses: number;
  priority: 'low' | 'medium' | 'high';
  tasks: Task[];
  documents: Document[];
  notes: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  assignedTo: string;
  startDate: string;
  dueDate: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high';
  progress: number;
  comments: Comment[];
  attachments: Document[];
}

export interface Comment {
  id: string;
  taskId: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface Asset {
  id: string;
  name: string;
  category: string;
  serialNumber: string;
  purchaseDate: string;
  purchasePrice: number;
  assignedTo: string;
  location: string;
  status: 'in_use' | 'in_storage' | 'in_repair' | 'disposed';
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  warrantyExpiry: string;
  maintenanceSchedule: MaintenanceEvent[];
  depreciation: {
    method: string;
    rate: number;
    currentValue: number;
  };
  notes: string;
  image: string;
}

export interface MaintenanceEvent {
  id: string;
  assetId: string;
  type: 'routine' | 'repair' | 'inspection';
  date: string;
  cost: number;
  provider: string;
  description: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  path: string;
  size: number;
  uploadedBy: string;
  uploadDate: string;
  lastModified: string;
  status: 'active' | 'archived';
  tags: string[];
  accessLevel: 'public' | 'internal' | 'restricted' | 'confidential';
  allowedUsers: string[];
}

export interface SupportTicket {
  id: string;
  customerId: string;
  subject: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'new' | 'in_progress' | 'waiting' | 'resolved' | 'closed';
  assignedTo: string;
  createdDate: string;
  updatedDate: string;
  resolvedDate: string;
  comments: Comment[];
  attachments: Document[];
}

export interface DashboardStats {
  sales: {
    today: number;
    thisWeek: number;
    thisMonth: number;
    lastMonth: number;
    growth: number;
    salesByCategory: { category: string; amount: number }[];
    recentSales: any[]; // Ganti dengan tipe asli kalau tahu
  };
  inventory: {
    totalProducts: number;
    lowStock: number;
    outOfStock: number;
    topSelling: { productId: string; name: string; sold: number }[];
  };
  finance: {
    revenue: number;
    expenses: number;
    profit: number;
    cashflow: { date: string; income: number; expense: number }[];
    accountBalances: { account: string; balance: number }[];
  };
  hr: {
    totalEmployees: number;
    newHires: number;
    onLeave: number;
    upcomingReviews: number;
  };
  customers: {
    total: number;
    new: number;
    active: number;
    inactive: number;
  };
  tasks: {
    total: number;
    completed: number;
    inProgress: number;
    overdue: number;
  };
  tickets: {
    total: number;
    open: number;
    resolved: number;
    responseTime: number;
  };
}
