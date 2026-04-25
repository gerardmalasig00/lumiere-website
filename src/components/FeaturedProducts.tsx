import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Golden Croissant",
    price: "$5.50",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600",
  },
  {
    id: 2,
    name: "Velvet Macarons",
    price: "$18.00 / box",
    category: "Patisserie",
    image: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?q=80&w=600",
  },
  {
    id: 3,
    name: "Signature Sourdough",
    price: "$9.50",
    category: "Bread",
    image: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=600",
  },
  {
    id: 4,
    name: "Pistachio Éclair",
    price: "$7.00",
    category: "Patisserie",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=600",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-heading text-4xl font-medium md:text-5xl">
              Freshly Baked <span className="italic">Favorites</span>
            </h2>
            <p className="max-w-md font-sans text-foreground/60">
              A curated selection of our most loved artisanal creations, 
              handmade with premium ingredients.
            </p>
          </div>
          <a href="#" className="font-sans text-sm font-semibold tracking-widest text-accent hover:underline">
            VIEW ALL COLLECTIONS &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group overflow-hidden border border-primary/10 bg-white p-4 transition-all duration-300 hover:shadow-xl rounded-3xl">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#FAF7F2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 font-sans text-[9px] font-bold tracking-[0.15em] text-secondary hover:bg-white/90">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="font-heading text-lg font-medium text-foreground tracking-tight">{product.name}</h3>
                    <p className="font-sans text-sm font-semibold tracking-tighter text-primary">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Artistic Brand Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col justify-center items-center text-center p-8 bg-primary/10 rounded-3xl border border-primary/20 space-y-4"
          >
            <p className="font-heading italic text-xl text-secondary">"Honoring the grain and the hearth."</p>
            <span className="w-10 h-px bg-primary"></span>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Our Philosophy</p>
            <button className="mt-2 text-xs font-bold underline underline-offset-4 decoration-accent hover:text-accent transition-colors">
              OUR FULL STORY
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
