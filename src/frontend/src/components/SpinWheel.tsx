import { Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const PHONE = "+919692500609";

const SEGMENTS = [
  { label: "10% OFF", color: "#d4af37", textColor: "#0a0a0a", emoji: "🎉" },
  {
    label: "Free Screen Protector",
    color: "#1a1a1a",
    textColor: "#d4af37",
    emoji: "🛡️",
  },
  { label: "5% OFF", color: "#f5c518", textColor: "#0a0a0a", emoji: "💛" },
  {
    label: "Free Diagnosis",
    color: "#111111",
    textColor: "#f5c518",
    emoji: "🔍",
  },
  {
    label: "15% OFF Battery",
    color: "#c49a1a",
    textColor: "#0a0a0a",
    emoji: "🔋",
  },
  {
    label: "Free Cleaning",
    color: "#1e1e1e",
    textColor: "#d4af37",
    emoji: "✨",
  },
  {
    label: "₹50 Cashback",
    color: "#e6b800",
    textColor: "#0a0a0a",
    emoji: "💰",
  },
  { label: "Try Again", color: "#2a2a2a", textColor: "#888", emoji: "🔄" },
];

const NUM_SEGMENTS = SEGMENTS.length;
const SEGMENT_ANGLE = (2 * Math.PI) / NUM_SEGMENTS;

function drawWheel(canvas: HTMLCanvasElement, rotation: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = Math.min(cx, cy) - 8;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Outer glow ring
  const glowGradient = ctx.createRadialGradient(cx, cy, r - 4, cx, cy, r + 8);
  glowGradient.addColorStop(0, "rgba(212,175,55,0.4)");
  glowGradient.addColorStop(1, "rgba(212,175,55,0)");
  ctx.beginPath();
  ctx.arc(cx, cy, r + 8, 0, 2 * Math.PI);
  ctx.fillStyle = glowGradient;
  ctx.fill();

  for (let i = 0; i < NUM_SEGMENTS; i++) {
    const startAngle = rotation + i * SEGMENT_ANGLE;
    const endAngle = startAngle + SEGMENT_ANGLE;
    const seg = SEGMENTS[i];

    // Segment fill
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();

    // Gold border
    ctx.strokeStyle = "rgba(212,175,55,0.7)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + SEGMENT_ANGLE / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = seg.textColor;
    ctx.font = "bold 11px 'Orbitron', sans-serif";
    ctx.fillText(seg.label, r - 10, 4);
    ctx.restore();
  }

  // Center circle
  const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30);
  centerGrad.addColorStop(0, "#1a1a1a");
  centerGrad.addColorStop(1, "#0a0a0a");
  ctx.beginPath();
  ctx.arc(cx, cy, 30, 0, 2 * Math.PI);
  ctx.fillStyle = centerGrad;
  ctx.fill();
  ctx.strokeStyle = "rgba(212,175,55,0.9)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Center 'A' text
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#d4af37";
  ctx.font = "bold 18px 'Orbitron', sans-serif";
  ctx.fillText("A", cx, cy);
  ctx.textBaseline = "alphabetic";
}

export function SpinWheelSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const currentRotation = useRef(0);

  const draw = useCallback(() => {
    if (canvasRef.current) {
      drawWheel(canvasRef.current, currentRotation.current);
    }
  }, []);

  useEffect(() => {
    draw();
  }, [draw]);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setPrize(null);

    const extraSpins = 5 + Math.random() * 5;
    const targetRotation =
      currentRotation.current +
      extraSpins * 2 * Math.PI +
      Math.random() * 2 * Math.PI;
    const duration = 4000 + Math.random() * 1000;
    const startTime = performance.now();
    const startRot = currentRotation.current;

    function easeOut(t: number) {
      return 1 - (1 - t) ** 4;
    }

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      currentRotation.current =
        startRot + (targetRotation - startRot) * easeOut(progress);
      draw();

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        currentRotation.current = targetRotation % (2 * Math.PI);
        draw();
        setSpinning(false);

        // Determine winning segment (pointer at top = -PI/2)
        const normalized =
          (2 * Math.PI - (currentRotation.current % (2 * Math.PI))) %
          (2 * Math.PI);
        const idx = Math.floor(normalized / SEGMENT_ANGLE) % NUM_SEGMENTS;
        setPrize(SEGMENTS[idx].label);
        setShowModal(true);
      }
    }

    animRef.current = requestAnimationFrame(step);
  }, [spinning, draw]);

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section
      id="spin-wheel"
      className="py-20 relative overflow-hidden"
      style={{ background: "oklch(0.10 0.020 244)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.76 0.110 78 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.76 0.110 78)" }}
          >
            LUCKY DRAW
          </div>
          <h2
            className="font-orbitron font-black text-3xl md:text-5xl uppercase mb-3"
            style={{
              color: "oklch(0.96 0.006 255)",
              textShadow: "0 0 30px oklch(0.76 0.110 78 / 0.5)",
            }}
          >
            SPIN TO <span style={{ color: "oklch(0.76 0.110 78)" }}>WIN!</span>
          </h2>
          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: "oklch(0.73 0.020 255)" }}
          >
            Try your luck! Spin the wheel to win exclusive discounts and free
            services. Call us to redeem your prize.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Wheel area */}
          <div className="relative flex flex-col items-center">
            {/* Pointer triangle */}
            <div
              className="absolute z-10"
              style={{
                top: "calc(50% - 140px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "14px solid transparent",
                borderRight: "14px solid transparent",
                borderTop: "28px solid #d4af37",
                filter: "drop-shadow(0 0 8px rgba(212,175,55,0.8))",
              }}
            />

            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className="rounded-full"
              style={{
                boxShadow:
                  "0 0 40px oklch(0.76 0.110 78 / 0.3), 0 0 80px oklch(0.76 0.110 78 / 0.1)",
              }}
            />

            <button
              type="button"
              onClick={spin}
              disabled={spinning}
              className="mt-8 px-10 py-4 rounded-full font-orbitron font-black text-base uppercase tracking-widest transition-all duration-200"
              style={{
                background: spinning
                  ? "oklch(0.50 0.060 78)"
                  : "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
                color: "oklch(0.10 0.020 244)",
                boxShadow: spinning
                  ? "none"
                  : "0 4px 20px oklch(0.76 0.110 78 / 0.5), 0 0 40px oklch(0.76 0.110 78 / 0.2)",
                transform: spinning ? "scale(0.97)" : "scale(1)",
                cursor: spinning ? "not-allowed" : "pointer",
              }}
              data-ocid="spinwheel.button"
            >
              {spinning ? "SPINNING..." : "🎰 SPIN NOW"}
            </button>
          </div>

          {/* Prizes list */}
          <div
            className="rounded-2xl p-6 max-w-xs w-full"
            style={{
              background: "oklch(0.13 0.028 240)",
              border: "1px solid oklch(0.76 0.110 78 / 0.3)",
            }}
          >
            <h3
              className="font-orbitron font-bold text-sm uppercase tracking-widest mb-4 text-center"
              style={{ color: "oklch(0.76 0.110 78)" }}
            >
              🏆 Possible Prizes
            </h3>
            <div className="flex flex-col gap-2">
              {SEGMENTS.map((seg) => (
                <div
                  key={seg.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                  style={{
                    background: "oklch(0.16 0.032 238)",
                    border: "1px solid oklch(0.76 0.110 78 / 0.15)",
                  }}
                >
                  <span className="text-lg">{seg.emoji}</span>
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color:
                        seg.label === "Try Again"
                          ? "oklch(0.60 0.020 255)"
                          : "oklch(0.88 0.090 84)",
                    }}
                  >
                    {seg.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Win Modal */}
      {showModal && prize && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          data-ocid="spinwheel.modal"
        >
          <div
            className="relative max-w-sm w-full rounded-2xl p-8 text-center"
            style={{
              background: "oklch(0.12 0.025 241)",
              border: "2px solid oklch(0.76 0.110 78 / 0.8)",
              boxShadow: "0 0 60px oklch(0.76 0.110 78 / 0.4)",
            }}
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: "oklch(0.20 0.030 244)",
                color: "oklch(0.73 0.020 255)",
              }}
              data-ocid="spinwheel.close_button"
            >
              ✕
            </button>

            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
              }}
            >
              🎉
            </div>

            <h3
              className="font-orbitron font-black text-xl mb-2"
              style={{ color: "oklch(0.76 0.110 78)" }}
            >
              {prize === "Try Again"
                ? "Better Luck Next Time!"
                : "Congratulations!"}
            </h3>

            {prize !== "Try Again" ? (
              <>
                <p
                  className="text-sm mb-1"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  You won:
                </p>
                <div
                  className="font-orbitron font-black text-2xl mb-4"
                  style={{
                    color: "oklch(0.88 0.090 84)",
                    textShadow: "0 0 20px oklch(0.76 0.110 78 / 0.6)",
                  }}
                >
                  {prize}
                </div>
                <p
                  className="text-xs mb-5"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  Call us to redeem your prize!
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-orbitron font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
                    color: "oklch(0.10 0.020 244)",
                    boxShadow: "0 4px 20px oklch(0.76 0.110 78 / 0.4)",
                  }}
                  data-ocid="spinwheel.primary_button"
                >
                  <Phone size={16} /> CALL TO REDEEM
                </a>
              </>
            ) : (
              <>
                <p
                  className="text-sm mb-5"
                  style={{ color: "oklch(0.73 0.020 255)" }}
                >
                  Spin again for a chance to win!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    spin();
                  }}
                  className="w-full py-3 rounded-full font-orbitron font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.76 0.110 78), oklch(0.68 0.140 77))",
                    color: "oklch(0.10 0.020 244)",
                  }}
                  data-ocid="spinwheel.secondary_button"
                >
                  🎰 SPIN AGAIN
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
