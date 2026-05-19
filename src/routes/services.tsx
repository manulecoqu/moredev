import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code2, PenTool, Printer, CreditCard, Mail, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MOREDEV | Web, logo, print & cartes de visite" },
      { name: "description", content: "Conception de sites internet, logos, flyers, affiches, cartes de visite et cartes d'invitation. MOREDEV, votre studio digital en Côte d'Ivoire." },
      { property: "og:title", content: "Services MOREDEV — Web & design graphique" },
      { property: "og:description", content: "Tous nos services de prestation numérique et design graphique." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Conception de sites internet",
    desc: "Sites vitrines, e-commerce et plateformes sur mesure. Responsive, rapides, optimisés SEO.",
    features: ["Design moderne", "100% responsive", "SEO inclus", "Hébergement conseillé"],
  },
  {
    icon: PenTool,
    title: "Conception de logos",
    desc: "Identité visuelle forte et mémorable. Plusieurs propositions, livraison multi-formats.",
    features: ["3 concepts initiaux", "Révisions illimitées", "Fichiers source", "Charte basique"],
  },
  {
    icon: Printer,
    title: "Flyers & affiches",
    desc: "Supports imprimés impactants pour événements, promotions et communication.",
    features: ["Design original", "Formats variés", "Prêt à imprimer", "Versions digitales"],
  },
  {
    icon: Mail,
    title: "Cartes d'invitation",
    desc: "Mariages, conférences, lancements — des cartes qui marquent les esprits.",
    features: ["Designs premium", "Finitions soignées", "Personnalisation totale", "Délais courts"],
  },
  {
    icon: CreditCard,
    title: "Cartes de visite",
    desc: "Cartes professionnelles qui inspirent confiance dès le premier échange.",
    features: ["Recto/verso", "Papier qualité", "Plusieurs finitions", "Livraison rapide"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <section className="px-6 sm:px-8 pt-16 pb-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-6">Nos Services</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Une expertise complète pour donner vie à votre image de marque et à votre présence digitale.
        </p>
      </section>
      <section className="px-6 sm:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc, features }) => (
            <div key={title} className="p-8 rounded-2xl bg-brand-surface border border-white/5 hover:border-brand-primary/40 transition-all">
              <div className="size-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-accent mb-6">
                <Icon size={26} />
              </div>
              <h2 className="text-2xl font-display font-bold mb-3">{title}</h2>
              <p className="text-brand-muted mb-6">{desc}</p>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-brand-text/80">
                    <Check size={16} className="text-brand-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/contact" className="inline-block px-8 py-4 bg-brand-primary font-semibold rounded-xl text-white shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5 transition-transform">
            Demander un devis
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}