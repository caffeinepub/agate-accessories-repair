import {
  Award,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  ThumbsUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const PHONE = "+919692500609";

const STATS = [
  { icon: <Clock size={20} />, value: "2+", label: "Years Experience" },
  { icon: <Users size={20} />, value: "300+", label: "Happy Customers" },
  { icon: <Wrench size={20} />, value: "500+", label: "Repairs Done" },
  { icon: <ThumbsUp size={20} />, value: "100%", label: "Satisfaction Rate" },
];

const VALUES = [
  { icon: <Wrench size={20} />, label: "Doorstep Service" },
  { icon: <CheckCircle size={20} />, label: "Genuine Parts" },
  { icon: <Award size={20} />, label: "Expert Hands" },
  { icon: <Zap size={20} />, label: "Fast Turnaround" },
];

export function AboutUsSection() {
  return (
    <section
      id="about"
      className="py-20"
      style={{ background: "oklch(0.10 0.020 244)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "2px solid oklch(0.76 0.110 78 / 0.6)",
                boxShadow:
                  "0 0 40px oklch(0.76 0.110 78 / 0.3), 0 0 80px oklch(0.76 0.110 78 / 0.10), inset 0 0 30px oklch(0.76 0.110 78 / 0.03)",
              }}
            >
              <img
                src="/assets/generated/about-us-technician.dim_800x600.jpg"
                alt="Aditya Kumar Behura - Expert Phone Repair Technician"
                className="w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
              {/* Gold frame corner accents */}
              <div
                className="absolute top-0 left-0 w-10 h-10"
                style={{
                  borderTop: "3px solid oklch(0.76 0.110 78)",
                  borderLeft: "3px solid oklch(0.76 0.110 78)",
                }}
              />
              <div
                className="absolute top-0 right-0 w-10 h-10"
                style={{
                  borderTop: "3px solid oklch(0.76 0.110 78)",
                  borderRight: "3px solid oklch(0.76 0.110 78)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-10 h-10"
                style={{
                  borderBottom: "3px solid oklch(0.76 0.110 78)",
                  borderLeft: "3px solid oklch(0.76 0.110 78)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-10 h-10"
                style={{
                  borderBottom: "3px solid oklch(0.76 0.110 78)",
                  borderRight: "3px solid oklch(0.76 0.110 78)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 md:-right-6 px-4 py-3 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
                color: "oklch(0.10 0.020 244)",
                boxShadow: "0 4px 20px oklch(0.76 0.110 78 / 0.4)",
              }}
            >
              <div className="font-orbitron font-black text-xl">5★</div>
              <div className="text-[10px] font-bold">Rated Service</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-orbitron font-bold mb-4"
              style={{
                background: "oklch(0.76 0.110 78 / 0.12)",
                border: "1px solid oklch(0.76 0.110 78 / 0.5)",
                color: "oklch(0.88 0.090 84)",
              }}
            >
              <Shield size={12} /> About AGATE
            </div>

            <h2
              className="font-orbitron font-black text-2xl md:text-4xl uppercase leading-tight mb-5"
              style={{ color: "oklch(0.96 0.006 255)" }}
            >
              Your Trusted{" "}
              <span
                style={{
                  color: "oklch(0.76 0.110 78)",
                  textShadow: "0 0 20px oklch(0.76 0.110 78 / 0.5)",
                }}
              >
                Phone Repair
              </span>{" "}
              Expert Since 2023
            </h2>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.73 0.020 255)" }}
            >
              AGATE Accessories &amp; Repair was born from a passion for
              technology and a commitment to keeping you connected. We believe
              your phone is your lifeline — when it breaks, you shouldn&apos;t
              have to wait days for a repair or travel across the city.
              That&apos;s why we bring the repair shop to{" "}
              <strong style={{ color: "oklch(0.88 0.090 84)" }}>
                YOUR door.
              </strong>
            </p>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.73 0.020 255)" }}
            >
              Led by{" "}
              <strong style={{ color: "oklch(0.88 0.090 84)" }}>
                Aditya Kumar Behura
              </strong>
              , our expert technician with deep expertise in hardware, software,
              and all repair types, we&apos;ve built a reputation for honest,
              fast, and high-quality service across the region.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-3 rounded-xl"
                  style={{
                    background: "oklch(0.14 0.030 238)",
                    border: "1px solid oklch(0.76 0.110 78 / 0.25)",
                  }}
                  data-ocid={`about.item.${i + 1}`}
                >
                  <div
                    style={{ color: "oklch(0.76 0.110 78)" }}
                    className="mb-1"
                  >
                    {stat.icon}
                  </div>
                  <div
                    className="font-orbitron font-black text-lg"
                    style={{ color: "oklch(0.76 0.110 78)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] mt-0.5 leading-tight"
                    style={{ color: "oklch(0.73 0.020 255)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Values Row */}
            <div className="flex flex-wrap gap-2 mb-7">
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-xs"
                  style={{
                    background: "oklch(0.76 0.110 78 / 0.10)",
                    border: "1px solid oklch(0.76 0.110 78 / 0.35)",
                    color: "oklch(0.88 0.090 84)",
                  }}
                >
                  <span style={{ color: "oklch(0.76 0.110 78)" }}>
                    {v.icon}
                  </span>
                  {v.label}
                </div>
              ))}
            </div>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-orbitron font-bold text-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
                color: "oklch(0.10 0.020 244)",
                boxShadow: "0 4px 25px oklch(0.76 0.110 78 / 0.4)",
              }}
              data-ocid="about.primary_button"
            >
              <Phone size={18} /> CALL NOW — Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
