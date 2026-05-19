import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MOREDEV | Devis et commandes" },
      { name: "description", content: "Contactez MOREDEV pour un devis personnalisé, une commande ou toute question. Téléphone, email et formulaire." },
      { property: "og:title", content: "Contacter MOREDEV" },
      { property: "og:description", content: "Demande de devis et informations de contact." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message envoyé ! Nous vous répondons sous 24h.");
      const form = e.target;

      const nom = form.nom.value;
      const email = form.email.value;
      const sujet = form.sujet.value;
      const message = form.message.value;

      const texte = `Bonjour MOREDEV 
    Nom: ${nom}
    Email: ${email}
    Sujet: ${sujet}
    Message: ${message}`;

    const url = `https://wa.me/2250767080820?text=${encodeURIComponent(texte)}`;

    window.open(url, "_blank");
        (e.target as HTMLFormElement).reset();
      }, 700);
  };
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <section className="px-6 sm:px-8 pt-16 pb-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-6">Parlons de votre projet</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Une question, une commande, un devis ? Nous vous répondons sous 24h.
        </p>
      </section>

      <section className="px-6 sm:px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <a href="tel:+2250767080820" className="flex items-center gap-4 p-6 rounded-2xl bg-brand-surface border border-white/5 hover:border-brand-primary/40 transition-all">
              <div className="size-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-accent shrink-0"><Phone size={20} /></div>
              <div>
                <div className="text-xs text-brand-muted uppercase tracking-widest">Téléphone</div>
                <div className="font-medium text-lg">+225 07 67 08 08 20</div>
                <div className="font-medium text-lg">+225 05 66 20 01 05</div>
              </div>
            </a>
            <a href="mailto:alexandrekdouffi@gmail.com" className="flex items-center gap-4 p-6 rounded-2xl bg-brand-surface border border-white/5 hover:border-brand-primary/40 transition-all">
              <div className="size-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-accent shrink-0"><Mail size={20} /></div>
              <div>
                <div className="text-xs text-brand-muted uppercase tracking-widest">Email</div>
                <div className="font-medium text-lg break-all">alexandrekdouffi@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-brand-surface border border-white/5">
              <div className="size-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-accent shrink-0"><MapPin size={20} /></div>
              <div>
                <div className="text-xs text-brand-muted uppercase tracking-widest">Localisation</div>
                <div className="font-medium text-lg">Abidjan, Côte d'Ivoire</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-brand-surface p-8 rounded-2xl border border-white/5 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required name="nom" placeholder="Votre nom" className="bg-brand-bg border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-all" />
              <input required type="email" name="email" placeholder="Email" className="bg-brand-bg border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-all" />
            </div>
            <input name="sujet" placeholder="Sujet" className="bg-brand-bg border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-all" />
            <textarea required name="message" placeholder="Parlez-nous de votre projet ou produit souhaité..." rows={6} className="bg-brand-bg border border-white/10 rounded-lg p-4 focus:outline-none focus:border-brand-primary transition-all resize-none" />
            <button disabled={sending} className="w-full py-4 bg-brand-primary font-bold rounded-lg hover:bg-brand-accent transition-all uppercase tracking-widest text-sm shadow-xl shadow-brand-primary/30 text-white disabled:opacity-60">
              {sending ? "Envoi…" : "Envoyer le message"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}