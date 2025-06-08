"use client";

import { Calendar, Home, Inbox, LogOut, Settings, Globe } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "My Site",
    url: "/",
    icon: Globe,
  },
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Products",
    url: "/admin/product",
    icon: Inbox,
  },
  {
    title: "Bids",
    url: "/admin/bid",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/admin/setting",
    icon: Settings,
  },
  // {
  //   title: "Logout",
  //   url: "/admin/logout",
  //   icon: LogOut,
  // },
];

export function AppSidebar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    redirect("/");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem onClick={handleLogout}>
                <SidebarMenuButton>
                  <span className="flex justify-between items-center">
                    <LogOut />
                    <span>Logout</span>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
