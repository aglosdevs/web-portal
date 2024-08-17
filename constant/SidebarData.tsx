// E-commers sidebae data

import {
  Globe,
  LayoutGrid,
  Package2,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Users,
} from "lucide-react";
import { ReactElement } from "react";

// sidebar data types
interface SidebarItem {
  id: number;
  label: string;
  icon: ReactElement;
  href: string;
}
// sidebar data
export const sidebarData: SidebarItem[] = [
  { id: 1, label: "Home", icon: <LayoutGrid className="h-4 w-4" />, href: "/" },
  {
    id: 2,
    label: "Customers",
    icon: <Users className="h-4 w-4" />,
    href: "/customers",
  },

  {
    id: 3,
    label: "Product",
    icon: <Package2 className="h-4 w-4" />,
    href: "/product",
  },
  {
    id: 4,
    label: "Order",
    icon: <ShoppingCart className="h-4 w-4" />,
    href: "/about",
  },
  {
    id: 5,
    label: "Tracking",
    icon: <Globe className="h-4 w-4" />,
    href: "/tracking",
  },

  {
    id: 6,
    label: "Discount",
    icon: <Tag className="h-4 w-4" />,
    href: "/discount",
  },
  //... add more items as needed
];
