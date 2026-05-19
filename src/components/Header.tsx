import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import LogoImg from "@/assets/logo.jpg";
const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/boutique", label: "Boutique" },
  { to: "/a-propos", label: "À propos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 sm:px-8 py-5 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-display font-extrabold tracking-tighter flex items-center gap-2.5">
           <img src={LogoImg} alt="Logo" loading="lazy" width={80} height={80} style={{ borderRadius: "5%" }} className=" object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className="text-brand-text">M O R E D E V</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text/70">
          {links.slice(1).map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-brand-accent transition-colors" activeProps={{ className: "text-brand-accent" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="px-5 py-2.5 bg-brand-primary text-white rounded-full hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20">
            Contactez-nous
          </Link>
        </div>
        <button className="md:hidden text-brand-text" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4 bg-brand-bg">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-brand-text/80 hover:text-brand-accent">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="px-5 py-2.5 bg-brand-primary text-white rounded-full text-center">
            Contactez-nous
          </Link>
        </div>
      )}
    </nav>
  );
}