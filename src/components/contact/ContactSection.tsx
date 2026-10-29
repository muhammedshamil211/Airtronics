"use client";

import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Building2,
    Clock,
    ShieldCheck,
    CheckCircle2,
    ChevronDown,
    Send,
    User,
    FileText,
    ExternalLink
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.35.491 1.199.534 1.286.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
        </svg>
    );
}

const SERVICE_AREAS = [
    "Dubai Marina",
    "Downtown Dubai",
    "Palm Jumeirah",
    "Business Bay",
    "Arabian Ranches",
    "JLT",
    "Al Barsha",
    "Mirdif",
    "Jumeirah",
    "Deira"
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        subCategory: '',
        details: ''
    });

    const selectedService = SERVICES_DATA.find(
        (s) => s.shortTitle === formData.service || s.title === formData.service || s.slug === formData.service
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format high-clarity structured dispatch message for technician WhatsApp
        const serviceText = formData.subCategory
            ? `${formData.service} (${formData.subCategory})`
            : formData.service || 'HVAC Inspection / Repair';

        let text = `*NEW HVAC SERVICE INQUIRY - AIRTRONICS FIXCARE*\n`;
        text += `----------------------------------------\n`;
        text += `• *Customer Name:* ${formData.name}\n`;
        if (formData.company) text += `• *Company:* ${formData.company}\n`;
        text += `• *Phone:* ${formData.phone}\n`;
        if (formData.email) text += `• *Email:* ${formData.email}\n`;
        text += `• *Address / Area:* ${formData.address}\n`;
        text += `• *Requested Service:* ${serviceText}\n`;
        if (formData.details) text += `• *Notes / Symptoms:* ${formData.details}\n`;
        text += `----------------------------------------\n`;
        text += `_Sent via airtronicsfixcare.com dispatch desk_`;

        // Airtronics primary dispatch WhatsApp
        const url = `https://wa.me/971586596321?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');

        // Reset form
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            address: '',
            service: '',
            subCategory: '',
            details: ''
        });
    };

    return (
        <section
            id="contact-section"
            className="bg-[#f7f8fa] py-12 sm:py-16 lg:py-20 border-b border-slate-200/80"
            aria-labelledby="contact-heading"
        >
            <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">

                <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12">

                        {/* ========================================================================= */}
                        {/* LEFT COLUMN: DIRECT COMMUNICATION & DISPATCH INFORMATION                  */}
                        {/* ========================================================================= */}
                        <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/70 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
                            
                            {/* Live Status Indicator */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>24/7 Dispatch Desk Active • Response &lt; 15 mins</span>
                            </div>

                            <h2
                                id="contact-heading"
                                className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-950 mb-3"
                            >
                                Get in Touch
                            </h2>

                            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8">
                                Connect directly with our certified technical engineers for emergency AC breakdown repairs, annual maintenance (AMC), or customized HVAC installations across Dubai.
                            </p>

                            {/* Communication Channels */}
                            <div className="space-y-6">

                                {/* Phone Numbers */}
                                <div className="flex items-start gap-3.5 group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005eb8] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#005eb8] group-hover:text-white transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                                            Phone Hotlines (24/7)
                                        </span>
                                        <div className="space-y-1">
                                            <a
                                                href="tel:+971586596321"
                                                className="font-medium text-slate-900 hover:text-[#005eb8] text-sm sm:text-base transition-colors flex items-center gap-2"
                                            >
                                                <span>+971 58 659 6321</span>
                                                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Primary</span>
                                            </a>
                                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600 pt-0.5">
                                                <a href="tel:+971555619369" className="hover:text-[#005eb8] transition-colors">
                                                    +971 55 561 9369
                                                </a>
                                                <span>•</span>
                                                <a href="tel:+971502406545" className="hover:text-[#005eb8] transition-colors">
                                                    +971 50 240 6545
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-3.5 group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005eb8] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#005eb8] group-hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                                            Official Email
                                        </span>
                                        <a
                                            href="mailto:airtronics6@gmail.com"
                                            className="font-medium text-slate-900 hover:text-[#005eb8] text-sm sm:text-base transition-colors break-all"
                                        >
                                            airtronics6@gmail.com
                                        </a>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            RFQs, corporate tenders &amp; official inquiries
                                        </p>
                                    </div>
                                </div>

                                {/* Office Address */}
                                <div className="flex items-start gap-3.5 group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005eb8] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#005eb8] group-hover:text-white transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                                            Registered Office
                                        </span>
                                        <p className="text-slate-800 text-sm leading-relaxed">
                                            Commercial Bank of Dubai Building, M-01<br />
                                            Al Khabaisi, Deira, Dubai, UAE
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=Commercial+Bank+of+Dubai+Building+Al+Khabaisi+Dubai"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs text-[#005eb8] hover:underline font-semibold mt-1"
                                        >
                                            <span>Open in Google Maps</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>

                            </div>

                            {/* Dubai Service Areas List */}
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2.5">
                                    Rapid On-Site Dispatch Coverage
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {SERVICE_AREAS.map((area) => (
                                        <span
                                            key={area}
                                            className="text-[11px] font-medium bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Dubai Municipality &amp; FTA TRN Verified (100582947100003)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#005eb8] shrink-0" />
                                    <span>Guaranteed 30–45 Minute Emergency Dispatch</span>
                                </div>
                            </div>

                        </div>

                        {/* ========================================================================= */}
                        {/* RIGHT COLUMN: HIGH-CONTRAST ACCESSIBLE DISPATCH FORM                      */}
                        {/* ========================================================================= */}
                        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 bg-white">
                            
                            <div className="mb-6 sm:mb-8">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8] block mb-1">
                                    Online Service Request
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-950">
                                    Book an HVAC Inspection
                                </h3>
                                <p className="text-slate-600 text-sm mt-1">
                                    Fill in your details below. Our engineering dispatch desk connects via WhatsApp instantly with no delay.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                                {/* Row 1: Full Name & Company Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label
                                            htmlFor="contact-name"
                                            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                        >
                                            Full Name <span className="text-rose-600 font-bold">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            required
                                            type="text"
                                            placeholder="e.g., Mohammed Al Rashid"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full h-12 sm:h-13 rounded-xl border border-slate-300 bg-white px-3.5 text-[16px] text-slate-900 placeholder:text-slate-500 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-company"
                                            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                        >
                                            Company / Building Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                                        </label>
                                        <input
                                            id="contact-company"
                                            type="text"
                                            placeholder="e.g., Al Wasl Tower / Villa 24"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full h-12 sm:h-13 rounded-xl border border-slate-300 bg-white px-3.5 text-[16px] text-slate-900 placeholder:text-slate-500 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone Number */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label
                                            htmlFor="contact-phone"
                                            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                        >
                                            Phone Number <span className="text-rose-600 font-bold">*</span>
                                        </label>
                                        <input
                                            id="contact-phone"
                                            required
                                            type="tel"
                                            placeholder="+971 50 123 4567"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full h-12 sm:h-13 rounded-xl border border-slate-300 bg-white px-3.5 text-[16px] text-slate-900 placeholder:text-slate-500 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15 font-sans"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-email"
                                            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                        >
                                            Email Address <span className="text-rose-600 font-bold">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            required
                                            type="email"
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full h-12 sm:h-13 rounded-xl border border-slate-300 bg-white px-3.5 text-[16px] text-slate-900 placeholder:text-slate-500 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: Physical Address / Location */}
                                <div>
                                    <label
                                        htmlFor="contact-address"
                                        className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                    >
                                        Location / Area in Dubai <span className="text-rose-600 font-bold">*</span>
                                    </label>
                                    <input
                                        id="contact-address"
                                        required
                                        type="text"
                                        placeholder="e.g., Downtown Dubai, Burj Vista Tower 1, Apt 1402"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="w-full h-12 sm:h-13 rounded-xl border border-slate-300 bg-white px-3.5 text-[16px] text-slate-900 placeholder:text-slate-500 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15"
                                    />
                                </div>

                                {/* Row 4: HVAC Service Select */}
                                <div>
                                    <label
                                        htmlFor="contact-service"
                                        className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                    >
                                        Required HVAC Service <span className="text-rose-600 font-bold">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="contact-service"
                                            required
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value, subCategory: '' })}
                                            className="w-full h-12 sm:h-13 rounded-xl border border-slate-300 bg-white px-3.5 pr-10 text-[16px] text-slate-900 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-slate-400">
                                                Select HVAC Service Category...
                                            </option>
                                            {SERVICES_DATA.map((srv) => (
                                                <option key={srv.slug} value={srv.shortTitle} className="text-slate-900 py-1">
                                                    {srv.shortTitle} — {srv.title}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                                            <ChevronDown className="w-4 h-4 stroke-[2.25]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 5: Conditional Sub-Category Selector */}
                                {selectedService?.subcategories && selectedService.subcategories.length > 0 && (
                                    <div className="animate-in fade-in duration-200">
                                        <label
                                            htmlFor="contact-subcategory"
                                            className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-1.5"
                                        >
                                            Specific Sub-Category <span className="text-slate-400 font-normal lowercase">(optional - general diagnostic included)</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="contact-subcategory"
                                                value={formData.subCategory}
                                                onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                                                className="w-full h-12 sm:h-13 rounded-xl border border-blue-200 bg-blue-50/50 px-3.5 pr-10 text-[16px] text-slate-900 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15 appearance-none cursor-pointer"
                                            >
                                                <option value="" className="text-slate-600">
                                                    General Inspection &amp; Diagnosis
                                                </option>
                                                {selectedService.subcategories.map((sub) => (
                                                    <option key={sub} value={sub} className="text-slate-900 py-1">
                                                        {sub}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600">
                                                <ChevronDown className="w-4 h-4 stroke-[2.25]" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Row 6: Requirements Notes */}
                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <label
                                            htmlFor="contact-details"
                                            className="block text-xs font-semibold uppercase tracking-wider text-slate-800"
                                        >
                                            Tell Us About Your Issue / Requirement <span className="text-slate-400 font-normal lowercase">(optional)</span>
                                        </label>
                                        <span className="text-[11px] text-slate-400">
                                            AC not cooling, water leak, unusual noise, etc.
                                        </span>
                                    </div>
                                    <textarea
                                        id="contact-details"
                                        rows={4}
                                        placeholder="Describe the issue (e.g., AC blowing warm air in living room, error code E4 on thermostat, annual villa AC servicing)..."
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-[16px] text-slate-900 placeholder:text-slate-500 shadow-2xs transition-colors duration-150 outline-none focus:border-[#005eb8] focus:ring-3 focus:ring-[#005eb8]/15 resize-y min-h-[105px]"
                                    />
                                </div>

                                {/* Form Actions & Micro-Copy */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-150 cursor-pointer"
                                    >
                                        <WhatsAppIcon className="w-5 h-5 shrink-0" />
                                        <span>Connect with Technician (WhatsApp)</span>
                                        <Send className="w-4 h-4 shrink-0 ml-1" />
                                    </button>

                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 text-xs text-slate-500">
                                        <div className="flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                            <span>Instant WhatsApp payload</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <ShieldCheck className="w-3.5 h-3.5 text-[#005eb8] shrink-0" />
                                            <span>Zero obligation quote</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                            <span>30–45 min on-site arrival</span>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
