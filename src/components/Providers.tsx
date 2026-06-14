"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CartHydrator } from "@/components/CartHydrator";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            <CartHydrator />
            {children}
            <Sonner />
        </TooltipProvider>
    );
}
