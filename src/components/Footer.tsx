import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="h-20 lg:h-24 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between border-t border-primary/10 bg-white/50 text-[10px] uppercase tracking-[0.2em] font-bold text-secondary/60">
      <div className="flex gap-8 mb-4 md:mb-0">
        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
      </div>
      <div className="mb-4 md:mb-0">© 2026 Lumière Bakery Stockholm</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-primary transition-colors">Store Locator</a>
        <a href="#" className="hover:text-primary transition-colors">Shipping</a>
      </div>
    </footer>
  );
}
