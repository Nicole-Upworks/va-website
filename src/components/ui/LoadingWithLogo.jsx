import logo from "../../assets/logo-icon.png";

export default function LoadingWithLogo({
  logoSize = 86,
  ringSize = 210,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className="group relative flex items-center justify-center"
        style={{ width: ringSize, height: ringSize }}
      >
        {/* Rotating Aura */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-70 animate-spin-slower"
          style={{
            background:
              "conic-gradient(from 180deg, #0b1f5f, #2563eb, #60a5fa, #f59e0b, #0b1f5f)",
          }}
        />

        {/* Soft Glow Layers */}
        <div className="absolute inset-6 rounded-full bg-blue-500/10 blur-xl" />
        <div className="absolute inset-10 rounded-full bg-amber-400/10 blur-xl" />

        {/* Ripple Waves */}
        <span className="absolute inset-0 rounded-full border border-blue-400/25 animate-ripple-1" />
        <span className="absolute inset-0 rounded-full border border-indigo-400/25 animate-ripple-2" />
        <span className="absolute inset-0 rounded-full border border-amber-400/25 animate-ripple-3" />
        <span className="absolute inset-0 rounded-full border border-sky-400/20 animate-ripple-4" />

        {/* Shockwave */}
        <span className="absolute inset-0 rounded-full ring-2 ring-blue-500/10 animate-shockwave" />

        {/* 3D Pump Logo Core */}
        <div className="relative z-10 perspective">
          <div className="core-shell">
            <div className="core-glow" />

            <img
              src={logo}
              alt="Company Logo"
              style={{ width: logoSize, height: logoSize }}
              className="relative z-10 object-contain select-none"
              draggable="false"
            />
          </div>
        </div>

        <style>{`
          .perspective { perspective: 900px; }

          .core-shell {
            position: relative;
            display: grid;
            place-items: center;
            padding: 18px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(12px);
            box-shadow:
              0 20px 50px rgba(2, 6, 23, 0.15),
              inset 0 1px 0 rgba(255,255,255,0.6);
            transform-style: preserve-3d;
            animation: pump3d 5s ease-in-out infinite;
          }

          .core-glow {
            position: absolute;
            inset: -12px;
            border-radius: 9999px;
            background: radial-gradient(circle at 40% 35%,
              rgba(37, 99, 235, 0.35),
              rgba(245, 158, 11, 0.2),
              rgba(11, 31, 95, 0.1),
              transparent 70%
            );
            filter: blur(12px);
            animation: glowPulse 5s ease-in-out infinite;
          }

          @keyframes pump3d {
            0% {
              transform: translateZ(0) scale(1) rotateX(0deg) rotateY(0deg);
            }
            50% {
              transform: translateZ(25px) scale(1.12) rotateX(10deg) rotateY(-10deg);
            }
            100% {
              transform: translateZ(0) scale(1) rotateX(0deg) rotateY(0deg);
            }
          }

          @keyframes glowPulse {
            0% { transform: scale(0.95); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.6; }
          }

          @keyframes ripple {
            0%   { transform: scale(0.6); opacity: 0; }
            20%  { opacity: 0.6; }
            70%  { opacity: 0.2; }
            100% { transform: scale(1.4); opacity: 0; }
          }

          .animate-ripple-1 { animation: ripple 5s ease-out infinite; }
          .animate-ripple-2 { animation: ripple 5s ease-out infinite; animation-delay: 1s; }
          .animate-ripple-3 { animation: ripple 5s ease-out infinite; animation-delay: 2s; }
          .animate-ripple-4 { animation: ripple 5s ease-out infinite; animation-delay: 3s; }

          @keyframes shock {
            0%   { transform: scale(0.7); opacity: 0; }
            30%  { opacity: 0.5; }
            100% { transform: scale(1.5); opacity: 0; }
          }

          .animate-shockwave {
            animation: shock 5s cubic-bezier(.2,.9,.2,1) infinite;
            animation-delay: 0.5s;
          }

          @keyframes spinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-spin-slower {
            animation: spinSlow 8s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            * { animation: none !important; }
          }
        `}</style>
      </div>
    </div>
  );
}