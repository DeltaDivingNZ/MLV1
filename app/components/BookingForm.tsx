"use client";

import { useState, useEffect, useRef } from "react";

export default function QuoteForm() {
  const servicesList = [
    "Lawn Mowing Quote",
    "Hedge Trimming Quote",
    "General Enquiry",
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string>("");
  const [showServices, setShowServices] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newErrors: Record<string, string> = {};
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("name")) newErrors.name = "Please enter your name";
    if (!formData.get("email")) newErrors.email = "Please enter your email";
    if (!formData.get("phone")) newErrors.phone = "Please enter your phone number";
    if (!propertyType)
      newErrors.propertyType = "Please select a property type";
    if (selectedServices.length === 0)
      newErrors.services = "Please select at least one service";

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    setErrors({});
  };

  const isFormValid =
    selectedServices.length > 0 &&
    propertyType !== "" &&
    typeof document !== "undefined" &&
    (() => {
      const form = document.querySelector("form");
      return form ? form.checkValidity() : false;
    })();

  return (
    <section className="bg-[#f4f7f3] p-6 rounded-lg shadow-lg font-body">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
        Request a Quote
      </h2>

      <form
        action="https://usebasin.com/f/7de6409958c9"
        method="POST"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded border border-gray-300"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded border border-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 rounded border border-gray-300"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Property Type
          </label>
          <div className="flex gap-6 text-gray-700">
            {["Residential", "Commercial"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="property_type"
                  value={type}
                  required
                  checked={propertyType === type}
                  onChange={() => setPropertyType(type)}
                />
                {type}
              </label>
            ))}
          </div>
          {errors.propertyType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.propertyType}
            </p>
          )}
        </div>

        {/* Services */}
        <div className="relative" ref={dropdownRef}>
          <label className="block mb-2 font-semibold text-gray-700">
            Service Required
          </label>

          <div
            className={`border rounded px-3 py-2 cursor-pointer bg-white font-semibold ${
              errors.services ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => setShowServices(!showServices)}
          >
            {selectedServices.length > 0
              ? selectedServices.join(", ")
              : "Select service(s) ▼"}
          </div>

          {showServices && (
            <div className="absolute z-10 w-full border rounded bg-white mt-1 max-h-60 overflow-y-auto shadow-lg p-3">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 mb-2 cursor-pointer text-gray-700 hover:text-green-700"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          )}

          {errors.services && (
            <p className="text-red-500 text-sm mt-1">{errors.services}</p>
          )}

          <input
            type="hidden"
            name="services"
            value={selectedServices.join(", ")}
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Additional Details (optional)
          </label>
          <textarea
            name="notes"
            rows={4}
            className="w-full p-2 rounded border border-gray-300"
            placeholder="Tell us anything helpful about your lawn or garden"
          />
        </div>

        <p className="text-sm text-gray-600">
          You’re welcome to reply to our confirmation email with photos to help
          us quote more accurately.
        </p>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isFormValid
              ? "bg-green-700 hover:bg-green-800 text-white"
              : "bg-gray-400 cursor-not-allowed text-white"
          }`}
        >
          Request Quote
        </button>
      </form>
    </section>
  );
}
