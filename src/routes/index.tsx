import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero-server.jpg";
import keyboardImg from "@/assets/product-keyboard.jpg";
import mouseImg from "@/assets/product-mouse.jpg";
import captureImg from "@/assets/product-capture.jpg";
import { Code2, PenTool, Printer, CreditCard, Shield, Zap, HeartHandshake, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOREDEV — Conception web & accessoires informatiques en Côte d'Ivoire" },
      { name: "description", content: "MOREDEV propulse votre présence numérique : sites internet, logos, flyers, cartes de visite et accessoires informatiques haute performance." },
      { property: "og:title", content: "MOREDEV — Partenaire digital en Côte d'Ivoire" },
      { property: "og:description", content: "Expertise web et matériel informatique pour entreprises ambitieuses." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Code2, title: "Sites Internet", desc: "Conception responsive optimisée pour la conversion et la vitesse." },
  { icon: PenTool, title: "Design Logo", desc: "Identités visuelles marquantes qui définissent votre marque." },
  { icon: Printer, title: "Flyers & Affiches", desc: "Supports imprimés professionnels pour vos événements." },
  { icon: CreditCard, title: "Cartes de Visite", desc: "Cartes premium et cartes d'invitation pour réseauter." },
];

const advantages = [
  { icon: Shield, title: "Qualité certifiée", desc: "Matériel testé et services rigoureusement validés." },
  { icon: Zap, title: "Livraison rapide", desc: "Délais courts et exécution efficace de chaque commande." },
  { icon: HeartHandshake, title: "Support dédié", desc: "Une équipe à votre écoute avant, pendant et après." },
  { icon: Truck, title: "Stock disponible", desc: "Accessoires informatiques prêts à être expédiés." },
];

const products = [
  { img: keyboardImg, name: "Clavier mécanique Pro", tag: "Switch Blue, rétroéclairé", status: "En stock" },
  { img: captureImg, name: "Carte de capture 4K", tag: "Ultra HD pour streaming", status: "Top vente" },
  { img: mouseImg, name: "Souris sans fil ergonomique", tag: "Précision 16000 DPI", status: "Nouveau" },
];

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <section className="px-6 sm:px-8 pt-12 lg:pt-20 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-semibold mb-6">
            VOTRE PARTENAIRE DIGITAL EN CÔTE D'IVOIRE
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-6">
            Propulsez votre <span className="text-brand-primary">présence</span> numérique.
          </h1>
          <p className="text-lg text-brand-text/60 mb-10 max-w-lg leading-relaxed">
            Expertise en conception web, design graphique et fourniture d'accessoires informatiques haute performance pour entreprises ambitieuses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="px-8 py-4 bg-brand-primary font-semibold rounded-xl hover:-translate-y-0.5 transition-transform shadow-lg shadow-brand-primary/30 text-white">
              Découvrir nos services
            </Link>
            <Link to="/boutique" className="px-8 py-4 bg-brand-surface border border-white/10 font-semibold rounded-xl hover:bg-white/5 transition-all">
              Visiter la boutique
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Infrastructure technologique" width={1200} height={1200} className="w-full aspect-square object-cover rounded-3xl ring-1 ring-white/10 relative z-10" />
          <div className="absolute -top-10 -right-10 size-64 bg-brand-primary/30 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 size-64 bg-brand-accent/20 blur-[100px] rounded-full" />
        </div>
      </section>

      <section className="px-6 sm:px-8 py-24 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Nos Services</h2>
              <p className="text-brand-muted max-w-md">Nous transformons vos idées en outils numériques puissants et esthétiques.</p>
            </div>
            <Link to="/services" className="text-brand-accent font-semibold flex items-center gap-2 hover:underline">
              Voir tous les services <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 rounded-2xl bg-brand-surface border border-white/5 hover:border-brand-primary/40 transition-all">
                <div className="size-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-accent mb-6">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Accessoires Informatiques</h2>
          <p className="text-brand-muted">Le meilleur matériel sélectionné pour votre productivité.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="group">
              <div className="w-full aspect-[4/3] bg-brand-surface ring-1 ring-white/5 rounded-2xl mb-6 overflow-hidden group-hover:ring-brand-primary/30 transition-all">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg">{p.name}</h4>
                  <p className="text-brand-muted text-sm">{p.tag}</p>
                </div>
                <div className="text-brand-accent font-bold text-sm">{p.status}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/boutique" className="inline-block px-8 py-4 bg-brand-surface border border-white/10 font-semibold rounded-xl hover:bg-white/5">
            Voir toute la boutique
          </Link>
        </div>
      </section>

      <section className="px-6 sm:px-8 py-24 bg-brand-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Pourquoi choisir MOREDEV ?</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Une approche intégrée : du conseil créatif au matériel livré, sans intermédiaire.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-brand-bg border border-white/5">
                <Icon className="text-brand-accent mb-4" size={28} />
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-12 text-center">Ils nous font confiance</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Aïcha K.", role: "Fondatrice, Studio Lumi", quote: "Site web livré rapidement et logo impeccable. MOREDEV a compris notre vision dès le brief." },
            { name: "Yannick T.", role: "Streamer", quote: "Carte de capture et clavier reçus en 48h. Qualité au rendez-vous, prix juste." },
            { name: "Cabinet ORION", role: "Conseil & audit", quote: "Cartes de visite premium et flyers d'événement. Le rendu a impressionné nos clients." },
          ].map((t) => (
            <div key={t.name} className="p-8 rounded-2xl bg-brand-surface border border-white/5">
              <p className="text-brand-text/90 leading-relaxed mb-6">« {t.quote} »</p>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-brand-muted">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-brand-primary to-brand-accent p-12 lg:p-16 text-center relative overflow-hidden">
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-white mb-4">Un projet en tête ?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Discutons-en. Devis gratuit sous 24h.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-brand-text transition-colors">
            Démarrer un projet
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}