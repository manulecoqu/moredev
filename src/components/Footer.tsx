import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import LogoImg from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="px-6 sm:px-8 pt-20 pb-10 bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div>
          <div className="text-xl font-display font-extrabold tracking-tighter flex items-center gap-2.5 mb-4">
           <Link to="/" className="text-xl font-display font-extrabold tracking-tighter flex items-center gap-2.5">
           <img src={LogoImg} alt="Logo" loading="lazy" width={80} height={80} style={{ borderRadius: "5%" }} className=" object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className="text-brand-text">M O R E D E V</span>
        </Link>
          </div>
          <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
            Partenaire digital en Côte d'Ivoire : conception web, design graphique et accessoires informatiques haute performance.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-brand-text uppercase tracking-widest mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm text-brand-muted">
            <li><Link to="/" className="hover:text-brand-accent">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent">Services</Link></li>
            <li><Link to="/boutique" className="hover:text-brand-accent">Boutique</Link></li>
            <li><Link to="/a-propos" className="hover:text-brand-accent">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-brand-text uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-brand-muted">
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-accent" /> +225 07 67 08 08 20</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-accent" /> +225 05 66 20 01 05</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-accent" /> alexandrekdouffi@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted/60">
        <div>© {new Date().getFullYear()} MOREDEV CI. Tous droits réservés.</div>
        <div>Conçu avec exigence à Abidjan.</div>
      </div>
    </footer>
  );
}