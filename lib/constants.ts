import { User, Employee, Product, Supplier, Customer, Project, Asset, Document, SupportTicket, Account, Sale, PurchaseOrder, Task, Transaction } from '@/types';

// Demo User for authentication
export const CURRENT_USER: User = {
  id: "u1",
  name: "Admin User",
  email: "admin@optibiz.com",
  role: "admin",
  department: "Management",
  avatar: "https://i.pravatar.cc/150?img=1"
};

// HR & Employees
export const EMPLOYEES: Employee[] = [
  {
    id: "emp1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@optibiz.com",
    phone: "+1234567890",
    position: "Store Manager",
    department: "Sales",
    joinDate: "2021-03-15",
    salary: 45000,
    status: "active",
    address: "123 Main St, Cityville",
    avatar: "https://i.pravatar.cc/150?img=2",
    bankAccount: "9876543210",
    bankName: "First National Bank",
    taxId: "TX12345",
    emergencyContact: {
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+1234567891"
    },
    documents: [],
    performanceReviews: [
      {
        id: "pr1",
        employeeId: "emp1",
        reviewerId: "u1",
        date: "2023-01-15",
        rating: 4,
        strengths: ["Customer service", "Team leadership"],
        weaknesses: ["Inventory management"],
        goals: ["Improve inventory tracking", "Train new hires"],
        comments: "John is a valuable team member who consistently meets targets."
      }
    ],
    leaveBalance: {
      annual: 18,
      sick: 10,
      unpaid: 0
    }
  },
  {
    id: "emp2",
    firstName: "Sarah",
    lastName: "Smith",
    email: "sarah.smith@optibiz.com",
    phone: "+1234567892",
    position: "Sales Associate",
    department: "Sales",
    joinDate: "2022-01-10",
    salary: 32000,
    status: "active",
    address: "456 Elm St, Townsville",
    avatar: "https://i.pravatar.cc/150?img=5",
    bankAccount: "1234567890",
    bankName: "First National Bank",
    taxId: "TX12346",
    emergencyContact: {
      name: "Mike Smith",
      relationship: "Brother",
      phone: "+1234567893"
    },
    documents: [],
    performanceReviews: [
      {
        id: "pr2",
        employeeId: "emp2",
        reviewerId: "u1",
        date: "2023-01-18",
        rating: 4.5,
        strengths: ["Sales conversion", "Product knowledge"],
        weaknesses: ["Documentation"],
        goals: ["Improve documentation", "Meet quarterly targets"],
        comments: "Sarah consistently exceeds sales targets and has excellent product knowledge."
      }
    ],
    leaveBalance: {
      annual: 12,
      sick: 7,
      unpaid: 0
    }
  },
  {
    id: "emp3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@optibiz.com",
    phone: "+1234567894",
    position: "Technical Support",
    department: "IT",
    joinDate: "2021-06-20",
    salary: 38000,
    status: "active",
    address: "789 Oak St, Villageton",
    avatar: "https://i.pravatar.cc/150?img=3",
    bankAccount: "2345678901",
    bankName: "City Bank",
    taxId: "TX12347",
    emergencyContact: {
      name: "Lisa Johnson",
      relationship: "Spouse",
      phone: "+1234567895"
    },
    documents: [],
    performanceReviews: [
      {
        id: "pr3",
        employeeId: "emp3",
        reviewerId: "u1",
        date: "2023-01-20",
        rating: 3.8,
        strengths: ["Technical knowledge", "Problem-solving"],
        weaknesses: ["Customer communication"],
        goals: ["Improve customer service skills", "Learn new repair techniques"],
        comments: "Michael has strong technical skills but needs to work on customer communication."
      }
    ],
    leaveBalance: {
      annual: 15,
      sick: 8,
      unpaid: 0
    }
  },
  {
    id: "emp4",
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@optibiz.com",
    phone: "+1234567896",
    position: "Accountant",
    department: "Finance",
    joinDate: "2022-04-05",
    salary: 40000,
    status: "onLeave",
    address: "101 Pine St, Hamletville",
    avatar: "https://i.pravatar.cc/150?img=4",
    bankAccount: "3456789012",
    bankName: "United Bank",
    taxId: "TX12348",
    emergencyContact: {
      name: "David Brown",
      relationship: "Spouse",
      phone: "+1234567897"
    },
    documents: [],
    performanceReviews: [
      {
        id: "pr4",
        employeeId: "emp4",
        reviewerId: "u1",
        date: "2023-01-25",
        rating: 4.2,
        strengths: ["Attention to detail", "Financial analysis"],
        weaknesses: ["Software proficiency"],
        goals: ["Master new accounting software", "Streamline monthly reporting"],
        comments: "Emily is detail-oriented and reliable in her financial reporting duties."
      }
    ],
    leaveBalance: {
      annual: 10,
      sick: 5,
      unpaid: 0
    }
  },
  {
    id: "emp5",
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@optibiz.com",
    phone: "+1234567898",
    position: "Warehouse Manager",
    department: "Inventory",
    joinDate: "2021-02-15",
    salary: 42000,
    status: "active",
    address: "202 Maple St, Boroughtown",
    avatar: "https://i.pravatar.cc/150?img=6",
    bankAccount: "4567890123",
    bankName: "Metro Bank",
    taxId: "TX12349",
    emergencyContact: {
      name: "Susan Wilson",
      relationship: "Spouse",
      phone: "+1234567899"
    },
    documents: [],
    performanceReviews: [
      {
        id: "pr5",
        employeeId: "emp5",
        reviewerId: "u1",
        date: "2023-02-01",
        rating: 4.0,
        strengths: ["Inventory control", "Team coordination"],
        weaknesses: ["Technology adoption"],
        goals: ["Implement new inventory system", "Reduce shipping errors"],
        comments: "David manages the warehouse effectively and maintains accurate inventory records."
      }
    ],
    leaveBalance: {
      annual: 20,
      sick: 10,
      unpaid: 0
    }
  }
];

// Inventory & Products
export const PRODUCTS: Product[] = [
  {
    id: "prod1",
    name: "iPhone 15 Pro",
    category: "Smartphones",
    subCategory: "iOS",
    sku: "IP15P-128-BLK",
    barcode: "1234567890123",
    description: "Latest iPhone model with A17 chip and improved camera",
    costPrice: 799,
    sellingPrice: 999,
    quantity: 25,
    reorderLevel: 10,
    supplier: "sup1",
    location: "Main Store",
    image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-09-15",
    tags: ["apple", "smartphone", "premium"],
    warranty: "1 year"
  },
  {
    id: "prod2",
    name: "Samsung Galaxy S23",
    category: "Smartphones",
    subCategory: "Android",
    sku: "SGS23-256-WHT",
    barcode: "2345678901234",
    description: "Flagship Android smartphone with advanced camera system",
    costPrice: 699,
    sellingPrice: 899,
    quantity: 18,
    reorderLevel: 8,
    supplier: "sup2",
    location: "Main Store",
    image: "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-08-28",
    tags: ["samsung", "smartphone", "android"],
    warranty: "1 year"
  },
  {
    id: "prod3",
    name: "MacBook Air M2",
    category: "Laptops",
    subCategory: "MacOS",
    sku: "MBA-M2-512-SVR",
    barcode: "3456789012345",
    description: "Thin and light laptop with Apple M2 chip",
    costPrice: 899,
    sellingPrice: 1199,
    quantity: 12,
    reorderLevel: 5,
    supplier: "sup1",
    location: "Main Store",
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-09-05",
    tags: ["apple", "laptop", "macbook"],
    warranty: "1 year"
  },
  {
    id: "prod4",
    name: "Dell XPS 15",
    category: "Laptops",
    subCategory: "Windows",
    sku: "DXP15-1TB-BLK",
    barcode: "4567890123456",
    description: "Premium Windows laptop with 15-inch display",
    costPrice: 1099,
    sellingPrice: 1399,
    quantity: 8,
    reorderLevel: 3,
    supplier: "sup3",
    location: "Main Store",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-07-20",
    tags: ["dell", "laptop", "windows"],
    warranty: "2 years"
  },
  {
    id: "prod5",
    name: "AirPods Pro 2",
    category: "Accessories",
    subCategory: "Audio",
    sku: "APP2-WHT",
    barcode: "5678901234567",
    description: "Wireless earbuds with noise cancellation",
    costPrice: 179,
    sellingPrice: 249,
    quantity: 30,
    reorderLevel: 15,
    supplier: "sup1",
    location: "Main Store",
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-09-10",
    tags: ["apple", "audio", "wireless"],
    warranty: "1 year"
  },
  {
    id: "prod6",
    name: "Samsung 27\" Monitor",
    category: "Accessories",
    subCategory: "Monitors",
    sku: "SM27-4K-BLK",
    barcode: "6789012345678",
    description: "27-inch 4K monitor with USB-C connectivity",
    costPrice: 299,
    sellingPrice: 399,
    quantity: 7,
    reorderLevel: 3,
    supplier: "sup2",
    location: "Warehouse",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-08-05",
    tags: ["samsung", "monitor", "display"],
    warranty: "3 years"
  },
  {
    id: "prod7",
    name: "Anker PowerCore",
    category: "Accessories",
    subCategory: "Power",
    sku: "APC-20K-BLK",
    barcode: "7890123456789",
    description: "20,000mAh portable power bank with fast charging",
    costPrice: 39,
    sellingPrice: 59.99,
    quantity: 45,
    reorderLevel: 20,
    supplier: "sup4",
    location: "Main Store",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-09-20",
    tags: ["anker", "power bank", "charging"],
    warranty: "18 months"
  },
  {
    id: "prod8",
    name: "iPad Air",
    category: "Tablets",
    subCategory: "iOS",
    sku: "IPA-64-GRY",
    barcode: "8901234567890",
    description: "Mid-range tablet with 10.9-inch display",
    costPrice: 449,
    sellingPrice: 599,
    quantity: 15,
    reorderLevel: 7,
    supplier: "sup1",
    location: "Main Store",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-08-15",
    tags: ["apple", "tablet", "ipad"],
    warranty: "1 year"
  },
  {
    id: "prod9",
    name: "Samsung Galaxy Tab S8",
    category: "Tablets",
    subCategory: "Android",
    sku: "SGT-S8-128-BLK",
    barcode: "9012345678901",
    description: "High-performance Android tablet with S Pen",
    costPrice: 549,
    sellingPrice: 699,
    quantity: 10,
    reorderLevel: 5,
    supplier: "sup2",
    location: "Main Store",
    image: "https://images.pexels.com/photos/1742763/pexels-photo-1742763.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-07-30",
    tags: ["samsung", "tablet", "android"],
    warranty: "1 year"
  },
  {
    id: "prod10",
    name: "Logitech MX Master 3",
    category: "Accessories",
    subCategory: "Input Devices",
    sku: "LMX3-BLK",
    barcode: "0123456789012",
    description: "Advanced wireless mouse for productivity",
    costPrice: 79,
    sellingPrice: 99.99,
    quantity: 20,
    reorderLevel: 8,
    supplier: "sup5",
    location: "Main Store",
    image: "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    status: "active",
    lastRestocked: "2023-09-01",
    tags: ["logitech", "mouse", "wireless"],
    warranty: "2 years"
  }
];

// Suppliers
export const SUPPLIERS: Supplier[] = [
  {
    id: "sup1",
    name: "Apple Distribution",
    contactPerson: "Tim Anderson",
    email: "tim@appledist.com",
    phone: "+1-555-123-4567",
    address: "1 Infinite Loop, Cupertino, CA",
    taxId: "AD-987654321",
    paymentTerms: "Net 30",
    rating: 5,
    status: "active",
    products: ["prod1", "prod3", "prod5", "prod8"]
  },
  {
    id: "sup2",
    name: "Samsung Electronics",
    contactPerson: "Sarah Kim",
    email: "sarah@samsung-dist.com",
    phone: "+1-555-234-5678",
    address: "123 Tech Blvd, Seoul",
    taxId: "SE-876543210",
    paymentTerms: "Net 45",
    rating: 4,
    status: "active",
    products: ["prod2", "prod6", "prod9"]
  },
  {
    id: "sup3",
    name: "Dell Technologies",
    contactPerson: "Michael Dell",
    email: "michael@dell-wholesale.com",
    phone: "+1-555-345-6789",
    address: "1 Dell Way, Round Rock, TX",
    taxId: "DT-765432109",
    paymentTerms: "Net 60",
    rating: 4,
    status: "active",
    products: ["prod4"]
  },
  {
    id: "sup4",
    name: "Anker Innovations",
    contactPerson: "Steven Yang",
    email: "steven@anker-dist.com",
    phone: "+1-555-456-7890",
    address: "456 Power Ave, Shenzhen",
    taxId: "AI-654321098",
    paymentTerms: "Net 30",
    rating: 4,
    status: "active",
    products: ["prod7"]
  },
  {
    id: "sup5",
    name: "Logitech Distribution",
    contactPerson: "Emma Thompson",
    email: "emma@logitech-dist.com",
    phone: "+1-555-567-8901",
    address: "789 Mouse St, Lausanne",
    taxId: "LD-543210987",
    paymentTerms: "Net 30",
    rating: 5,
    status: "active",
    products: ["prod10"]
  }
];

// Customers
export const CUSTOMERS: Customer[] = [
  {
    id: "cust1",
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.johnson@email.com",
    phone: "+1-555-111-2222",
    address: "123 Oak St",
    city: "Springfield",
    state: "IL",
    zip: "62704",
    country: "USA",
    type: "individual",
    joinDate: "2022-03-15",
    status: "active",
    totalPurchases: 2450.75,
    lastPurchase: "2023-09-12",
    loyaltyPoints: 245,
    notes: "Frequent buyer of Apple products"
  },
  {
    id: "cust2",
    firstName: "Jennifer",
    lastName: "Smith",
    email: "jennifer.smith@email.com",
    phone: "+1-555-222-3333",
    address: "456 Maple Ave",
    city: "Riverdale",
    state: "NY",
    zip: "10471",
    country: "USA",
    type: "individual",
    joinDate: "2022-05-22",
    status: "active",
    totalPurchases: 1890.50,
    lastPurchase: "2023-09-18",
    loyaltyPoints: 190,
    notes: "Prefers Samsung devices"
  },
  {
    id: "cust3",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@techinc.com",
    phone: "+1-555-333-4444",
    address: "789 Pine St",
    city: "Portland",
    state: "OR",
    zip: "97205",
    country: "USA",
    type: "business",
    company: "Tech Inc.",
    joinDate: "2022-01-10",
    status: "active",
    totalPurchases: 8750.25,
    lastPurchase: "2023-09-05",
    loyaltyPoints: 875,
    notes: "Corporate account, requires invoicing"
  },
  {
    id: "cust4",
    firstName: "Sarah",
    lastName: "Davis",
    email: "sarah.davis@email.com",
    phone: "+1-555-444-5555",
    address: "101 Elm St",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "USA",
    type: "individual",
    joinDate: "2022-08-05",
    status: "active",
    totalPurchases: 950.00,
    lastPurchase: "2023-08-28",
    loyaltyPoints: 95,
    notes: "Interested in gaming accessories"
  },
  {
    id: "cust5",
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@schooldist.edu",
    phone: "+1-555-555-6666",
    address: "202 Cedar Rd",
    city: "Boston",
    state: "MA",
    zip: "02108",
    country: "USA",
    type: "business",
    company: "School District 5",
    joinDate: "2022-06-15",
    status: "active",
    totalPurchases: 12500.75,
    lastPurchase: "2023-08-15",
    loyaltyPoints: 1250,
    notes: "Educational discount applies"
  },
  {
    id: "cust6",
    firstName: "Jessica",
    lastName: "Miller",
    email: "jessica.miller@email.com",
    phone: "+1-555-666-7777",
    address: "303 Birch Ln",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    country: "USA",
    type: "individual",
    joinDate: "2022-09-20",
    status: "inactive",
    totalPurchases: 450.25,
    lastPurchase: "2023-01-15",
    loyaltyPoints: 45,
    notes: "Has not made purchases in 6+ months"
  },
  {
    id: "cust7",
    firstName: "Christopher",
    lastName: "Taylor",
    email: "christopher.taylor@email.com",
    phone: "+1-555-777-8888",
    address: "404 Spruce Dr",
    city: "Denver",
    state: "CO",
    zip: "80202",
    country: "USA",
    type: "individual",
    joinDate: "2022-11-10",
    status: "active",
    totalPurchases: 3275.50,
    lastPurchase: "2023-09-20",
    loyaltyPoints: 330,
    notes: "Prefers high-end laptops"
  },
  {
    id: "cust8",
    firstName: "Amanda",
    lastName: "Thomas",
    email: "amanda.thomas@shoprite.com",
    phone: "+1-555-888-9999",
    address: "505 Walnut St",
    city: "Chicago",
    state: "IL",
    zip: "60601",
    country: "USA",
    type: "business",
    company: "Shop-Rite",
    joinDate: "2022-02-28",
    status: "active",
    totalPurchases: 6750.00,
    lastPurchase: "2023-09-10",
    loyaltyPoints: 675,
    notes: "Monthly ordering of tablets for POS"
  }
];

// Sales
export const SALES: Sale[] = [
  {
    id: "sale1",
    customerId: "cust1",
    orderDate: "2023-09-12",
    items: [
      {
        id: "si1",
        productId: "prod1",
        quantity: 1,
        unitPrice: 999,
        discount: 0,
        totalPrice: 999
      },
      {
        id: "si2",
        productId: "prod5",
        quantity: 1,
        unitPrice: 249,
        discount: 0,
        totalPrice: 249
      }
    ],
    subtotal: 1248,
    taxAmount: 99.84,
    discountAmount: 0,
    totalAmount: 1347.84,
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    deliveryStatus: "delivered",
    notes: "Regular customer, added AppleCare"
  },
  {
    id: "sale2",
    customerId: "cust2",
    orderDate: "2023-09-18",
    items: [
      {
        id: "si3",
        productId: "prod2",
        quantity: 1,
        unitPrice: 899,
        discount: 50,
        totalPrice: 849
      },
      {
        id: "si4",
        productId: "prod7",
        quantity: 2,
        unitPrice: 59.99,
        discount: 0,
        totalPrice: 119.98
      }
    ],
    subtotal: 968.98,
    taxAmount: 77.52,
    discountAmount: 50,
    totalAmount: 1046.50,
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    deliveryStatus: "delivered",
    notes: "Applied promotional discount on Galaxy S23"
  },
  {
    id: "sale3",
    customerId: "cust3",
    orderDate: "2023-09-05",
    items: [
      {
        id: "si5",
        productId: "prod4",
        quantity: 5,
        unitPrice: 1399,
        discount: 500,
        totalPrice: 6495
      },
      {
        id: "si6",
        productId: "prod6",
        quantity: 5,
        unitPrice: 399,
        discount: 100,
        totalPrice: 1895
      }
    ],
    subtotal: 8390,
    taxAmount: 671.20,
    discountAmount: 600,
    totalAmount: 8461.20,
    paymentMethod: "credit",
    paymentStatus: "paid",
    deliveryStatus: "delivered",
    notes: "Corporate order for new office setup"
  },
  {
    id: "sale4",
    customerId: "cust7",
    orderDate: "2023-09-20",
    items: [
      {
        id: "si7",
        productId: "prod3",
        quantity: 1,
        unitPrice: 1199,
        discount: 0,
        totalPrice: 1199
      },
      {
        id: "si8",
        productId: "prod10",
        quantity: 1,
        unitPrice: 99.99,
        discount: 0,
        totalPrice: 99.99
      }
    ],
    subtotal: 1298.99,
    taxAmount: 103.92,
    discountAmount: 0,
    totalAmount: 1402.91,
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    deliveryStatus: "delivered",
    notes: "Customer purchased extended warranty"
  },
  {
    id: "sale5",
    customerId: "cust8",
    orderDate: "2023-09-10",
    items: [
      {
        id: "si9",
        productId: "prod9",
        quantity: 8,
        unitPrice: 699,
        discount: 400,
        totalPrice: 5192
      }
    ],
    subtotal: 5192,
    taxAmount: 415.36,
    discountAmount: 400,
    totalAmount: 5607.36,
    paymentMethod: "credit",
    paymentStatus: "paid",
    deliveryStatus: "delivered",
    notes: "Bulk order for store tablets"
  }
];

// Purchase Orders
export const PURCHASE_ORDERS: PurchaseOrder[] = [
  {
    id: "po1",
    supplierId: "sup1",
    orderDate: "2023-09-01",
    expectedDeliveryDate: "2023-09-15",
    status: "received",
    items: [
      {
        id: "poi1",
        productId: "prod1",
        quantity: 10,
        unitPrice: 799,
        totalPrice: 7990
      },
      {
        id: "poi2",
        productId: "prod5",
        quantity: 20,
        unitPrice: 179,
        totalPrice: 3580
      }
    ],
    totalAmount: 11570,
    paymentStatus: "paid",
    paymentDueDate: "2023-10-01",
    notes: "Regular stock replenishment"
  },
  {
    id: "po2",
    supplierId: "sup2",
    orderDate: "2023-08-25",
    expectedDeliveryDate: "2023-09-10",
    status: "received",
    items: [
      {
        id: "poi3",
        productId: "prod2",
        quantity: 8,
        unitPrice: 699,
        totalPrice: 5592
      },
      {
        id: "poi4",
        productId: "prod6",
        quantity: 5,
        unitPrice: 299,
        totalPrice: 1495
      }
    ],
    totalAmount: 7087,
    paymentStatus: "paid",
    paymentDueDate: "2023-10-09",
    notes: "Expedited shipping requested"
  },
  {
    id: "po3",
    supplierId: "sup3",
    orderDate: "2023-09-05",
    expectedDeliveryDate: "2023-09-25",
    status: "submitted",
    items: [
      {
        id: "poi5",
        productId: "prod4",
        quantity: 5,
        unitPrice: 1099,
        totalPrice: 5495
      }
    ],
    totalAmount: 5495,
    paymentStatus: "pending",
    paymentDueDate: "2023-11-04",
    notes: "Back-to-school promotion stock"
  },
  {
    id: "po4",
    supplierId: "sup1",
    orderDate: "2023-09-15",
    expectedDeliveryDate: "2023-10-01",
    status: "submitted",
    items: [
      {
        id: "poi6",
        productId: "prod8",
        quantity: 10,
        unitPrice: 449,
        totalPrice: 4490
      }
    ],
    totalAmount: 4490,
    paymentStatus: "pending",
    paymentDueDate: "2023-10-15",
    notes: "New iPad model release preparation"
  }
];

// Financial
export const ACCOUNTS: Account[] = [
  {
    id: "acc1",
    name: "Main Operations",
    type: "bank",
    currency: "USD",
    balance: 125750.45,
    openingBalance: 100000,
    openingDate: "2021-01-01",
    status: "active",
    notes: "Primary business account"
  },
  {
    id: "acc2",
    name: "Payroll Account",
    type: "bank",
    currency: "USD",
    balance: 45250.80,
    openingBalance: 50000,
    openingDate: "2021-01-01",
    status: "active",
    notes: "Used for employee salaries and benefits"
  },
  {
    id: "acc3",
    name: "Petty Cash",
    type: "cash",
    currency: "USD",
    balance: 750.25,
    openingBalance: 1000,
    openingDate: "2021-01-01",
    status: "active",
    notes: "Office expenses and small purchases"
  },
  {
    id: "acc4",
    name: "Company Credit Card",
    type: "credit_card",
    currency: "USD",
    balance: -2450.75,
    openingBalance: 0,
    openingDate: "2021-01-15",
    status: "active",
    notes: "Business expenses and online purchases"
  },
  {
    id: "acc5",
    name: "Savings",
    type: "bank",
    currency: "USD",
    balance: 75000.00,
    openingBalance: 50000,
    openingDate: "2021-06-01",
    status: "active",
    notes: "Emergency fund and future expansion"
  }
];

// Transactions
export const TRANSACTIONS: Transaction[] = [
  {
    id: "tr1",
    date: "2023-09-15",
    type: "income",
    category: "Sales",
    amount: 8461.20,
    account: "acc1",
    description: "Payment for corporate order #sale3",
    reference: "INV-2023-0905",
    status: "completed",
    attachments: []
  },
  {
    id: "tr2",
    date: "2023-09-12",
    type: "income",
    category: "Sales",
    amount: 1347.84,
    account: "acc1",
    description: "Payment for order #sale1",
    reference: "INV-2023-0912",
    status: "completed",
    attachments: []
  },
  {
    id: "tr3",
    date: "2023-09-10",
    type: "expense",
    category: "Inventory",
    amount: 11570,
    account: "acc1",
    description: "Payment for purchase order #po1",
    reference: "PO-2023-0901",
    status: "completed",
    attachments: []
  },
  {
    id: "tr4",
    date: "2023-09-05",
    type: "expense",
    category: "Payroll",
    amount: 15750.35,
    account: "acc2",
    description: "Employee salaries for August 2023",
    reference: "PAY-2023-08",
    status: "completed",
    attachments: []
  },
  {
    id: "tr5",
    date: "2023-09-02",
    type: "expense",
    category: "Utilities",
    amount: 850.45,
    account: "acc1",
    description: "Electricity and water bill for August",
    reference: "UTIL-2023-08",
    status: "completed",
    attachments: []
  },
  {
    id: "tr6",
    date: "2023-09-01",
    type: "expense",
    category: "Rent",
    amount: 3500,
    account: "acc1",
    description: "Store rent for September 2023",
    reference: "RENT-2023-09",
    status: "completed",
    attachments: []
  },
  {
    id: "tr7",
    date: "2023-08-28",
    type: "expense",
    category: "Marketing",
    amount: 1250.75,
    account: "acc4",
    description: "Social media advertising for September",
    reference: "MKT-2023-09",
    status: "completed",
    attachments: []
  },
  {
    id: "tr8",
    date: "2023-08-25",
    type: "expense",
    category: "Inventory",
    amount: 7087,
    account: "acc1",
    description: "Payment for purchase order #po2",
    reference: "PO-2023-0825",
    status: "completed",
    attachments: []
  }
];

// Projects
export const PROJECTS: Project[] = [
  {
    id: "proj1",
    name: "Store Renovation",
    description: "Renovate the main store layout to improve customer flow and product visibility",
    manager: "emp1",
    team: ["emp2", "emp5"],
    startDate: "2023-10-01",
    deadline: "2023-10-15",
    status: "planning",
    progress: 0,
    budget: 15000,
    expenses: 0,
    priority: "high",
    tasks: [
      {
        id: "task1",
        projectId: "proj1",
        title: "Design store layout",
        description: "Create a new floor plan to optimize space and customer flow",
        assignedTo: "emp1",
        startDate: "2023-10-01",
        dueDate: "2023-10-03",
        status: "todo",
        priority: "high",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task2",
        projectId: "proj1",
        title: "Order display fixtures",
        description: "Purchase new display units for improved product presentation",
        assignedTo: "emp5",
        startDate: "2023-10-04",
        dueDate: "2023-10-06",
        status: "todo",
        priority: "medium",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task3",
        projectId: "proj1",
        title: "Schedule installation",
        description: "Coordinate with contractors for installation during off-hours",
        assignedTo: "emp1",
        startDate: "2023-10-07",
        dueDate: "2023-10-09",
        status: "todo",
        priority: "medium",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task4",
        projectId: "proj1",
        title: "Move inventory",
        description: "Reorganize stock according to new layout",
        assignedTo: "emp5",
        startDate: "2023-10-10",
        dueDate: "2023-10-12",
        status: "todo",
        priority: "high",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task5",
        projectId: "proj1",
        title: "Finalize and launch",
        description: "Complete final adjustments and reopen store",
        assignedTo: "emp1",
        startDate: "2023-10-13",
        dueDate: "2023-10-15",
        status: "todo",
        priority: "high",
        progress: 0,
        comments: [],
        attachments: []
      }
    ],
    documents: [],
    notes: "Need to ensure minimal disruption to regular business operations"
  },
  {
    id: "proj2",
    name: "Holiday Season Preparation",
    description: "Plan and execute marketing campaign and inventory management for upcoming holiday season",
    manager: "emp1",
    team: ["emp2", "emp3", "emp5"],
    startDate: "2023-10-15",
    deadline: "2023-11-15",
    status: "planning",
    progress: 0,
    budget: 25000,
    expenses: 0,
    priority: "medium",
    tasks: [
      {
        id: "task6",
        projectId: "proj2",
        title: "Market research",
        description: "Analyze previous holiday season trends and new product popularity",
        assignedTo: "emp2",
        startDate: "2023-10-15",
        dueDate: "2023-10-20",
        status: "todo",
        priority: "high",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task7",
        projectId: "proj2",
        title: "Develop promotional strategy",
        description: "Create special offers and bundle deals for holiday shoppers",
        assignedTo: "emp2",
        startDate: "2023-10-21",
        dueDate: "2023-10-28",
        status: "todo",
        priority: "high",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task8",
        projectId: "proj2",
        title: "Order additional inventory",
        description: "Stock up on popular items to meet increased demand",
        assignedTo: "emp5",
        startDate: "2023-10-29",
        dueDate: "2023-11-05",
        status: "todo",
        priority: "medium",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task9",
        projectId: "proj2",
        title: "Update website and social media",
        description: "Create holiday-themed online presence with special offers",
        assignedTo: "emp3",
        startDate: "2023-11-01",
        dueDate: "2023-11-10",
        status: "todo",
        priority: "medium",
        progress: 0,
        comments: [],
        attachments: []
      },
      {
        id: "task10",
        projectId: "proj2",
        title: "Staff training",
        description: "Train staff on holiday promotions and extended hours",
        assignedTo: "emp1",
        startDate: "2023-11-05",
        dueDate: "2023-11-15",
        status: "todo",
        priority: "medium",
        progress: 0,
        comments: [],
        attachments: []
      }
    ],
    documents: [],
    notes: "Focus on exclusive deals for high-margin accessories"
  }
];

// Tasks (standalone tasks not linked to projects)
export const TASKS: Task[] = [
  {
    id: "standalone1",
    projectId: "",
    title: "Monthly inventory audit",
    description: "Conduct full inventory count and reconciliation",
    assignedTo: "emp5",
    startDate: "2023-09-25",
    dueDate: "2023-09-30",
    status: "todo",
    priority: "high",
    progress: 0,
    comments: [],
    attachments: []
  },
  {
    id: "standalone2",
    projectId: "",
    title: "Employee performance reviews",
    description: "Complete quarterly performance evaluations for all staff",
    assignedTo: "emp1",
    startDate: "2023-09-28",
    dueDate: "2023-10-05",
    status: "todo",
    priority: "medium",
    progress: 0,
    comments: [],
    attachments: []
  },
  {
    id: "standalone3",
    projectId: "",
    title: "Update website product listings",
    description: "Ensure all new products are listed with correct descriptions and pricing",
    assignedTo: "emp3",
    startDate: "2023-09-22",
    dueDate: "2023-09-25",
    status: "in_progress",
    priority: "medium",
    progress: 50,
    comments: [],
    attachments: []
  }
];

// Assets
export const ASSETS: Asset[] = [
  {
    id: "asset1",
    name: "Point of Sale System",
    category: "Electronics",
    serialNumber: "POS-2021-001",
    purchaseDate: "2021-01-15",
    purchasePrice: 2500,
    assignedTo: "emp1",
    location: "Main Store",
    status: "in_use",
    condition: "good",
    warrantyExpiry: "2024-01-15",
    maintenanceSchedule: [
      {
        id: "maint1",
        assetId: "asset1",
        type: "routine",
        date: "2023-07-15",
        cost: 150,
        provider: "TechSupport Inc.",
        description: "Regular system check and software update",
        status: "completed"
      },
      {
        id: "maint2",
        assetId: "asset1",
        type: "routine",
        date: "2024-01-15",
        cost: 150,
        provider: "TechSupport Inc.",
        description: "Scheduled maintenance before warranty expires",
        status: "scheduled"
      }
    ],
    depreciation: {
      method: "straight-line",
      rate: 20,
      currentValue: 1500
    },
    notes: "Main checkout system, critical for operations",
    image: "https://images.pexels.com/photos/9395308/pexels-photo-9395308.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: "asset2",
    name: "Store Display iPad",
    category: "Electronics",
    serialNumber: "IPAD-2022-002",
    purchaseDate: "2022-03-10",
    purchasePrice: 599,
    assignedTo: "emp2",
    location: "Main Store",
    status: "in_use",
    condition: "excellent",
    warrantyExpiry: "2023-03-10",
    maintenanceSchedule: [],
    depreciation: {
      method: "straight-line",
      rate: 33,
      currentValue: 400
    },
    notes: "Used for product demos and customer sign-ups",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: "asset3",
    name: "Office Laptop - Dell XPS",
    category: "Electronics",
    serialNumber: "DELL-2022-003",
    purchaseDate: "2022-05-20",
    purchasePrice: 1299,
    assignedTo: "emp4",
    location: "Office",
    status: "in_use",
    condition: "excellent",
    warrantyExpiry: "2025-05-20",
    maintenanceSchedule: [],
    depreciation: {
      method: "straight-line",
      rate: 25,
      currentValue: 1000
    },
    notes: "Used for accounting and financial reporting",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: "asset4",
    name: "Inventory Scanner",
    category: "Electronics",
    serialNumber: "SCAN-2022-004",
    purchaseDate: "2022-02-15",
    purchasePrice: 499,
    assignedTo: "emp5",
    location: "Warehouse",
    status: "in_use",
    condition: "good",
    warrantyExpiry: "2024-02-15",
    maintenanceSchedule: [
      {
        id: "maint3",
        assetId: "asset4",
        type: "repair",
        date: "2023-06-10",
        cost: 75,
        provider: "TechSupport Inc.",
        description: "Battery replacement",
        status: "completed"
      }
    ],
    depreciation: {
      method: "straight-line",
      rate: 25,
      currentValue: 350
    },
    notes: "Used for inventory management and stock taking",
    image: "https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: "asset5",
    name: "Office Furniture Set",
    category: "Furniture",
    serialNumber: "FURN-2021-005",
    purchaseDate: "2021-01-15",
    purchasePrice: 3500,
    assignedTo: "",
    location: "Office",
    status: "in_use",
    condition: "good",
    warrantyExpiry: "2023-01-15",
    maintenanceSchedule: [],
    depreciation: {
      method: "straight-line",
      rate: 10,
      currentValue: 2800
    },
    notes: "Complete set of desks, chairs, and storage cabinets",
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }
];

// Documents
export const DOCUMENTS: Document[] = [
  {
    id: "doc1",
    name: "Business License",
    type: "pdf",
    category: "Legal",
    path: "/documents/legal/business_license_2023.pdf",
    size: 1250000,
    uploadedBy: "emp1",
    uploadDate: "2023-01-05",
    lastModified: "2023-01-05",
    status: "active",
    tags: ["legal", "compliance", "license"],
    accessLevel: "restricted",
    allowedUsers: ["emp1", "emp4"]
  },
  {
    id: "doc2",
    name: "Employee Handbook",
    type: "pdf",
    category: "HR",
    path: "/documents/hr/employee_handbook_2023.pdf",
    size: 3500000,
    uploadedBy: "emp1",
    uploadDate: "2023-01-15",
    lastModified: "2023-02-10",
    status: "active",
    tags: ["hr", "policies", "handbook"],
    accessLevel: "internal",
    allowedUsers: []
  },
  {
    id: "doc3",
    name: "Supplier Agreement - Apple",
    type: "docx",
    category: "Contracts",
    path: "/documents/contracts/apple_agreement_2023.docx",
    size: 980000,
    uploadedBy: "emp1",
    uploadDate: "2023-01-20",
    lastModified: "2023-01-20",
    status: "active",
    tags: ["supplier", "contract", "apple"],
    accessLevel: "confidential",
    allowedUsers: ["emp1", "emp4", "emp5"]
  },
  {
    id: "doc4",
    name: "Store Renovation Plan",
    type: "pdf",
    category: "Projects",
    path: "/documents/projects/store_renovation_plan.pdf",
    size: 4500000,
    uploadedBy: "emp1",
    uploadDate: "2023-09-15",
    lastModified: "2023-09-15",
    status: "active",
    tags: ["project", "renovation", "planning"],
    accessLevel: "internal",
    allowedUsers: []
  },
  {
    id: "doc5",
    name: "Q2 Financial Report",
    type: "xlsx",
    category: "Financial",
    path: "/documents/financial/q2_financial_report.xlsx",
    size: 1800000,
    uploadedBy: "emp4",
    uploadDate: "2023-07-15",
    lastModified: "2023-07-20",
    status: "active",
    tags: ["financial", "quarterly", "report"],
    accessLevel: "confidential",
    allowedUsers: ["emp1", "emp4"]
  }
];

// Support Tickets
export const SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: "ticket1",
    customerId: "cust1",
    subject: "iPhone not charging properly",
    description: "Customer reports that their iPhone 15 Pro purchased last week isn't charging consistently with the included cable.",
    category: "Product Issue",
    priority: "high",
    status: "in_progress",
    assignedTo: "emp3",
    createdDate: "2023-09-18",
    updatedDate: "2023-09-19",
    resolvedDate: "",
    comments: [
      {
        id: "comm1",
        taskId: "ticket1",
        userId: "emp3",
        content: "Contacted customer to troubleshoot. Will test with different cable and adapter.",
        timestamp: "2023-09-19"
      }
    ],
    attachments: []
  },
  {
    id: "ticket2",
    customerId: "cust4",
    subject: "Request for gaming accessory recommendations",
    description: "Customer is looking for recommendations on gaming keyboards and mice compatible with their new laptop.",
    category: "Sales Inquiry",
    priority: "medium",
    status: "new",
    assignedTo: "",
    createdDate: "2023-09-20",
    updatedDate: "2023-09-20",
    resolvedDate: "",
    comments: [],
    attachments: []
  },
  {
    id: "ticket3",
    customerId: "cust2",
    subject: "Warranty claim for Samsung Galaxy S23",
    description: "Screen developed dead pixels after 3 months of use. Customer requesting warranty service.",
    category: "Warranty",
    priority: "high",
    status: "waiting",
    assignedTo: "emp2",
    createdDate: "2023-09-15",
    updatedDate: "2023-09-17",
    resolvedDate: "",
    comments: [
      {
        id: "comm2",
        taskId: "ticket3",
        userId: "emp2",
        content: "Submitted claim to Samsung. Waiting for approval. Estimated 3-5 business days for response.",
        timestamp: "2023-09-17"
      }
    ],
    attachments: []
  },
  {
    id: "ticket4",
    customerId: "cust7",
    subject: "Software installation assistance",
    description: "Customer needs help installing specialized software on their new MacBook Air.",
    category: "Technical Support",
    priority: "medium",
    status: "resolved",
    assignedTo: "emp3",
    createdDate: "2023-09-10",
    updatedDate: "2023-09-12",
    resolvedDate: "2023-09-12",
    comments: [
      {
        id: "comm3",
        taskId: "ticket4",
        userId: "emp3",
        content: "Provided step-by-step instructions via email.",
        timestamp: "2023-09-11"
      },
      {
        id: "comm4",
        taskId: "ticket4",
        userId: "emp3",
        content: "Customer confirmed successful installation. Issue resolved.",
        timestamp: "2023-09-12"
      }
    ],
    attachments: []
  }
];

// Dashboard stats for homepage
export const DASHBOARD_STATS: DashboardStats = {
  sales: {
    today: 2450.75,
    thisWeek: 11874.65,
    thisMonth: 42850.40,
    lastMonth: 38750.25,
    growth: 10.58,
    salesByCategory: [
      { category: "Smartphones", amount: 18750.80 },
      { category: "Laptops", amount: 13850.25 },
      { category: "Tablets", amount: 5992.50 },
      { category: "Accessories", amount: 4256.85 }
    ],
    recentSales: SALES.slice(0, 5)
  },
  inventory: {
    totalProducts: 10,
    lowStock: 2,
    outOfStock: 0,
    topSelling: [
      { productId: "prod1", name: "iPhone 15 Pro", sold: 12 },
      { productId: "prod5", name: "AirPods Pro 2", sold: 9 },
      { productId: "prod3", name: "MacBook Air M2", sold: 7 },
      { productId: "prod2", name: "Samsung Galaxy S23", sold: 6 }
    ]
  },
  finance: {
    revenue: 42850.40,
    expenses: 29150.75,
    profit: 13699.65,
    cashflow: [
      { date: "2023-09-01", income: 4850.75, expense: 3500 },
      { date: "2023-09-05", income: 5750.25, expense: 15750.35 },
      { date: "2023-09-10", income: 14550.50, expense: 850.45 },
      { date: "2023-09-15", income: 9450.75, expense: 11570 },
      { date: "2023-09-20", income: 8248.15, expense: 2750.50 }
    ],
    accountBalances: [
      { account: "Main Operations", balance: 125750.45 },
      { account: "Payroll Account", balance: 45250.80 },
      { account: "Savings", balance: 75000.00 },
      { account: "Petty Cash", balance: 750.25 }
    ]
  },
  hr: {
    totalEmployees: 5,
    newHires: 0,
    onLeave: 1,
    upcomingReviews: 2
  },
  customers: {
    total: 8,
    new: 2,
    active: 7,
    inactive: 1
  },
  tasks: {
    total: 13,
    completed: 0,
    inProgress: 1,
    overdue: 0
  },
  tickets: {
    total: 4,
    open: 3,
    resolved: 1,
    responseTime: 6
  }
};