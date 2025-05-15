"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Home, LogOut, Settings, TrendingDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardSidebar() {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Weight Progress",
      icon: TrendingDown,
      href: "/dashboard/weight",
      active: pathname === "/dashboard/weight",
    },
    {
      label: "Shipments",
      icon: Box,
      href: "/dashboard/shipments",
      active: pathname === "/dashboard/shipments",
    },
  ];

 
  return (
    <div
      className={`${
        pathname === "/login"
          ? "hidden"
          : "md:flex hidden flex-col h-screen w-64 bg-white border-r border-r-neutral-300"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="font-bold text-xl pl-2">Acme Health</span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-[#F1F1F1] rounded-lg mb-6">
          <Avatar className="bg-neutral-50 rounded-full border border-neutral-300 w-10 h-10">
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-slate-500">Patient #12345</p>
          </div>
        </div>

        <nav className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900",
                route.active && "bg-[#F1F1F1] text-slate-900 font-medium"
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-t-neutral-300">
        <div className="flex flex-col gap-2">
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Button
            variant="ghost"
            className="justify-start px-3 text-slate-500 hover:text-slate-900"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}
