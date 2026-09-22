"use client";

import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Building2,
} from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        details: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        let text = `Hello, my name is ${formData.name}. I would like to book a service for: ${formData.service}.`;
        if (formData.company) text += `\nCompany: ${formData.company}`;
        if (formData.email) text += `\nEmail: ${formData.email}`;
        if (formData.phone) text += `\nPhone: ${formData.phone}`;
        if (formData.address) text += `\nAddress: ${formData.address}`;
        if (formData.details) text += `\nNotes: ${formData.details}`;
        
        // Airtronics company WhatsApp number
        const url = `https://wa.me/971586596321?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');

        // Reset form
        setFormData({
            name: '', company: '', email: '', phone: '', address: '', service: '', details: ''
        });
    };

    return (
        <section className="bg-[#f7f8fa] py-10">
            <div className="container mx-auto max-w-[1200px] px-6">

                <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">

                    <div className="grid lg:grid-cols-[420px_1fr]">

                        {/* Left Side */}

                        <div className="bg-[#fafafa] p-10 border-r border-slate-200">

                            <h2 className="text-3xl font-medium text-black">
                                Get in Touch
                            </h2>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Need HVAC installation, AC repair, AMC, duct cleaning,
                                or commercial HVAC solutions? Contact our team today.
                            </p>

                            <div className="mt-10 space-y-8">

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#005eb8] text-white">
                                        <MapPin size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-black">
                                            Office Address
                                        </h4>

                                        <p className="mt-1 text-slate-600">
                                            Commercial Bank of Dubai Building, M-01
                                            <br />
                                            Al Kabeesi, Dubai, UAE
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#005eb8] text-white">
                                        <Phone size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-black">
                                            Call Us
                                        </h4>

                                        <p className="mt-1 text-slate-600">
                                            +971 55 561 9369
                                            <br />
                                            +971 50 240 6545
                                            <br />
                                            +971 58 659 6321
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#005eb8] text-white">
                                        <Mail size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-black">
                                            Email
                                        </h4>

                                        <p className="mt-1 text-slate-600">
                                            airtronics6@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#005eb8] text-white">
                                        <Building2 size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-black">
                                            Service Area
                                        </h4>

                                        <p className="mt-1 text-slate-600">
                                            Residential & Commercial HVAC
                                            Across Dubai, UAE
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Side */}

                        <div className="p-10 lg:p-12">

                            <h2 className="text-3xl font-medium text-black">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-4">

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        required
                                        type="text"
                                        placeholder="Name *"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                </div>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        required
                                        type="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                    <input
                                        required
                                        type="tel"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                </div>

                                <input
                                    required
                                    type="text"
                                    placeholder="Address *"
                                    value={formData.address}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    className="w-full h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                />

                                <select
                                    required
                                    value={formData.service}
                                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                                    className="w-full h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                >
                                    <option value="">Select Service *</option>
                                    <option value="AC Installation">AC Installation</option>
                                    <option value="AC Repair">AC Repair</option>
                                    <option value="HVAC Service">HVAC Service</option>
                                    <option value="Duct Cleaning">Duct Cleaning</option>
                                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                                    <option value="Commercial HVAC Solutions">Commercial HVAC Solutions</option>
                                </select>

                                <textarea
                                    rows={6}
                                    placeholder="Tell us about your requirement..."
                                    value={formData.details}
                                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                                    className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-[#005eb8]"
                                />

                                <button
                                    type="submit"
                                    className="h-14 rounded-full bg-[#25D366] px-8 text-white font-medium transition hover:opacity-90 flex items-center justify-center gap-2"
                                >
                                    Continue to WhatsApp
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}