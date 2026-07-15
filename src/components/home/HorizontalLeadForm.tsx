"use client";
import { useState } from "react";

export default function HorizontalLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorDetails, setErrorDetails] = useState("");

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorDetails("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
      // Send both address and message mapping for backend compatibility
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Address: ${formData.address}`,
        address: formData.address,
        interest: "residential",
        postcode: formData.address.match(/\d{4}/)?.[0] ?? "2000" // extract postcode if found, else default
      };

      const res = await fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (errData.details && Array.isArray(errData.details)) {
          const msgs = errData.details.map((d: any) => d.message).join(", ");
          throw new Error(msgs);
        }
        throw new Error("Submission failed");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", address: "" });
    } catch (err: any) {
      setErrorDetails(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white border-b border-pe-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {status === "sent" ? (
          <div className="text-center py-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center gap-2">
            <span className="text-green-600 font-bold text-base">✓ Form Submitted Successfully! We will contact you soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-end">
              {/* Name */}
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-black text-pe-navy mb-1.5 uppercase tracking-wide">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange("name")}
                  className="w-full px-4.5 py-3.5 border border-pe-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-pe-gray-50/30"
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-black text-pe-navy mb-1.5 uppercase tracking-wide">
                  Email Id*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full px-4.5 py-3.5 border border-pe-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-pe-gray-50/30"
                />
              </div>

              {/* Phone */}
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-black text-pe-navy mb-1.5 uppercase tracking-wide">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter Your Number"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  className="w-full px-4.5 py-3.5 border border-pe-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-pe-gray-50/30"
                />
              </div>

              {/* Address */}
              <div className="w-full">
                <label className="block text-xs sm:text-sm font-black text-pe-navy mb-1.5 uppercase tracking-wide">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange("address")}
                  className="w-full px-4.5 py-3.5 border border-pe-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] bg-pe-gray-50/30"
                />
              </div>

              {/* Submit */}
              <div className="w-full">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[#002B5C] hover:bg-[#001F42] text-white font-black rounded-lg transition-all text-sm uppercase tracking-wider disabled:opacity-60 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  {status === "sending" ? "Sending…" : "Let's Talk Savings"}
                </button>
              </div>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-xs mt-3 bg-red-50 border border-red-200 rounded-lg p-2.5 text-center">
                {errorDetails}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
