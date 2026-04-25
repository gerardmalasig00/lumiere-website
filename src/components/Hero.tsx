import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="z-10 flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Artisanal Bakery
              </span>
              <h1 className="mt-4 font-heading text-5xl font-medium leading-tight text-foreground md:text-7xl lg:text-8xl">
                Poetry in <br />
                <span className="italic text-primary">Every Crumb</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg font-sans text-lg text-foreground/70 lg:mx-0">
                Experience the delicate balance of Scandinavian precision and 
                artisanal warmth. Crafted daily with heart and soul.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button className="h-14 rounded-full bg-secondary px-10 text-sm font-semibold tracking-wider text-white shadow-lg transition-all hover:scale-105 hover:bg-secondary/90">
                  EXPLORE OUR BAKES
                </Button>
                <Button variant="ghost" className="h-14 font-sans text-sm font-semibold tracking-wider hover:bg-accent/5">
                  VIEW TODAY&apos;S MENU &rarr;
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex-1 group"
          >
            {/* Decorative background element from theme */}
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl md:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000"
                alt="Artisanal Bread"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Soft decorative blur elements maintained for additional flair */}
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
