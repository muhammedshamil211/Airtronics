"use client";

import {
    MapPin,
    Phone,
    Mail,
    Building2,
} from "lucide-react";

export default function ContactSection() {
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

                            <form className="mt-8 space-y-4">

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                </div>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                    />

                                </div>

                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                />

                                <select
                                    className="w-full h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-[#005eb8]"
                                >
                                    <option>Select Service</option>
                                    <option>AC Installation</option>
                                    <option>AC Repair</option>
                                    <option>HVAC Service</option>
                                    <option>Duct Cleaning</option>
                                    <option>Annual Maintenance Contract (AMC)</option>
                                    <option>Commercial HVAC Solutions</option>
                                </select>

                                <textarea
                                    rows={6}
                                    placeholder="Tell us about your requirement..."
                                    className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-[#005eb8]"
                                />

                                <button
                                    type="submit"
                                    className="h-14 rounded-full bg-[#005eb8] px-8 text-white font-medium transition hover:opacity-90"
                                >
                                    Submit Request
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}