"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back, John
        </h1>
        <p className="text-slate-500">
          Here's an overview of your weight loss journey
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border border-neutral-300"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
