import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <a href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <span className="text-background font-heading font-bold text-xl">L</span>
            </div>
            <span className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Lumière
            </span>
          </a>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:text-accent underline underline-offset-4 decoration-accent")}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:text-accent")}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#gallery" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:text-accent")}>
                Collection
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:text-accent")}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden rounded-full border-accent/20 px-6 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-accent/10 md:inline-flex">
            Order Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
