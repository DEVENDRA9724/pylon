const brands = [
  "Jinko Solar", "Trina Solar", "Sungrow", "Fronius", "Enphase",
  "GoodWe", "Growatt", "Tesla", "Alpha ESS", "Sigenergy", "Solax", "Solis",
];

function renderBrandLogo(brand: string) {
  switch (brand) {
    case "Jinko Solar":
      return (
        <svg viewBox="0 0 140 30" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fill="#00A54F" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.02em">Jinko</text>
          <text x="64" y="22" fill="#F37021" fontSize="22" fontWeight="500" fontFamily="system-ui, sans-serif" letterSpacing="0.02em">Solar</text>
        </svg>
      );
    case "Trina Solar":
      return (
        <svg viewBox="0 0 160 30" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15c0-4.5 3.5-8 8-8s8 3.5 8 8" stroke="#00A2E8" strokeWidth="2.5" fill="none" />
          <path d="M9 15c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="#004A99" />
          <text x="30" y="21" fill="#004A99" fontSize="21" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">Trina Solar</text>
        </svg>
      );
    case "Sungrow":
      return (
        <svg viewBox="0 0 150 24" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF7029" />
          <path d="M12 4v16M4 12h16" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          <text x="32" y="19" fill="#FF7029" fontSize="19" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.05em">SUNGROW</text>
        </svg>
      );
    case "Fronius":
      return (
        <svg viewBox="0 0 120 20" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="16" fill="#E30613" fontSize="19" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">FRONIUS</text>
        </svg>
      );
    case "Enphase":
      return (
        <svg viewBox="0 0 150 26" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="11" fill="#F37321" />
          <path d="M13 7a6 6 0 0 0-6 6c0 3.3 2.7 6 6 6h4v-2.5h-4a3.5 3.5 0 0 1-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v1h-5v2h7v-3a6 6 0 0 0-6-6z" fill="#FFFFFF" />
          <text x="32" y="20" fill="#1C1C1C" fontSize="20" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.02em">ENPHASE</text>
        </svg>
      );
    case "GoodWe":
      return (
        <svg viewBox="0 0 140 26" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="11" fill="#E2001A" />
          <path d="M13 7a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V7z" fill="#FFFFFF" />
          <text x="32" y="20" fill="#E2001A" fontSize="21" fontWeight="900" fontFamily="system-ui, sans-serif">GOODWE</text>
        </svg>
      );
    case "Growatt":
      return (
        <svg viewBox="0 0 140 24" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18h14" stroke="#00B050" strokeWidth="2.5" />
          <path d="M11 18V9c0-3.5 2.5-6 6-6-2.5 1.5-3.5 4-3.5 7v8" stroke="#00B050" strokeWidth="2.5" />
          <text x="30" y="19" fill="#111111" fontSize="19" fontWeight="900" fontFamily="system-ui, sans-serif">Growatt</text>
        </svg>
      );
    case "Tesla":
      return (
        <svg viewBox="0 0 120 24" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5l2.5-3s4 .1 8.5 2c-1.1 1.6-3.2 2.4-3.2 2.4-.1-1.4-1.2-1.8-4.4-1.8L12 24 8.6 5c-3.2 0-4.2.4-4.3 1.8 0 0-2.1-.8-3.2-2.4 4.2-1.9 8.5-2 8.5-2L12 5z" fill="#E31937" />
          <text x="32" y="19" fill="#E31937" fontSize="20" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.25em">TESLA</text>
        </svg>
      );
    case "Alpha ESS":
      return (
        <svg viewBox="0 0 150 24" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill="#0D5DB5" />
          <path d="M9 14.5l3-6 3 6M10.5 12h3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="32" y="18" fill="#0D5DB5" fontSize="18" fontWeight="900" fontFamily="system-ui, sans-serif">Alpha ESS</text>
        </svg>
      );
    case "Sigenergy":
      return (
        <svg viewBox="0 0 150 24" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#00A896" />
          <path d="M8.5 14.5c0-1.5 2-2 3.5-2.5s3.5-1 3.5-2.5c0-1.5-1.5-2-3.5-2S8.5 8.5 8.5 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="32" y="18" fill="#111111" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif">Sigenergy</text>
        </svg>
      );
    case "Solax":
      return (
        <svg viewBox="0 0 130 24" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#E30613" />
          <path d="M8 8l8 8M16 8L8 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="30" y="18" fill="#E30613" fontSize="19" fontWeight="900" fontFamily="system-ui, sans-serif">SolaX</text>
        </svg>
      );
    case "Solis":
      return (
        <svg viewBox="0 0 120 24" className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="7" fill="#FF8C00" />
          <path d="M12 2l1.5 3h-3zM12 22l1.5-3h-3zM2 12l3 1.5v-3zM22 12l-3 1.5v-3z" fill="#FF8C00" />
          <text x="30" y="18" fill="#111111" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif">Solis</text>
        </svg>
      );
    default:
      return null;
  }
}

export default function BrandsCarousel() {
  const all = [...brands, ...brands];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="section-label mx-auto justify-center" style={{ color: '#29ABE2' }}>TRUSTED BRANDS</p>
        <h2 className="section-title">Solar Brands &amp; Inverter Brands We Install</h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-left items-center py-4 px-2" style={{ width: "max-content" }}>
          {all.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-8 py-5 rounded-2xl bg-white border-2 border-[#E2E8F0] shadow-sm hover:border-[#29ABE2] transition-all duration-300 cursor-default"
            >
              {renderBrandLogo(brand)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
