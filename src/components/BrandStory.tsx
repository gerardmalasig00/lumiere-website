import { motion } from "motion/react";

export function BrandStory() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-8"
          >
            <span className="font-heading italic text-2xl text-accent">The Lumière Philosophy</span>
            <h2 className="font-heading text-4xl md:text-6xl font-medium text-foreground leading-tight">
              Honoring tradition, <br />
              <span className="italic text-primary">refining</span> the simple.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-primary/30" />
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="h-px w-8 bg-primary/30" />
            </div>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              At Lumière, we believe that the most profound experiences often come from 
              the simplest beginnings. Our heritage is rooted in Scandinavian minimalism, 
              where light, texture, and natural ingredients harmonzie to create something 
              truly extraordinary. Every pastry that leaves our oven is a testament 
              to the quiet beauty of artisanal craft.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle texture/decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 opacity-5 select-none">
        <span className="text-[20rem] font-heading font-black">L</span>
      </div>
    </section>
  );
}
