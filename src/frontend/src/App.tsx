import {
  ArrowRight,
  Award,
  Battery,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Droplets,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Shield,
  Smartphone,
  Star,
  ThumbsUp,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { BlogPost, Product, Review, Service } from "./backend.d";
import { AboutUsSection } from "./components/AboutUsSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { PhoneBrandsSection } from "./components/PhoneBrandsSection";
import { SpinWheelSection } from "./components/SpinWheel";
import {
  useGetAllBlogPosts,
  useGetAllProducts,
  useGetAllReviews,
  useGetAllServices,
  useGetStoreStats,
  useSeedData,
} from "./hooks/useQueries";

const PHONE = "+919692500609";
const PHONE_DISPLAY = "+91 96925 00609";

function AgateLogoSVG({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-label="AGATE logo"
    >
      <title>AGATE</title>
      <polygon
        points="20,2 38,12 38,28 20,38 2,28 2,12"
        fill="none"
        stroke="oklch(0.76 0.110 78)"
        strokeWidth="1.5"
      />
      <polygon
        points="20,6 34,14 34,26 20,34 6,26 6,14"
        fill="none"
        stroke="oklch(0.76 0.110 78 / 0.4)"
        strokeWidth="0.8"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="Orbitron, sans-serif"
        fontWeight="900"
        fontSize="16"
        fill="oklch(0.76 0.110 78)"
      >
        A
      </text>
      <circle cx="20" cy="20" r="18" fill="oklch(0.76 0.110 78 / 0.05)" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "Brands", id: "phone-brands" },
  { label: "Offers", id: "spin-wheel" },
  { label: "Accessories", id: "accessories" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "oklch(0.10 0.020 244 / 0.97)" : "transparent",
        borderBottom: scrolled
          ? "1px solid oklch(0.76 0.110 78 / 0.2)"
          : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <AgateLogoSVG size={40} />
          <div>
            <div
              className="font-orbitron font-black text-lg leading-none"
              style={{ color: "oklch(0.96 0.006 255)" }}
            >
              <span
                style={{
                  color: "oklch(0.76 0.110 78)",
                  textShadow: "0 0 10px oklch(0.76 0.110 78 / 0.6)",
                }}
              >
                AGATE
              </span>
            </div>
            <div
              className="text-[10px] tracking-widest"
              style={{ color: "oklch(0.73 0.020 255)" }}
            >
              ACCESSORIES & REPAIR
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((l) => (
            <button
              type="button"
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="nav-link"
              data-ocid="nav.link"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a
          href={`tel:${PHONE}`}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full btn-gold text-sm"
          data-ocid="nav.primary_button"
        >
          <Phone size={15} />
          <span>CALL NOW</span>
        </a>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.76 0.110 78)" }}
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden circuit-bg border-t px-4 py-4 flex flex-col gap-3"
          style={{ borderColor: "oklch(0.76 0.110 78 / 0.2)" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              type="button"
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="nav-link text-left py-2 border-b"
              style={{ borderColor: "oklch(0.23 0.038 236)" }}
              data-ocid="nav.link"
            >
              {l.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="btn-gold px-4 py-3 rounded-full text-center mt-2"
            data-ocid="nav.primary_button"
          >
            📞 CALL NOW: {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center circuit-bg overflow-hidden pt-20"
    >
      <div
        className="absolute left-0 right-0 h-0.5 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.76 0.110 78 / 0.3), transparent)",
          animation: "scan-move 8s linear infinite",
          zIndex: 2,
        }}
      />
      <div className="vignette absolute inset-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold animate-badge-pulse"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.76 0.110 78 / 0.15), oklch(0.70 0.130 77 / 0.1))",
              border: "1px solid oklch(0.76 0.110 78 / 0.6)",
              color: "oklch(0.88 0.090 84)",
            }}
            data-ocid="hero.card"
          >
            🎉 10% OFF on orders above ₹200! Limited Time Offer
          </div>

          <h1
            className="font-orbitron font-black text-3xl sm:text-4xl xl:text-5xl uppercase leading-tight mb-4"
            style={{ color: "oklch(0.96 0.006 255)", letterSpacing: "-0.01em" }}
          >
            DOORSTEP
            <br />
            <span className="animate-shimmer">PHONE REPAIR</span>
            <br />
            <span style={{ color: "oklch(0.73 0.020 255)", fontSize: "0.7em" }}>
              — EXPERT TECHNICIANS
            </span>
            <br />
            <span style={{ color: "oklch(0.73 0.020 255)", fontSize: "0.7em" }}>
              AT YOUR DOOR
            </span>
          </h1>

          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            Premium repairs & accessories delivered to you.
            <br />
            <span style={{ color: "oklch(0.76 0.110 78)" }}>
              Book now — we come to you.
            </span>
          </p>

          <div className="flex gap-6 mb-8">
            {[
              { v: "2+", l: "Years" },
              { v: "300+", l: "Customers" },
              { v: "500+", l: "Repairs" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div
                  className="font-orbitron font-bold text-xl"
                  style={{ color: "oklch(0.76 0.110 78)" }}
                >
                  {s.v}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE}`}
              className="btn-gold px-6 py-3 rounded-full flex items-center gap-2"
              data-ocid="hero.primary_button"
            >
              <Phone size={16} /> Book Repair Now
            </a>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("accessories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gold-outline px-6 py-3 rounded-full flex items-center gap-2"
              data-ocid="hero.secondary_button"
            >
              Browse Accessories <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative animate-float">
            <img
              src="/assets/generated/hero-phone.dim_800x600.png"
              alt="AGATE Doorstep Phone Repair Service"
              className="w-full max-w-md rounded-xl"
              style={{
                filter: "drop-shadow(0 0 30px oklch(0.76 0.110 78 / 0.4))",
              }}
            />
            <div
              className="absolute top-4 right-4 px-3 py-2 rounded text-xs font-orbitron animate-hud-blink"
              style={{
                background: "oklch(0.14 0.030 238 / 0.9)",
                border: "1px solid oklch(0.76 0.110 78 / 0.5)",
                color: "oklch(0.76 0.110 78)",
              }}
            >
              ◉ SYSTEM ONLINE
            </div>
            <div
              className="absolute bottom-8 left-4 px-3 py-2 rounded text-xs font-orbitron"
              style={{
                background: "oklch(0.14 0.030 238 / 0.9)",
                border: "1px solid oklch(0.76 0.110 78 / 0.5)",
                color: "oklch(0.88 0.090 84)",
              }}
            >
              ✓ CERTIFIED EXPERT
            </div>
          </div>
          <div
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.76 0.110 78 / 0.12) 0%, transparent 70%)",
              transform: "translate(-50%,-50%)",
              top: "50%",
              left: "50%",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

type StatsData = {
  yearsInBusiness: bigint;
  happyCustomers: bigint;
  repairsDone: bigint;
};

const STAT_LABELS = [
  "Years in Business",
  "Happy Customers",
  "Repairs Done",
  "Satisfaction",
];

function StatsBar({ stats }: { stats: StatsData }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const years = useCounter(Number(stats.yearsInBusiness), 1500, visible);
  const customers = useCounter(Number(stats.happyCustomers), 2000, visible);
  const repairs = useCounter(Number(stats.repairsDone), 2000, visible);

  const items = [
    { value: `${years}+`, label: STAT_LABELS[0], icon: <Clock size={20} /> },
    {
      value: `${customers}+`,
      label: STAT_LABELS[1],
      icon: <Users size={20} />,
    },
    { value: `${repairs}+`, label: STAT_LABELS[2], icon: <Wrench size={20} /> },
    { value: "100%", label: STAT_LABELS[3], icon: <ThumbsUp size={20} /> },
  ];

  return (
    <section
      ref={ref}
      className="py-10 relative"
      style={{ background: "oklch(0.13 0.028 240)" }}
    >
      <div className="gold-sep mb-0" />
      <div
        className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 py-6"
        data-ocid="stats.section"
      >
        {items.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center text-center"
            data-ocid={`stats.item.${i + 1}`}
          >
            <div style={{ color: "oklch(0.76 0.110 78)" }} className="mb-1">
              {s.icon}
            </div>
            <div
              className="font-orbitron font-black text-2xl md:text-3xl"
              style={{
                color: "oklch(0.76 0.110 78)",
                textShadow: "0 0 15px oklch(0.76 0.110 78 / 0.5)",
              }}
            >
              {s.value}
            </div>
            <div
              className="text-xs tracking-wider uppercase mt-1"
              style={{ color: "oklch(0.73 0.020 255)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="gold-sep" />
    </section>
  );
}

const SERVICE_ICONS = [
  <Smartphone key="smartphone" size={28} />,
  <Battery key="battery" size={28} />,
  <Shield key="shield" size={28} />,
  <Cpu key="cpu" size={28} />,
  <Wrench key="wrench" size={28} />,
  <Droplets key="droplets" size={28} />,
];

const SERVICE_IMAGES: Record<string, string> = {
  "Screen Replacement": "/assets/generated/service-screen.dim_600x400.jpg",
  "Battery Replacement": "/assets/generated/service-battery.dim_600x400.jpg",
  "Charging Port Repair": "/assets/generated/service-charging.dim_600x400.jpg",
  "Water Damage Repair": "/assets/generated/service-water.dim_600x400.jpg",
  "Software Troubleshooting":
    "/assets/generated/service-software.dim_600x400.jpg",
  "Back Panel Repair": "/assets/generated/service-back-panel.dim_600x400.jpg",
  "Speaker & Button Repair":
    "/assets/generated/service-speaker-button.dim_600x400.jpg",
};

function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-20 circuit-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            WHAT WE DO
          </div>
          <h2 className="section-title text-3xl md:text-4xl mb-3">
            OUR <span className="gold-word">DOORSTEP</span> SERVICES
          </h2>
          <p
            style={{ color: "oklch(0.73 0.020 255)" }}
            className="max-w-xl mx-auto text-sm"
          >
            We come to you. For complex repairs, we ensure your phone comes back
            perfect.
          </p>
        </div>
        <div className="gold-sep my-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const serviceImg = SERVICE_IMAGES[s.name];
            return (
              <div
                key={s.name}
                className="gold-card hud-corner rounded-lg overflow-hidden flex flex-col"
                data-ocid={`services.item.${i + 1}`}
              >
                {serviceImg && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={serviceImg}
                      alt={s.name}
                      className="w-full h-full object-cover"
                      style={{
                        filter: "brightness(0.85) saturate(1.1)",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 50%, oklch(0.14 0.030 238 / 0.95) 100%)",
                      }}
                    />
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-orbitron font-bold"
                      style={{
                        background: "oklch(0.76 0.110 78)",
                        color: "oklch(0.10 0.020 244)",
                      }}
                    >
                      DOORSTEP
                    </div>
                  </div>
                )}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "oklch(0.76 0.110 78 / 0.1)",
                        color: "oklch(0.76 0.110 78)",
                      }}
                    >
                      {SERVICE_ICONS[i % SERVICE_ICONS.length]}
                    </div>
                    <h3
                      className="font-orbitron font-bold text-sm uppercase tracking-wide"
                      style={{ color: "oklch(0.96 0.006 255)" }}
                    >
                      {s.name}
                    </h3>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.73 0.020 255)" }}
                  >
                    {s.description}
                  </p>
                  <div
                    className="flex items-center justify-between mt-auto pt-2 border-t"
                    style={{ borderColor: "oklch(0.23 0.038 236)" }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "oklch(0.76 0.110 78)" }}
                    >
                      {s.priceRange}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "oklch(0.73 0.020 255)" }}
                    >
                      ⏱ {s.durationEstimate}
                    </span>
                  </div>
                  {s.doorstepAvailable && (
                    <div
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "oklch(0.60 0.15 145)" }}
                    >
                      <MapPin size={11} /> Doorstep Available
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="mt-8 p-4 rounded-lg text-center text-sm"
          style={{
            background: "oklch(0.76 0.110 78 / 0.07)",
            border: "1px solid oklch(0.76 0.110 78 / 0.2)",
            color: "oklch(0.73 0.020 255)",
          }}
        >
          ⚠️{" "}
          <strong style={{ color: "oklch(0.88 0.090 84)" }}>
            Complex repairs
          </strong>{" "}
          may take 1-3 days. Your phone will be returned in perfect condition by
          our certified technicians.
        </div>
      </div>
    </section>
  );
}

const WHY_POINTS = [
  {
    icon: <MapPin size={22} />,
    title: "Doorstep Service",
    desc: "We come to your location. No need to travel to a repair shop.",
  },
  {
    icon: <Shield size={22} />,
    title: "Premium Quality Parts",
    desc: "Only certified, high-quality parts used in all repairs.",
  },
  {
    icon: <Award size={22} />,
    title: "Expert Certified Technicians",
    desc: "All our technicians are certified and background-verified.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "All Phone Brands Supported",
    desc: "iPhone, Samsung, OnePlus, Xiaomi, Realme, and more.",
  },
  {
    icon: <Zap size={22} />,
    title: "Fast Turnaround",
    desc: "Most repairs done in under an hour at your doorstep.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: "oklch(0.12 0.025 241)" }}>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            WHY US
          </div>
          <h2 className="section-title text-2xl md:text-3xl mb-6">
            WHY <span className="gold-word">CHOOSE</span> AGATE?
          </h2>
          <div className="flex flex-col gap-4">
            {WHY_POINTS.map((p, i) => (
              <div
                key={p.title}
                className="flex gap-4 items-start"
                data-ocid={`why.item.${i + 1}`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "oklch(0.76 0.110 78 / 0.1)",
                    color: "oklch(0.76 0.110 78)",
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h4
                    className="font-orbitron font-bold text-sm"
                    style={{ color: "oklch(0.96 0.006 255)" }}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "oklch(0.73 0.020 255)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={`tel:${PHONE}`}
              className="btn-gold px-6 py-3 rounded-full inline-flex items-center gap-2"
              data-ocid="why.primary_button"
            >
              <Phone size={15} /> Call Us Now
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative">
            <img
              src="/assets/generated/technician.dim_400x400.png"
              alt="Expert Certified Technician"
              className="rounded-2xl w-full max-w-sm"
              style={{
                filter: "drop-shadow(0 0 20px oklch(0.76 0.110 78 / 0.3))",
              }}
            />
            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full font-orbitron font-bold text-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.70 0.130 77))",
                color: "oklch(0.10 0.020 244)",
              }}
            >
              CERTIFIED ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCT_IMAGES: Record<string, string> = {
  "Fast Charging Cable":
    "/assets/generated/product-fast-charging-cable.dim_600x400.jpg",
  "Wireless Earbuds":
    "/assets/generated/product-wireless-earbuds-v2.dim_600x400.jpg",
  "Protective Phone Case":
    "/assets/generated/product-phone-case.dim_600x400.jpg",
  "Car Phone Holder":
    "/assets/generated/product-car-phone-holder.dim_600x400.jpg",
};

const PRODUCT_CATEGORY_ICONS: Record<string, string> = {
  Cases: "📱",
  "Screen Guards": "🛡️",
  Audio: "🎧",
  Cables: "⚡",
};

function AccessoriesSection({ products }: { products: Product[] }) {
  return (
    <section id="accessories" className="py-20 circuit-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            SHOP
          </div>
          <h2 className="section-title text-3xl md:text-4xl mb-3">
            PREMIUM <span className="gold-word">ACCESSORIES</span>
          </h2>
        </div>
        <div
          className="flex items-center justify-center gap-3 p-4 rounded-xl mb-8 animate-badge-pulse text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.76 0.110 78 / 0.15), oklch(0.70 0.130 77 / 0.08))",
            border: "1.5px solid oklch(0.76 0.110 78 / 0.7)",
          }}
          data-ocid="accessories.card"
        >
          <span className="text-2xl">🎉</span>
          <div>
            <span
              className="font-orbitron font-bold text-lg"
              style={{ color: "oklch(0.88 0.090 84)" }}
            >
              GET 10% OFF
            </span>
            <span
              style={{ color: "oklch(0.96 0.006 255)" }}
              className="ml-2 text-sm"
            >
              on all orders above{" "}
              <strong style={{ color: "oklch(0.76 0.110 78)" }}>₹200</strong>!
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="btn-gold px-3 py-1.5 rounded-full text-xs hidden sm:flex items-center gap-1"
            data-ocid="accessories.primary_button"
          >
            <Phone size={12} /> Order Now
          </a>
        </div>
        <div className="gold-sep mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="gold-card rounded-xl overflow-hidden flex flex-col"
              data-ocid={`accessories.item.${i + 1}`}
            >
              <div
                className="relative h-32 flex items-center justify-center"
                style={{ background: "oklch(0.17 0.040 235)" }}
              >
                {PRODUCT_IMAGES[p.name] ? (
                  <img
                    src={PRODUCT_IMAGES[p.name]}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl">
                    {PRODUCT_CATEGORY_ICONS[p.category] || "📦"}
                  </div>
                )}
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold font-orbitron"
                  style={{
                    background: "oklch(0.76 0.110 78)",
                    color: "oklch(0.10 0.020 244)",
                  }}
                >
                  PREMIUM
                </div>
              </div>
              <div className="p-3 flex flex-col gap-2 flex-1">
                <h3
                  className="font-semibold text-xs leading-tight"
                  style={{ color: "oklch(0.96 0.006 255)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-[10px]"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  {p.brandCompatibility}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="font-orbitron font-bold text-sm"
                    style={{ color: "oklch(0.76 0.110 78)" }}
                  >
                    ₹{p.price.toString()}
                  </span>
                </div>
                <a
                  href={`tel:${PHONE}`}
                  className="btn-gold px-3 py-1.5 rounded-full text-xs text-center"
                  data-ocid={`accessories.primary_button.${i + 1}`}
                >
                  ORDER NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const COMPUTER_ACCESSORIES = [
  {
    name: "USB Hub 4-Port",
    desc: "Multi-port USB 3.0 hub, plug & play",
    price: "₹699",
    img: "/assets/generated/comp-usb-hub.dim_400x400.jpg",
  },
  {
    name: 'Laptop Bag 15.6"',
    desc: "Slim protective laptop carrying bag",
    price: "₹999",
    img: "/assets/generated/comp-laptop-bag.dim_400x400.jpg",
  },
  {
    name: "Wireless Keyboard & Mouse",
    desc: "Combo set, 2.4GHz wireless, ergonomic",
    price: "₹1,299",
    img: "/assets/generated/comp-keyboard-mouse.dim_400x400.jpg",
  },
  {
    name: "USB Pen Drive 32GB",
    desc: "High-speed USB 3.0 flash drive",
    price: "₹399",
    img: "/assets/generated/comp-pendrive.dim_400x400.jpg",
  },
  {
    name: "HD Webcam 1080p",
    desc: "Plug & play USB webcam with mic",
    price: "₹1,499",
    img: "/assets/generated/comp-webcam.dim_400x400.jpg",
  },
  {
    name: "Laptop Cooling Pad",
    desc: "Dual fan cooling pad with LED lights",
    price: "₹849",
    img: "/assets/generated/comp-cooling-pad.dim_400x400.jpg",
  },
];

function ComputerAccessoriesSection() {
  return (
    <section
      id="computer-accessories"
      className="py-20"
      style={{ background: "oklch(0.13 0.028 240)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-4">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            LAPTOP & PC
          </div>
          <h2 className="section-title text-3xl md:text-4xl mb-3">
            COMPUTER <span className="gold-word">ACCESSORIES</span>
          </h2>
          <p
            className="text-sm max-w-lg mx-auto"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            Premium laptop & PC accessories to boost your productivity. All
            products available at your doorstep.
          </p>
        </div>
        <div className="gold-sep my-8" />

        {/* Hero Image */}
        <div className="max-w-3xl mx-auto mb-10">
          <img
            src="/assets/generated/computer-accessories-hero.dim_800x500.jpg"
            alt="Computer Accessories Collection"
            className="w-full rounded-xl object-cover"
            style={{
              maxHeight: "360px",
              filter: "drop-shadow(0 0 24px oklch(0.76 0.110 78 / 0.35))",
              border: "1px solid oklch(0.76 0.110 78 / 0.25)",
            }}
          />
        </div>

        {/* Promo Banner */}
        <div
          className="flex items-center justify-center gap-3 p-4 rounded-xl mb-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.76 0.110 78 / 0.12), oklch(0.70 0.130 77 / 0.07))",
            border: "1.5px solid oklch(0.76 0.110 78 / 0.5)",
          }}
          data-ocid="computer.card"
        >
          <Monitor size={20} style={{ color: "oklch(0.76 0.110 78)" }} />
          <div>
            <span
              className="font-orbitron font-bold"
              style={{ color: "oklch(0.88 0.090 84)" }}
            >
              PREMIUM COMPUTER ACCESSORIES
            </span>
            <span
              className="text-sm ml-2"
              style={{ color: "oklch(0.73 0.020 255)" }}
            >
              — Fast doorstep delivery across the city
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="btn-gold px-3 py-1.5 rounded-full text-xs hidden sm:flex items-center gap-1"
            data-ocid="computer.primary_button"
          >
            <Phone size={12} /> Order Now
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {COMPUTER_ACCESSORIES.map((item, i) => (
            <div
              key={item.name}
              className="gold-card rounded-xl overflow-hidden flex flex-col"
              data-ocid={`computer.item.${i + 1}`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.9) saturate(1.05)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, oklch(0.14 0.030 238 / 0.9) 100%)",
                  }}
                />
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold font-orbitron"
                  style={{
                    background: "oklch(0.76 0.110 78)",
                    color: "oklch(0.10 0.020 244)",
                  }}
                >
                  PREMIUM
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3
                  className="font-orbitron font-bold text-sm leading-tight"
                  style={{ color: "oklch(0.96 0.006 255)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  {item.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span
                    className="font-orbitron font-bold text-base"
                    style={{ color: "oklch(0.76 0.110 78)" }}
                  >
                    {item.price}
                  </span>
                </div>
                <a
                  href={`tel:${PHONE}`}
                  className="btn-gold px-3 py-2 rounded-full text-xs text-center flex items-center justify-center gap-1"
                  data-ocid={`computer.primary_button.${i + 1}`}
                >
                  <Phone size={11} /> ORDER NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECHNICIANS = [
  {
    name: "Aditya Kumar Behura",
    role: "Head — Hardware, Software & All Repairs",
    experience: "5+ Years Experience",
    specialty: "Hardware · Software · iOS · Android · Data Recovery",
  },
];

function TechniciansSection() {
  return (
    <section
      id="technicians"
      className="py-20"
      style={{ background: "oklch(0.12 0.025 241)" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            TEAM
          </div>
          <h2 className="section-title text-3xl md:text-4xl">
            MEET THE <span className="gold-word">EXPERT</span> HEAD
          </h2>
        </div>
        <div className="flex justify-center">
          {TECHNICIANS.map((t, i) => (
            <div
              key={t.name}
              className="gold-card hud-corner rounded-xl p-8 flex flex-col items-center text-center gap-4 max-w-sm w-full"
              data-ocid={`technicians.item.${i + 1}`}
            >
              <div className="relative">
                <img
                  src="/assets/generated/technician.dim_400x400.png"
                  alt={t.name}
                  className="w-32 h-32 rounded-full object-cover"
                  style={{
                    border: "2px solid oklch(0.76 0.110 78 / 0.6)",
                    filter: "drop-shadow(0 0 8px oklch(0.76 0.110 78 / 0.3))",
                  }}
                />
                <div
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{
                    background: "oklch(0.76 0.110 78)",
                    color: "oklch(0.10 0.020 244)",
                  }}
                >
                  ✓
                </div>
              </div>
              <div>
                <h3
                  className="font-orbitron font-bold text-sm"
                  style={{ color: "oklch(0.96 0.006 255)" }}
                >
                  {t.name}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.76 0.110 78)" }}
                >
                  {t.role}
                </p>
              </div>
              <div
                className="text-xs"
                style={{ color: "oklch(0.73 0.020 255)" }}
              >
                {t.specialty}
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs font-orbitron"
                style={{
                  background: "oklch(0.76 0.110 78 / 0.15)",
                  color: "oklch(0.88 0.090 84)",
                  border: "1px solid oklch(0.76 0.110 78 / 0.4)",
                }}
              >
                🏅 Certified Expert
              </div>
              <div
                className="text-xs"
                style={{ color: "oklch(0.73 0.020 255)" }}
              >
                {t.experience}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex justify-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: star position is index-based by design
        <Star key={i} size={14} fill="oklch(0.76 0.110 78)" className="star" />
      ))}
    </div>
  );
}

function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
  }, [reviews.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const prev = () => {
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
    startTimer();
  };
  const next = () => {
    setCurrent((c) => (c + 1) % reviews.length);
    startTimer();
  };

  const r = reviews[current];
  if (!r) return null;

  return (
    <section id="reviews" className="py-20 circuit-bg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            TESTIMONIALS
          </div>
          <h2 className="section-title text-3xl md:text-4xl">
            WHAT OUR <span className="gold-word">CUSTOMERS</span> SAY
          </h2>
        </div>
        <div className="relative" data-ocid="reviews.section">
          <div
            className="gold-card hud-corner rounded-2xl p-8 text-center transition-all duration-500"
            data-ocid={`reviews.item.${current + 1}`}
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-orbitron font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.70 0.130 77))",
                  color: "oklch(0.10 0.020 244)",
                }}
              >
                {r.customerName.charAt(0)}
              </div>
            </div>
            <StarRating count={Number(r.rating)} />
            <blockquote
              className="mt-4 text-sm leading-relaxed italic"
              style={{ color: "oklch(0.86 0.010 255)" }}
            >
              &ldquo;{r.reviewText}&rdquo;
            </blockquote>
            <div className="mt-4">
              <div
                className="font-orbitron font-bold text-sm"
                style={{ color: "oklch(0.96 0.006 255)" }}
              >
                {r.customerName}
              </div>
              <div
                className="text-xs"
                style={{ color: "oklch(0.76 0.110 78)" }}
              >
                {r.phoneModel}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center gold-card"
              data-ocid="reviews.pagination_prev"
            >
              <ChevronLeft
                size={18}
                style={{ color: "oklch(0.76 0.110 78)" }}
              />
            </button>
            <div className="flex gap-2">
              {reviews.map((rev, i) => (
                <button
                  type="button"
                  key={rev.customerName}
                  onClick={() => {
                    setCurrent(i);
                    startTimer();
                  }}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background:
                      i === current
                        ? "oklch(0.76 0.110 78)"
                        : "oklch(0.23 0.038 236)",
                  }}
                  data-ocid="reviews.toggle"
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center gold-card"
              data-ocid="reviews.pagination_next"
            >
              <ChevronRight
                size={18}
                style={{ color: "oklch(0.76 0.110 78)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const BLOG_GRADIENTS = [
  "blog-card-1",
  "blog-card-2",
  "blog-card-3",
  "blog-card-4",
  "blog-card-5",
];

function BlogSection({ posts }: { posts: BlogPost[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? posts : posts.slice(0, 3);

  const formatDate = (ts: bigint) => {
    const ms = Number(ts) / 1_000_000;
    return new Date(ms).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      id="blog"
      className="py-20"
      style={{ background: "oklch(0.12 0.025 241)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            INSIGHTS
          </div>
          <h2 className="section-title text-3xl md:text-4xl">
            TECH TIPS & <span className="gold-word">INSIGHTS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((post, i) => (
            <article
              key={post.title}
              className={`${BLOG_GRADIENTS[i % 5]} gold-card rounded-xl overflow-hidden flex flex-col`}
              data-ocid={`blog.item.${i + 1}`}
            >
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-semibold font-orbitron"
                    style={{
                      background: "oklch(0.76 0.110 78 / 0.2)",
                      color: "oklch(0.88 0.090 84)",
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3
                  className="font-orbitron font-bold text-sm leading-tight"
                  style={{ color: "oklch(0.96 0.006 255)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-xs leading-relaxed line-clamp-2"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  {post.content}
                </p>
                <div
                  className="flex items-center gap-3 mt-auto pt-3 border-t"
                  style={{ borderColor: "oklch(0.23 0.038 236)" }}
                >
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "oklch(0.73 0.020 255)" }}
                  >
                    <Calendar size={11} />
                    {formatDate(post.date)}
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "oklch(0.73 0.020 255)" }}
                  >
                    <BookOpen size={11} />
                    {post.readTime.toString()} min read
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-gold-outline px-3 py-1.5 rounded-full text-xs flex items-center gap-1 w-fit"
                  data-ocid={`blog.primary_button.${i + 1}`}
                >
                  Read More <ArrowRight size={11} />
                </button>
              </div>
            </article>
          ))}
        </div>
        {posts.length > 3 && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="btn-gold-outline px-6 py-2.5 rounded-full text-sm"
              data-ocid="blog.secondary_button"
            >
              {showAll ? "Show Less" : `View All ${posts.length} Articles`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const CONTACT_INFO = [
  { text: "9 AM - 8 PM, 7 Days a Week", iconEl: <Clock size={16} /> },
  {
    text: "We come to your doorstep anywhere in the city!",
    iconEl: <MapPin size={16} />,
  },
  {
    text: "Complex repairs: timeline communicated clearly",
    iconEl: <CheckCircle size={16} />,
  },
];

function ContactSection() {
  return (
    <section id="contact" className="py-20 circuit-bg">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: "oklch(0.76 0.110 78)" }}
        >
          REACH US
        </div>
        <h2 className="section-title text-3xl md:text-4xl mb-8">
          GET IN <span className="gold-word">TOUCH</span>
        </h2>
        <div
          className="gold-card hud-corner rounded-2xl p-8 md:p-12"
          data-ocid="contact.card"
        >
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse-gold"
              style={{
                background: "oklch(0.76 0.110 78 / 0.15)",
                border: "2px solid oklch(0.76 0.110 78 / 0.6)",
              }}
            >
              <Phone size={28} style={{ color: "oklch(0.76 0.110 78)" }} />
            </div>
          </div>
          <h3
            className="font-orbitron font-bold text-xl mb-2"
            style={{ color: "oklch(0.96 0.006 255)" }}
          >
            Call Us Directly
          </h3>
          <p
            className="text-sm mb-4"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            No waiting, no forms — instant booking!
          </p>
          <div className="font-orbitron font-black text-3xl md:text-4xl mb-6 animate-shimmer">
            {PHONE_DISPLAY}
          </div>
          <a
            href={`tel:${PHONE}`}
            className="btn-gold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2 mb-6 animate-pulse-gold"
            data-ocid="contact.primary_button"
          >
            <Phone size={20} /> CALL NOW
          </a>
          <div
            className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t"
            style={{ borderColor: "oklch(0.23 0.038 236)" }}
          >
            {CONTACT_INFO.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-2 text-center text-xs"
                style={{ color: "oklch(0.73 0.020 255)" }}
              >
                <div style={{ color: "oklch(0.76 0.110 78)" }}>
                  {item.iconEl}
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCTA() {
  return (
    <a
      href={`tel:${PHONE}`}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-pulse-gold"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.70 0.130 77))",
        boxShadow:
          "0 0 20px oklch(0.76 0.110 78 / 0.6), 0 4px 15px rgba(0,0,0,0.3)",
        color: "oklch(0.10 0.020 244)",
      }}
      title={`Call ${PHONE_DISPLAY}`}
      data-ocid="contact.primary_button"
    >
      <Phone size={22} />
    </a>
  );
}

const FOOTER_LINKS = [
  "Home:hero",
  "Services:services",
  "Accessories:accessories",
  "Computer:computer-accessories",
  "Blog:blog",
  "Contact:contact",
];
const FOOTER_SERVICES = [
  "Screen Replacement",
  "Battery Replacement",
  "Software Fixing",
  "Water Damage",
  "Back Panel",
];

function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: "oklch(0.09 0.018 244)",
        borderTop: "1px solid oklch(0.76 0.110 78 / 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <AgateLogoSVG size={36} />
            <div>
              <div
                className="font-orbitron font-black text-base"
                style={{ color: "oklch(0.76 0.110 78)" }}
              >
                AGATE
              </div>
              <div
                className="text-[9px] tracking-widest"
                style={{ color: "oklch(0.73 0.020 255)" }}
              >
                ACCESSORIES & REPAIR
              </div>
            </div>
          </div>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            Premium doorstep phone repair & accessories since 2023. Expert
            technicians at your service.
          </p>
        </div>
        <div>
          <h4
            className="font-orbitron font-bold text-xs uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.map((item) => {
              const [label, id] = item.split(":");
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="text-xs transition-colors"
                    style={{ color: "oklch(0.73 0.020 255)" }}
                    data-ocid="nav.link"
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4
            className="font-orbitron font-bold text-xs uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            Services
          </h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_SERVICES.map((s) => (
              <li
                key={s}
                className="text-xs"
                style={{ color: "oklch(0.73 0.020 255)" }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4
            className="font-orbitron font-bold text-xs uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            Contact
          </h4>
          <a
            href={`tel:${PHONE}`}
            className="font-orbitron font-bold text-sm block mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
            data-ocid="contact.primary_button"
          >
            {PHONE_DISPLAY}
          </a>
          <p
            className="text-xs mb-1"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            9 AM – 8 PM, 7 Days
          </p>
          <p className="text-xs" style={{ color: "oklch(0.73 0.020 255)" }}>
            Doorstep Service — City Wide
          </p>
          <div
            className="mt-3 text-xs"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            ⭐ Premium Doorstep Repair & Accessories Since 2023
          </div>
        </div>
      </div>
      <div className="gold-sep" />
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs" style={{ color: "oklch(0.73 0.020 255)" }}>
          © {year} AGATE Accessories & Repair. All rights reserved.
        </p>
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs"
          style={{ color: "oklch(0.73 0.020 255)" }}
        >
          Built with ❤️ using caffeine.ai
        </a>
      </div>
    </footer>
  );
}

const DEFAULT_STATS: StatsData = {
  yearsInBusiness: BigInt(2),
  happyCustomers: BigInt(300),
  repairsDone: BigInt(500),
};

export default function App() {
  useSeedData();
  const { data: stats } = useGetStoreStats();
  const { data: services = [] } = useGetAllServices();
  const { data: products = [] } = useGetAllProducts();
  const { data: reviews = [] } = useGetAllReviews();
  const { data: posts = [] } = useGetAllBlogPosts();

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.10 0.020 244)" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar stats={stats ?? DEFAULT_STATS} />
        <ServicesSection services={services} />
        <BeforeAfterSection />
        <PhoneBrandsSection />
        <SpinWheelSection />
        <WhyChooseUs />
        <AccessoriesSection products={products} />
        <ComputerAccessoriesSection />
        <TechniciansSection />
        <AboutUsSection />
        <ReviewsSection reviews={reviews} />
        <BlogSection posts={posts} />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
