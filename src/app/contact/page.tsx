import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Airtronics Fixcare | AC Repair in Dubai",
    description: "Contact Airtronics Fixcare for expert AC repair, HVAC maintenance, duct cleaning, and installation services across Dubai. Fast response guaranteed.",
    keywords: ["AC Repair Dubai", "HVAC Maintenance Dubai", "Duct Cleaning Dubai", "AC Installation Dubai", "Contact Airtronics", "Airtronics Fixcare"]
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactSection/>
        </main>
    );
}