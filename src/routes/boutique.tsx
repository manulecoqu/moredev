import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import keyboardImg from "@/assets/product-keyboard.jpg";
import mouseImg from "@/assets/product-mouse.jpg";
import captureImg from "@/assets/product-capture.jpg";
import usbImg from "@/assets/product-usb.jpg";
import cablesImg from "@/assets/product-cables.jpg";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique — MOREDEV | Accessoires informatiques en Côte d'Ivoire" },
      { name: "description", content: "Claviers mécaniques, souris sans fil, clés USB, cartes de capture, câbles d'alimentation PC. Matériel sélectionné par MOREDEV." },
      { property: "og:title", content: "Boutique MOREDEV — Accessoires informatiques" },
      { property: "og:description", content: "Sélection d'accessoires informatiques haute performance." },
    ],
  }),
  component: BoutiquePage,
});

const products = [
  { img: keyboardImg, name: "Clavier mécanique Pro", category: "Périphériques", desc: "Switch Blue, rétroéclairage RGB", price: "À partir de 45 000 FCFA" },
  { img: mouseImg, name: "Souris sans fil ergonomique", category: "Périphériques", desc: "Capteur 16000 DPI, rechargeable", price: "À partir de 18 000 FCFA" },
  { img: captureImg, name: "Carte de capture vidéo 4K", category: "Streaming", desc: "HDMI Ultra HD, faible latence", price: "À partir de 65 000 FCFA" },
  { img: usbImg, name: "Clés USB 32 / 64 / 128 Go", category: "Stockage", desc: "USB 3.0, finition métal", price: "À partir de 5 000 FCFA" },
  { img: cablesImg, name: "Câbles d'alimentation PC", category: "Câblerie", desc: "Pour PC bureau & PC portable", price: "À partir de 3 500 FCFA" },
  { img: keyboardImg, name: "Pack bureau complet", category: "Pack", desc: "Clavier + souris + clé USB", price: "À partir de 60 000 FCFA" },
];

function BoutiquePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <section className="px-6 sm:px-8 pt-16 pb-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-6">Boutique</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Accessoires informatiques sélectionnés pour la performance, la durabilité et le confort.
        </p>
      </section>
      <section className="px-6 sm:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group rounded-2xl bg-brand-surface border border-white/5 overflow-hidden hover:border-brand-primary/40 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-brand-accent mb-2">{p.category}</div>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-brand-muted text-sm mb-4">{p.desc}</p>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-sm font-medium text-brand-text">{p.price}</span>
                  <Link to="/contact" className="text-sm text-brand-accent font-semibold hover:underline">Commander →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 rounded-2xl bg-brand-surface/50 border border-white/5 text-center">
          <p className="text-brand-muted mb-4">Vous cherchez un accessoire spécifique ?</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-brand-primary font-semibold rounded-xl text-white">Nous contacter</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}