import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";

const PHONE = "+919692500609";

const BRANDS = [
  {
    name: "Apple iPhone",
    logo: "🍎",
    color: "#888888",
    series: [
      "iPhone 15 / 15 Pro / 15 Pro Max",
      "iPhone 14 / 14 Pro / 14 Pro Max",
      "iPhone 13 / 13 Pro / 13 Pro Max",
      "iPhone 12 / 12 Pro / 12 Pro Max",
      "iPhone 11 / 11 Pro / 11 Pro Max",
      "iPhone X / XS / XS Max / XR",
      "iPhone 8 / 7 / 6S / 6 Series",
      "iPhone SE (All Generations)",
    ],
  },
  {
    name: "Samsung",
    logo: "📱",
    color: "#1428a0",
    series: [
      "Galaxy S25 / S24 / S23 / S22 Series",
      "Galaxy A55 / A35 / A25 / A15 Series",
      "Galaxy M55 / M35 / M14 Series",
      "Galaxy F Series (F15, F35, F55)",
      "Galaxy Note 20 / 10 / 9 Series",
      "Galaxy Z Fold / Z Flip Series",
    ],
  },
  {
    name: "OnePlus",
    logo: "1️⃣",
    color: "#eb0028",
    series: [
      "OnePlus 13 / 12 / 11 / 10 Pro Series",
      "OnePlus 9 / 8 / 7 Series",
      "Nord 4 / Nord CE 4 / Nord 3",
      "Nord CE 3 / Nord CE 2 Series",
      "OnePlus Ace 3 / Ace 2 / Ace Series",
    ],
  },
  {
    name: "Xiaomi / Redmi / POCO",
    logo: "🔥",
    color: "#ff6900",
    series: [
      "Xiaomi 14 / 13 / 12 Series",
      "Redmi Note 13 / 12 / 11 / 10 / 9 Series",
      "Redmi 13 / 12 / 11 Series",
      "POCO X6 / X5 / F5 / F4 Series",
      "POCO C65 / M6 / M5 Series",
    ],
  },
  {
    name: "Realme",
    logo: "⚡",
    color: "#fabd08",
    series: [
      "Realme GT 6 / GT 5 / GT Neo Series",
      "Realme 12 / 11 / 10 / 9 Pro Series",
      "Realme C67 / C55 / C35 / C33 Series",
      "Realme Narzo 70 / 60 / 50 Series",
    ],
  },
  {
    name: "Vivo",
    logo: "📳",
    color: "#415fff",
    series: [
      "Vivo V30 / V29 / V27 / V25 Series",
      "Vivo Y200 / Y100 / Y78 / Y56 Series",
      "iQOO 12 / 11 / 9 / Z Series",
      "Vivo X100 / X90 / X80 Series",
    ],
  },
  {
    name: "Oppo",
    logo: "💚",
    color: "#1d8348",
    series: [
      "Oppo Reno 12 / 11 / 10 / 9 Series",
      "Oppo Find X7 / X6 / X5 Pro Series",
      "Oppo A Series (A79, A59, A38, A18)",
      "Oppo F Series (F25 Pro, F23, F21)",
    ],
  },
  {
    name: "Motorola",
    logo: "〽️",
    color: "#e1002a",
    series: [
      "Moto Edge 50 / 40 / 30 Series",
      "Moto G84 / G64 / G54 / G34 Series",
      "Moto G Power / G Stylus Series",
      "Motorola Razr 50 / 40 Ultra Series",
    ],
  },
  {
    name: "Nokia",
    logo: "📡",
    color: "#124191",
    series: [
      "Nokia G42 / G21 / G20 Series",
      "Nokia C32 / C22 / C12 Series",
      "Nokia X30 / XR21 / X20 Series",
      "Nokia 110 / 105 / 106 Feature Phones",
    ],
  },
  {
    name: "Google Pixel",
    logo: "🔍",
    color: "#4285f4",
    series: [
      "Pixel 9 / 9 Pro / 9 Pro XL",
      "Pixel 8 / 8 Pro / 8a Series",
      "Pixel 7 / 7 Pro / 7a Series",
      "Pixel 6 / 6 Pro / 6a Series",
    ],
  },
  {
    name: "Honor",
    logo: "🏅",
    color: "#d4303f",
    series: [
      "Honor 200 / 200 Pro / 90 Series",
      "Honor X9b / X9a / X8b / X7b Series",
      "Honor Magic 6 / Magic 5 Pro Series",
      "Honor Play 8T / 50 Series",
    ],
  },
  {
    name: "Nothing Phone",
    logo: "○",
    color: "#ffffff",
    series: [
      "Nothing Phone (2a) / (2) Series",
      "Nothing Phone (1) Series",
      "Nothing CMF Phone 1 Series",
    ],
  },
  {
    name: "Asus ROG",
    logo: "🎮",
    color: "#e31937",
    series: [
      "ROG Phone 8 / 8 Pro Series",
      "ROG Phone 7 / 7 Ultimate Series",
      "ROG Phone 6 / 6D / 6 Pro Series",
      "Zenfone 11 Ultra / 10 / 9 Series",
    ],
  },
];

function BrandCard({
  brand,
  index,
}: { brand: (typeof BRANDS)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: "oklch(0.13 0.028 240)",
        border: expanded
          ? "1.5px solid oklch(0.76 0.110 78 / 0.7)"
          : "1px solid oklch(0.76 0.110 78 / 0.25)",
        boxShadow: expanded ? "0 0 20px oklch(0.76 0.110 78 / 0.15)" : "none",
      }}
      data-ocid={`brands.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left"
        style={{ cursor: "pointer" }}
        data-ocid={`brands.toggle.${index + 1}`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl flex-shrink-0">{brand.logo}</span>
          <div>
            <div
              className="font-orbitron font-bold text-sm"
              style={{ color: "oklch(0.96 0.006 255)" }}
            >
              {brand.name}
            </div>
            <div
              className="text-[10px] mt-0.5"
              style={{ color: "oklch(0.73 0.020 255)" }}
            >
              {brand.series.length} series supported
            </div>
          </div>
        </div>
        <ChevronDown
          size={16}
          style={{
            color: "oklch(0.76 0.110 78)",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
          }}
        />
      </button>

      {expanded && (
        <div
          className="px-4 pb-4"
          style={{ borderTop: "1px solid oklch(0.76 0.110 78 / 0.15)" }}
        >
          <div
            className="text-[10px] uppercase tracking-widest pt-3 pb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            Supported Models:
          </div>
          <ul className="flex flex-col gap-1.5">
            {brand.series.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 text-xs"
                style={{ color: "oklch(0.83 0.015 255)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "oklch(0.76 0.110 78)" }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function PhoneBrandsSection() {
  return (
    <section
      id="phone-brands"
      className="py-20"
      style={{ background: "oklch(0.11 0.022 242)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            ALL BRANDS
          </div>
          <h2
            className="font-orbitron font-black text-3xl md:text-4xl uppercase mb-3"
            style={{ color: "oklch(0.96 0.006 255)" }}
          >
            WE REPAIR{" "}
            <span
              style={{
                color: "oklch(0.76 0.110 78)",
                textShadow: "0 0 20px oklch(0.76 0.110 78 / 0.5)",
              }}
            >
              ALL BRANDS
            </span>
          </h2>
          <p
            className="text-sm max-w-lg mx-auto"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            From flagship to budget phones — we repair every major smartphone
            brand and series. Click any brand to see supported models.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
          data-ocid="brands.list"
        >
          {BRANDS.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>

        {/* Call to action */}
        <div
          className="rounded-2xl p-6 md:p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.76 0.110 78 / 0.10) 0%, oklch(0.12 0.025 241) 100%)",
            border: "1.5px solid oklch(0.76 0.110 78 / 0.5)",
          }}
          data-ocid="brands.card"
        >
          <div
            className="text-2xl md:text-3xl font-orbitron font-black mb-2"
            style={{ color: "oklch(0.96 0.006 255)" }}
          >
            Don&apos;t see your model?
          </div>
          <p
            className="text-sm mb-5"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            We repair{" "}
            <strong style={{ color: "oklch(0.88 0.090 84)" }}>
              almost every smartphone
            </strong>
            ! Call us and we&apos;ll let you know instantly.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-orbitron font-bold text-sm"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
              color: "oklch(0.10 0.020 244)",
              boxShadow: "0 4px 20px oklch(0.76 0.110 78 / 0.4)",
            }}
            data-ocid="brands.primary_button"
          >
            <Phone size={16} /> CALL US NOW
          </a>
        </div>
      </div>
    </section>
  );
}
