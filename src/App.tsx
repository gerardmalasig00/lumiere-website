import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BrandStory } from "./components/BrandStory";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex min-h-screen flex-col selection:bg-accent/30 selection:text-foreground">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-accent"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex-grow">
        <Hero />
        
        <section className="bg-background">
          <BrandStory />
        </section>

        <section id="collection">
          <FeaturedProducts />
        </section>

        <Gallery />

        {/* Subtle Call to Action */}
        <section className="bg-primary/5 py-24 text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground">
                Visit our <span className="italic">Stockholm</span> Atelier
              </h2>
              <p className="mx-auto max-w-xl font-sans text-foreground/60">
                Experience the warmth of fresh bakes and the aroma of 
                artisanal coffee in our flagship minimalist space.
              </p>
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-secondary px-8 py-4 text-sm font-semibold tracking-wider text-white transition-all hover:pr-12">
                <span>GET DIRECTIONS</span>
                <span className="absolute right-4 translate-x-10 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  &rarr;
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

