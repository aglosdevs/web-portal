// User Interface
export interface UserI {
  fullName: string
  email: string;
  phoneNumber: string;
  role: string;
  profileImage?: string;  
}

// Product Interface

export interface productI {
  name: string;
  price: number;
  category: string;
  description: string;
  discount?: number; // It is possible for some products not to have discount?
}

// Order Interface 
export interface OrderI {
  item: [];
  price: number;
  status: string;
  qrCode: string;
  customerId: string;
  driverId: string;
}

// Notification Interface
export interface NotificationI {
  title: string;
  message: string;
  type: string;
  receiverId: string;
}

// Category Interface
export interface CategoryI {
  name: string;
}


