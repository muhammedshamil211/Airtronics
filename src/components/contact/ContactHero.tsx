import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] pt-5 pb-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Top Label */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-[#005eb8] font-medium">/</span>
          <span className="text-m font-medium text-slate-900">
            Contact Airtronics HVAC Experts
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h1 className="max-w-3xl text-[45px] leading-[0.95] font-normal tracking-tight text-black md:text-[55px] lg:text-[60px]">
              Let's Talk
              <br />
              About Your
              <br />
              HVAC Needs
            </h1>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <p className="max-w-xl text-l leading-relaxed text-slate-600">
              Need AC repair, HVAC maintenance, duct cleaning, or a new
              installation? Our certified technicians are ready to assist
              residential and commercial properties across Dubai.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="tel:+971555619369"
                className="inline-flex items-center gap-3 rounded-full bg-[#005eb8] px-5 py-4 text-s md:text-m font-medium text-white transition hover:opacity-90"
              >
                Call For Booking
                <ArrowRight size={18} />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-4 text-s md:text-m font-medium text-slate-900 shadow-sm transition hover:border-[#005eb8]"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Contact */}

          </div>
        </div>
      </div>
    </section>
  );
}