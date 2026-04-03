import { CheckCircle, Clock, Phone, Shield, Wrench } from "lucide-react";

const PHONE = "+919692500609";

const STATS = [
  { icon: <Clock size={22} />, value: "1 Hour", label: "Average Repair Time" },
  { icon: <Shield size={22} />, value: "6 Month", label: "Warranty Guarantee" },
  { icon: <CheckCircle size={22} />, value: "100%", label: "Genuine Parts" },
  { icon: <Wrench size={22} />, value: "Doorstep", label: "At Your Location" },
];

export function BeforeAfterSection() {
  return (
    <section
      id="before-after"
      className="py-20"
      style={{ background: "oklch(0.12 0.025 241)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            TRANSFORMATION
          </div>
          <h2
            className="font-orbitron font-black text-3xl md:text-5xl uppercase mb-3"
            style={{ color: "oklch(0.96 0.006 255)" }}
          >
            From <span style={{ color: "oklch(0.65 0.200 25)" }}>BROKEN</span>{" "}
            to{" "}
            <span
              style={{
                color: "oklch(0.76 0.110 78)",
                textShadow: "0 0 20px oklch(0.76 0.110 78 / 0.6)",
              }}
            >
              BRAND NEW
            </span>
          </h2>
          <p
            className="text-sm max-w-xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            Expert repair that restores your phone to factory-fresh condition.
            Guaranteed quality, every time.
          </p>
        </div>

        {/* Before / After Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                border: "2px solid oklch(0.65 0.200 25 / 0.6)",
                boxShadow: "0 0 30px oklch(0.65 0.200 25 / 0.2)",
              }}
            >
              <img
                src="/assets/generated/phone-before-repair.dim_600x400.jpg"
                alt="Phone before repair - cracked screen"
                className="w-full object-cover"
                style={{ maxHeight: "300px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, oklch(0.65 0.200 25 / 0.15) 0%, transparent 40%)",
                }}
              />
              {/* BEFORE Badge */}
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-full font-orbitron font-black text-sm"
                style={{
                  background: "oklch(0.50 0.200 25)",
                  color: "#fff",
                  boxShadow: "0 2px 12px oklch(0.50 0.200 25 / 0.6)",
                }}
              >
                ✕ BEFORE
              </div>
            </div>
            <div
              className="mt-3 text-center text-sm font-semibold"
              style={{ color: "oklch(0.65 0.200 25)" }}
            >
              Damaged / Broken State
            </div>
          </div>

          {/* After */}
          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                border: "2px solid oklch(0.65 0.170 145 / 0.6)",
                boxShadow: "0 0 30px oklch(0.65 0.170 145 / 0.2)",
              }}
            >
              <img
                src="/assets/generated/phone-after-repair.dim_600x400.jpg"
                alt="Phone after repair - perfect condition"
                className="w-full object-cover"
                style={{ maxHeight: "300px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, oklch(0.65 0.170 145 / 0.15) 0%, transparent 40%)",
                }}
              />
              {/* AFTER Badge */}
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-full font-orbitron font-black text-sm"
                style={{
                  background: "oklch(0.50 0.170 145)",
                  color: "#fff",
                  boxShadow: "0 2px 12px oklch(0.50 0.170 145 / 0.6)",
                }}
              >
                ✓ AFTER
              </div>
            </div>
            <div
              className="mt-3 text-center text-sm font-semibold"
              style={{ color: "oklch(0.65 0.170 145)" }}
            >
              Restored to Factory-Fresh Condition
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          data-ocid="beforeafter.section"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-4 rounded-xl"
              style={{
                background: "oklch(0.14 0.030 238)",
                border: "1px solid oklch(0.76 0.110 78 / 0.25)",
              }}
              data-ocid={`beforeafter.item.${i + 1}`}
            >
              <div className="mb-2" style={{ color: "oklch(0.76 0.110 78)" }}>
                {stat.icon}
              </div>
              <div
                className="font-orbitron font-black text-lg"
                style={{ color: "oklch(0.88 0.090 84)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "oklch(0.73 0.020 255)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-orbitron font-black text-base"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
              color: "oklch(0.10 0.020 244)",
              boxShadow:
                "0 4px 30px oklch(0.76 0.110 78 / 0.5), 0 0 60px oklch(0.76 0.110 78 / 0.15)",
            }}
            data-ocid="beforeafter.primary_button"
          >
            <Phone size={20} /> Book Your Repair — CALL NOW
          </a>
        </div>
      </div>
    </section>
  );
}
