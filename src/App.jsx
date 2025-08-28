import React, { useEffect, useState, useRef } from "react";

const daiTraLinks = [
  { label: "DHTH 20A", url: "https://zalo.me/g/srklfp129" },
  { label: "DHTH 20B", url: "https://zalo.me/g/zxdpve593" },
  { label: "DHTH 20C", url: "https://zalo.me/g/zbdjun514" },
  { label: "DHTH 20D", url: "https://zalo.me/g/kssokm054" },
  { label: "DHTH 20E", url: "https://zalo.me/g/vryagw074" },
  { label: "DHTH 20F", url: "https://zalo.me/g/dxebwx890" },
  { label: "DHTH 20G", url: "https://zalo.me/g/yvoozq791" },
  { label: "DHTH 20H", url: "https://zalo.me/g/wraslb289" },
  { label: "DHTH 20I", url: "https://zalo.me/g/sudqts875" },
  { label: "DHTH 20J", url: "https://zalo.me/g/xlhuqu886" },
];

const daiTraCLCLinks = [
  { label: "DHTH 20A-CLC", url: "https://zalo.me/g/clone1" },
  { label: "DHTH 20B-CLC", url: "https://zalo.me/g/clone2" },
  { label: "DHTH 20C-CLC", url: "https://zalo.me/g/clone3" },
  { label: "DHTH 20D-CLC", url: "https://zalo.me/g/clone4" },
  { label: "DHTH 20E-CLC", url: "https://zalo.me/g/clone5" },
  { label: "DHTH 20F-CLC", url: "https://zalo.me/g/clone6" },
  { label: "DHTH 20G-CLC", url: "https://zalo.me/g/clone7" },
  { label: "DHTH 20H-CLC", url: "https://zalo.me/g/clone8" },
  { label: "DHTH 20I-CLC", url: "https://zalo.me/g/clone9" },
  { label: "DHTH 20J-CLC", url: "https://zalo.me/g/clone10" },
];

function WhiteTechParticles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function createParticles() {
      const count = 80;
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.4,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.6 + 0.2,
          alphaChange: (Math.random() - 0.5) * 0.01,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > width) p.speedX = -p.speedX;
        if (p.y < 0 || p.y > height) p.speedY = -p.speedY;
        p.alpha += p.alphaChange;
        if (p.alpha <= 0.2 || p.alpha >= 0.8) p.alphaChange = -p.alphaChange;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha.toFixed(2)})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      id="white-tech-particles"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("daiTra");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    const timeout = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const activeLinks = activeTab === "clc" ? daiTraCLCLinks : daiTraLinks;

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap");

        * {
          box-sizing: border-box;
        }

        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          font-family: "Orbitron", sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #071224 100%);
          color: #cbd5e1;
          overflow-x: hidden;
        }

        .header {
          text-align: center;
          padding-top: 50px;
          color: #38bdf8;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
          animation: fadeInDown 1s ease forwards;
        }
        .header img {
          width: 120px;
          filter: drop-shadow(0 0 6px #38bdf8);
        }
        .header h1 {
          margin: 20px 0 10px;
          font-size: 32px;
          font-weight: 600;
        }
        .header p {
          font-weight: 400;
          font-size: 18px;
          color: #a5b4fc;
          text-shadow: 0 0 4px #a5b4fc88;
        }

        #white-tech-particles {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: -1;
        }

        /* --- Tab Menu CSS --- */
        .tabs {
          display: flex;
          justify-content: center;
          border-bottom: 2px solid #334155;
          margin: 40px auto 40px;
          width: fit-content;
        }

        .tab-btn {
          padding: 14px 32px;
          font-size: 18px;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          color: #94a3b8;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .tab-btn:hover {
          color: #38bdf8;
        }

        .tab-btn.active {
          color: #38bdf8;
          border-bottom: 3px solid #38bdf8;
        }

        /* --- Link boxes --- */
        .content {
          padding: 0 20px 100px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px;
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .link-box {
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 280px;
          height: 80px;
          border-radius: 14px;
          background: linear-gradient(145deg, #13283d, #0a1b2b);
          color: #38bdf8;
          font-size: 20px;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow:
            0 0 12px #0bc3ff88,
            inset 0 0 6px #1e40af99;
          transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }

        .link-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: -70%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(5px);
          animation: shimmer 3s linear infinite;
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: screen;
        }

        .link-box:hover {
          color: #0ea5e9;
          box-shadow:
            0 0 18px #0bc3ffcc,
            0 0 30px #38bdf8cc,
            inset 0 0 10px #1e40afcc;
          transform: scale(1.05);
          z-index: 10;
        }

        /* --- Fade in animation for links --- */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animations */
        @keyframes shimmer {
          0% { left: -70%; }
          100% { left: 120%; }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <WhiteTechParticles />

      <header className="header">
        <img src="./logo-mini.png" alt="Logo" />
        <h1>HCYU FIT Link Site</h1>
        <p>Click your class to join the Zalo group</p>
      </header>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "daiTra" ? "active" : ""}`}
          onClick={() => setActiveTab("daiTra")}
        >
          Đại trà
        </button>
        <button
          className={`tab-btn ${activeTab === "clc" ? "active" : ""}`}
          onClick={() => setActiveTab("clc")}
        >
          Chất lượng cao
        </button>
      </div>

      <main>
        <section className="content">
          {activeLinks.map(({ label, url }) => (
            <a
              href={url}
              className={`link-box fade-in-up ${mounted ? "visible" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              key={label}
            >
              {label}
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
