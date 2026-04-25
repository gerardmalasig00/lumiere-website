import { motion } from "motion/react";

const galleryImages = [
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000",
  "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1000",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000",
  "https://images.unsplash.com/photo-1481391243133-f96216d51db4?q=80&w=1000",
  "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000",
  "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1000",
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#FAF7F2] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium md:text-5xl">
            The Art of <span className="italic">Baking</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-foreground/60">
            A visual journey through our kitchen, where traditional methods 
            meet contemporary aesthetics.
          </p>
        </div>

        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Bakery creation ${index + 1}`}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-secondary/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
