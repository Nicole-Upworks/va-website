import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/logo1.png";

const footerLinks = {
  Services: [
    { label: "Law Firms", href: "#services" },
    { label: "Credit Repair Companies", href: "#services" },
    { label: "Business Funding & Financial", href: "#services" },
    { label: "Debt Relief & Settlement", href: "#services" },
    { label: "Real Estate & Investors", href: "#services" },
    { label: "Tax Preparation & Accounting", href: "#services" },
    { label: "Startups & Growing Businesses", href: "#services" },
    { label: "Spanish-Speaking Markets", href: "#services" },
  ],
  Company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeNav = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionNav = (hash) => {
    const id = hash.replace("#", "");

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderFooterLink = (item) => {
    if (item.href === "/") {
      return (
        <button
          type="button"
          onClick={handleHomeNav}
          className="text-left text-sm text-white/80 transition-colors hover:text-white"
        >
          {item.label}
        </button>
      );
    }

    if (item.href.startsWith("#")) {
      return (
        <button
          type="button"
          onClick={() => handleSectionNav(item.href)}
          className="text-left text-sm text-white/80 transition-colors hover:text-white"
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        to={item.href}
        className="text-sm text-white/80 transition-colors hover:text-white"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#289efd]/20 bg-gradient-to-b from-[#289efd] to-[#0a3f82] text-white">
      {/* Gradient highlight effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_420px_at_85%_45%,rgba(255,255,255,0.10),transparent_70%)]" />
      </div>

      {/* Background pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1350px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-block rounded-xl bg-white p-4 shadow-lg ring-2 ring-white/10">
              <img
                src={logo}
                alt="Eminence VA Solutions Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-white/90">
              Trained, managed virtual assistants ready to work from day one.
              Structured systems. Elite virtual talent. Built for growing
              businesses.
            </p>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
                {heading}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>{renderFooterLink(item)}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Support / Contact Info */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Support
            </h4>

            <div className="space-y-4">
              <a
                href="tel:+18888691744"
                className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <Phone className="h-4 w-4" />
                </span>
                <span>(888) 869-1744</span>
              </a>

              <a
                href="mailto:support@eminencevasolutions.com"
                className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">support@eminencevasolutions.com</span>
              </a>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-white/90">
                Follow us
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61585033890665"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/eminencevasolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://www.tiktok.com/@eminencevasolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M16.5 2a5.5 5.5 0 004.5 4.5v3a8.5 8.5 0 01-4.5-1.2v6.2a6 6 0 11-6-6c.34 0 .67.03 1 .08v3.05a3 3 0 10 3 3V2h2z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/eminence-virtual-assistance-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-white/70">
          <p className="text-xs">
            © {new Date().getFullYear()} Eminence VA Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}