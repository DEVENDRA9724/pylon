const brands = [
  "Jinko Solar", "Trina Solar", "Sungrow", "Fronius", "Enphase",
  "GoodWe", "Growatt", "Tesla", "Alpha ESS", "Sigenergy", "Solax", "Solis",
];

function renderBrandLogo(brand: string) {
  switch (brand) {
    case "Tesla":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#E31937]" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28" />
        </svg>
      );
    case "Enphase":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#F37321" />
          <path d="M7 12a5 5 0 0 1 5-5h1v2h-1a3 3 0 0 0-3 3 3 3 0 0 0 3 3h3v2h-3a5 5 0 0 1-5-5z" fill="#FFFFFF" />
          <rect x="11" y="10" width="6" height="2" rx="1" fill="#FFFFFF" />
        </svg>
      );
    case "Sungrow":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF6B00" />
          <path d="M12 7v10M9 9h6M9 13h6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "Jinko Solar":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#FF8C00" />
          <path d="M12 7v10M9 9h6M9 13h6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Trina Solar":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#005A9C" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" fill="#29ABE2" />
        </svg>
      );
    case "Growatt":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#00B050" />
          <path d="M8 12l3 3 5-5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Fronius":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#E30613" />
          <path d="M7 6h10v3H10v3h6v3H10v4H7V6z" fill="#FFFFFF" />
        </svg>
      );
    case "GoodWe":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 5v6c0 5.25 3.42 10.16 8 11 4.58-.84 8-5.75 8-11V5l-8-3z" fill="#E2001A" />
          <path d="M9 11l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Alpha ESS":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" fill="#0D5DB5" />
          <path d="M12 6v12M8 9h8" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case "Sigenergy":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#00A896" />
          <path d="M12 6c-3 0-4 2-4 4s1 4 4 4 4-2 4-4-1-4-4-4zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" fill="#FFFFFF" />
        </svg>
      );
    case "Solax":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#64748B" />
          <path d="M6 6l12 12M18 6L6 18" stroke="#E30613" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "Solis":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="6" fill="#FF8C00" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BrandsCarousel() {
  // Duplicate for seamless loop
  const all = [...brands, ...brands];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="section-label mx-auto justify-center" style={{ color: '#29ABE2' }}>TRUSTED BRANDS</p>
        <h2 className="section-title">Solar Brands &amp; Inverter Brands We Install</h2>
      </div>

      {/* Row 1 — left */}
      <div className="relative mb-6">
        <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
          {all.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white border border-slate-100 text-pe-navy font-bold text-sm shadow-[0_4px_15px_rgba(0,43,92,0.03)] hover:border-[#29ABE2] hover:shadow-[0_8px_25px_rgba(41,171,226,0.08)] transition-all duration-300 cursor-default whitespace-nowrap"
            >
              {renderBrandLogo(brand)}
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right (reverse direction) */}
      <div className="relative">
        <div
          className="flex gap-5"
          style={{
            width: "max-content",
            animation: "scroll-left 35s linear infinite reverse",
          }}
        >
          {[...all].reverse().map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white border border-slate-100 text-pe-gray-600 font-bold text-sm shadow-[0_4px_15px_rgba(0,43,92,0.03)] hover:border-[#002B5C] hover:shadow-[0_8px_25px_rgba(0,43,92,0.06)] transition-all duration-300 cursor-default whitespace-nowrap"
            >
              {renderBrandLogo(brand)}
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
