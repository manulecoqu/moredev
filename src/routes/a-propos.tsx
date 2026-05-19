import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import aboutImg from "@/assets/about-workspace.jpg";
import { Target, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — MOREDEV | Studio digital en Côte d'Ivoire" },
      { name: "description", content: "Découvrez MOREDEV : prestations numériques et vente d'accessoires informatiques. Notre mission, vision et valeurs." },
      { property: "og:title", content: "À propos de MOREDEV" },
      { property: "og:description", content: "Studio digital et fournisseur d'accessoires informatiques en Côte d'Ivoire." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <section className="px-6 sm:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-semibold mb-6">À PROPOS</div>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-6 leading-[1.05]">L'alliance du <span className="text-brand-primary">design</span> et du matériel.</h1>
            <p className="text-brand-muted text-lg leading-relaxed mb-4">
              MOREDEV est une entreprise basée en Côte d'Ivoire spécialisée dans la prestation de services numériques
              et la vente d'accessoires informatiques.
            </p>
            <p className="text-brand-muted leading-relaxed">
              De la conception d'un site internet à la livraison d'un clavier mécanique, nous accompagnons
              particuliers et entreprises avec exigence, réactivité et passion du détail.
            </p>
          </div>
          <img src={aboutImg} alt="Atelier MOREDEV" loading="lazy" width={1200} height={900} className="rounded-3xl ring-1 ring-white/10 object-cover" />
        </div>
      </section>

      <section className="px-6 sm:px-8 py-20 bg-brand-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Notre mission", desc: "Rendre la technologie et le design accessibles aux entreprises ambitieuses." },
            { icon: Eye, title: "Notre vision", desc: "Devenir le partenaire digital de référence en Afrique de l'Ouest." },
            { icon: Sparkles, title: "Nos valeurs", desc: "Qualité, transparence, créativité et engagement client." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 rounded-2xl bg-brand-bg border border-white/5">
              <Icon className="text-brand-accent mb-4" size={28} />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-brand-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { value: "50+", label: "Projets livrés" },
            { value: "200+", label: "Accessoires vendus" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "24h", label: "Délai de réponse" },
          ].map((s) => (
            <div key={s.label} className="p-8 rounded-2xl bg-brand-surface border border-white/5">
              <div className="text-4xl font-display font-extrabold text-brand-primary mb-2">{s.value}</div>
              <div className="text-brand-muted text-sm uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/contact" className="inline-block px-8 py-4 bg-brand-primary font-semibold rounded-xl text-white shadow-lg shadow-brand-primary/30">Travailler avec nous</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}