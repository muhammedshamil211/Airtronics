export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  heroHighlights: string[];
  keyBenefits: {
    title: string;
    description: string;
  }[];
  specifications: string[];
  commonIssuesSolved: string[];
  dubaiLocations: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'ac-repair',
    id: '01',
    title: 'Emergency AC Repair & Diagnostic Services in Dubai',
    shortTitle: 'AC Repair & Diagnostics',
    tagline: 'Rapid 30–45 minute on-site emergency dispatch across Dubai with genuine OEM parts and 90-day warranty.',
    badge: '30–45 Min Dispatch',
    image: '/images/ac_repair_split_glow.jpg',
    metaTitle: 'AC Repair Dubai | 24/7 Emergency AC Maintenance & Diagnostics',
    metaDescription: 'Emergency AC repair in Dubai within 30–45 mins. Certified technicians for split, central, and VRF AC units. Genuine OEM parts, upfront pricing & zero diagnostic fee with repair.',
    keywords: [
      'AC repair Dubai',
      'emergency AC repair Dubai',
      'AC not cooling Dubai',
      'AC gas leak repair Dubai',
      'AC compressor replacement Dubai',
      'split AC repair Dubai',
      'central AC repair Dubai',
      '24/7 AC repair Dubai'
    ],
    overview: 'When the Dubai summer temperatures soar past 45°C, an air conditioning breakdown is a health and safety emergency. Airtronics Fixcare Technical Services LLC delivers 24/7 rapid-response AC repair throughout Dubai. Our certified technicians arrive equipped with digital manifold gauges, laser thermometers, and genuine OEM replacement parts to diagnose and resolve cooling failures on the first visit.',
    heroHighlights: [
      '30–45 minute rapid arrival across all major Dubai communities',
      'Zero diagnostic charge when repair is approved and completed',
      '100% genuine factory OEM compressors, capacitors, and fan motors',
      'Comprehensive 90-day written warranty covering parts and labor'
    ],
    keyBenefits: [
      {
        title: 'Precision Digital Diagnostics',
        description: 'We test thermodynamic suction pressures, superheat/subcooling calculations, and electrical draw to target the root cause—not just temporary symptoms.'
      },
      {
        title: '100% Genuine OEM Replacements',
        description: 'Direct factory replacement parts for Daikin, O General, Carrier, York, Gree, LG, and Mitsubishi units, preserving manufacturer warranties.'
      },
      {
        title: 'Fixed Upfront Pricing Guarantee',
        description: 'Written itemized quotations provided before any work starts. No surprise invoices, hidden labor fees, or unauthorized component replacements.'
      },
      {
        title: '24/7 Round-the-Clock Dispatch',
        description: 'Mobile technician teams positioned across Dubai Marina, Palm Jumeirah, Downtown, and JVC for immediate emergency dispatch day or night.'
      }
    ],
    specifications: [
      'Refrigerant gas leak detection & electronic sniffer inspection',
      'R410A, R22, and R32 pressure top-up and vacuum dehydration',
      'Capacitor, contactor, and relay electrical component replacement',
      'Evaporator coil chemical cleaning & drainage descaling',
      'Thermostat recalibration and smart controller installation',
      'Centrifugal blower fan and outdoor condenser motor overhaul'
    ],
    commonIssuesSolved: [
      'AC blowing warm or humid air during peak midday heat',
      'Water leaking from the indoor AC unit or ceiling vent',
      'Frequent tripping of the electrical circuit breaker (MCB)',
      'Loud grinding, buzzing, or rattling noises from the compressor',
      'Musty, damp, or burning electrical smells coming from vents',
      'Frozen ice buildup along evaporator coils or refrigerant copper lines'
    ],
    dubaiLocations: [
      'Dubai Marina',
      'Downtown Dubai',
      'Palm Jumeirah',
      'Jumeirah Village Circle (JVC)',
      'Business Bay',
      'Arabian Ranches',
      'Dubai Hills Estate',
      'Al Barsha',
      'Jumeirah Lakes Towers (JLT)',
      'Mirdif'
    ],
    faqs: [
      {
        q: 'How fast can your AC repair technician reach my property in Dubai?',
        a: 'Our average emergency dispatch response time is 30 to 45 minutes across central Dubai, including Dubai Marina, Downtown, Palm Jumeirah, and JVC.'
      },
      {
        q: 'Do you charge a diagnostic fee for AC inspection?',
        a: 'We provide a transparent diagnostic assessment. When you approve our written quotation and proceed with the repair, your diagnostic inspection fee is 100% waived.'
      },
      {
        q: 'What warranty is provided on replacement AC parts?',
        a: 'All genuine OEM parts installed by Airtronics Fixcare come with a 90-day written guarantee covering both the component and our repair labor.'
      },
      {
        q: 'Can you repair district cooling FCU systems in high-rise towers?',
        a: 'Yes, our certified technicians are specialized in chilled water Fan Coil Units (FCU), modulating 2-way/3-way actuator valves, and thermostat interfaces common in Empower and Emicool towers.'
      }
    ]
  },
  {
    slug: 'ac-installation',
    id: '02',
    title: 'Turnkey AC Installation & Replacement in Dubai',
    shortTitle: 'AC Installation & Replacement',
    tagline: 'Energy-efficient split, ducted, VRF and package unit installations with precise BTU heat-load engineering.',
    badge: 'Turnkey Replacement',
    image: '/images/ac_cassette_installation.jpg',
    metaTitle: 'AC Installation Dubai | New Split & Central AC Unit Replacement',
    metaDescription: 'Certified AC installation & replacement in Dubai for villas, apartments & offices. Accurate BTU load calculation, premium copper piping & 1-year installation warranty.',
    keywords: [
      'AC installation Dubai',
      'new AC replacement Dubai',
      'split AC installation Dubai',
      'central AC installation Dubai',
      'VRF installation Dubai',
      'O General AC installation Dubai',
      'Daikin AC installation Dubai',
      'villa AC replacement Dubai'
    ],
    overview: 'Proper air conditioner sizing and installation determines over 70% of a system’s operating efficiency and lifespan. Airtronics Fixcare delivers certified residential and commercial AC installations across Dubai. We calculate exact thermodynamic cubic-meter heat loads, install premium Class-O insulated copper piping, and configure vibration-dampened mounts for whisper-quiet performance.',
    heroHighlights: [
      'Computerized BTU heat-load and CFM airflow volume calculations',
      'Official brand installation partner for Daikin, O General, Carrier & York',
      'Full DEWA electrical compliance and safety isolation switch integration',
      '1-year workmanship warranty plus manufacturer compressor warranty'
    ],
    keyBenefits: [
      {
        title: 'Accurate Sizing Eliminates High Bills',
        description: 'Oversized units short-cycle and leave high humidity, while undersized units run non-stop. We engineer the exact capacity needed for Dubai’s extreme climate.'
      },
      {
        title: 'Premium Materials & Zero Leaks',
        description: 'We exclusively use thick-gauge seamless copper tubing, nitrogen-purged brazing, and double-insulated Armaflex lagging to prevent condensation leaks.'
      },
      {
        title: 'Seamless Turnkey Replacement',
        description: 'Safe decommissioning and eco-friendly disposal of old equipment, ceiling opening protection, and clean completion without damaging your interior decor.'
      },
      {
        title: 'Enhanced SEER Energy Efficiency',
        description: 'Modern inverter air conditioning systems reduce monthly electricity bills by up to 30% compared to aging 10-year-old units.'
      }
    ],
    specifications: [
      'Precision Manual J / ASHRAE heat load calculation',
      'High-grade copper piping with nitrogen-purged silver brazing',
      'Anti-vibration rubber condenser pads & acoustic ceiling dampers',
      'Dedicated electrical breaker, isolator switch & earth leakage protection',
      'Condensate gravity drainage piping with secondary overflow protection',
      'System evacuation to 500 microns vacuum before refrigerant release'
    ],
    commonIssuesSolved: [
      'Aging AC unit requiring costly refrigerant refills every few months',
      'High monthly DEWA electricity bills from inefficient compressors',
      'Insufficient cooling in villa extensions, sunrooms, or open kitchens',
      'Noisy indoor or outdoor units causing sleep disturbance',
      'Frequent breakdowns on legacy R22 systems where parts are obsolete'
    ],
    dubaiLocations: [
      'Arabian Ranches',
      'Dubai Hills Estate',
      'Palm Jumeirah Villas',
      'Jumeirah Islands',
      'The Villa',
      'Damac Hills',
      'Al Barsha',
      'Umm Suqeim',
      'Downtown Dubai',
      'Business Bay'
    ],
    faqs: [
      {
        q: 'Which AC brand is best suited for Dubai homes?',
        a: 'For heavy Dubai conditions, O General, Daikin, Carrier, and York are market leaders due to their robust T3 tropicalized compressors designed for 52°C ambient temperatures.'
      },
      {
        q: 'How long does a complete split or ducted AC replacement take?',
        a: 'A standard split AC replacement takes 3 to 5 hours. A full ducted villa AC replacement usually takes 1 to 2 days including testing and commissioning.'
      },
      {
        q: 'Do you dispose of our old AC unit?',
        a: 'Yes, our turnkey service includes complete decommissioning, safe recovery of old refrigerant, and eco-friendly disposal.'
      }
    ]
  },
  {
    slug: 'hvac-maintenance',
    id: '03',
    title: 'Comprehensive HVAC Maintenance & Energy Tuning in Dubai',
    shortTitle: 'HVAC Maintenance & Tuning',
    tagline: '24-point thermodynamic tuning, chemical coil washing, and electrical optimization to lower DEWA bills by up to 25%.',
    badge: 'Lower DEWA Bills by 25%',
    image: '/images/hvac_maintenance_technician.jpg',
    metaTitle: 'HVAC Maintenance Dubai | Comprehensive 24-Point AC Servicing',
    metaDescription: 'Professional HVAC maintenance in Dubai. 24-point thermodynamic tune-up, coil chemical cleaning, gas pressure testing & electrical calibration to cut DEWA power bills.',
    keywords: [
      'HVAC maintenance Dubai',
      'AC servicing Dubai',
      'preventive AC maintenance Dubai',
      'AC coil cleaning Dubai',
      'AC gas top up Dubai',
      'HVAC tune up Dubai',
      'DEWA AC bill reduction'
    ],
    overview: 'Dubai’s harsh desert sand, airborne dust, and high humidity clog air conditioning coils within weeks, forcing compressors to draw up to 40% more electricity to cool your space. Airtronics Fixcare provides comprehensive 24-point preventive maintenance that cleans heat exchangers, clears clogged drains, and tunes refrigerant pressures to peak factory efficiency.',
    heroHighlights: [
      'Deep chemical pressure washing of indoor and outdoor coils',
      'Nitrogen blow-through and chemical descaling of AC drain lines',
      'Operating amp draw measurement to prevent electrical overloads',
      'Documented before-and-after thermal imaging and performance report'
    ],
    keyBenefits: [
      {
        title: 'Up to 25% Reduction in DEWA Costs',
        description: 'Clean heat-exchange coils transfer thermal energy freely, allowing the compressor to hit thermostat setpoints faster with less electrical draw.'
      },
      {
        title: 'Prevents 90% of Summer Breakdowns',
        description: 'Proactive detection of weak capacitors, worn motor bearings, and micro refrigerant leaks before they turn into emergency shutdowns.'
      },
      {
        title: 'Eliminates Ceiling Water Leaks',
        description: 'Algae and dust form gelatinous sludge in Dubai AC drain pans. Our high-pressure line flush prevents catastrophic drywall ceiling collapses.'
      },
      {
        title: 'Extends Equipment Lifespan by Years',
        description: 'Regular preventative servicing prevents compressor overheating and acid buildup, doubling the operating lifespan of your HVAC units.'
      }
    ],
    specifications: [
      '24-point comprehensive HVAC checklist inspection',
      'Eco-friendly biodegradable coil chemical pressure wash',
      'Condensate pan anti-algae tablet placement & drainage vacuuming',
      'Compressor running current (amperage) and start-up voltage analysis',
      'Indoor blower fan dynamic balancing and bearing lubrication',
      'Digital supply and return air temperature delta-T calculation'
    ],
    commonIssuesSolved: [
      'Air conditioner running continuously without reaching set temperature',
      'High monthly electric consumption during summer months',
      'Water backing up and dripping onto floors, carpets, or ceilings',
      'Weak or uneven airflow blowing from AC vents into rooms',
      'Unpleasant stale or musty odor whenever the AC starts up'
    ],
    dubaiLocations: [
      'Dubai Marina',
      'Jumeirah Lake Towers (JLT)',
      'Downtown Dubai',
      'Business Bay',
      'Palm Jumeirah',
      'Arabian Ranches',
      'Dubai Hills Estate',
      'JVC',
      'The Greens',
      'Motor City'
    ],
    faqs: [
      {
        q: 'How often should I service my AC in Dubai?',
        a: 'Due to severe airborne dust and intense heat, residential air conditioners in Dubai require deep servicing at least every 3 to 4 months (quarterly) to maintain energy efficiency.'
      },
      {
        q: 'Does coil cleaning really reduce my DEWA electricity bill?',
        a: 'Yes. A clogged condenser coil increases compressor operating head pressure and amperage draw. Proper chemical washing routinely cuts AC power consumption by 15% to 25%.'
      },
      {
        q: 'What is included in your 24-point AC service checklist?',
        a: 'It includes indoor/outdoor coil washing, drain pan sanitization, drainage pipe flush, refrigerant pressure check, electrical contact inspection, blower wheel cleaning, and delta-T temperature measurement.'
      }
    ]
  },
  {
    slug: 'duct-cleaning',
    id: '04',
    title: 'Hospital-Grade AC Duct Cleaning & Sanitization in Dubai',
    shortTitle: 'AC Duct Cleaning & Sanitization',
    tagline: 'Robotic rotary brushing and negative air HEPA filtration compliant with Dubai Municipality indoor air hygiene standards.',
    badge: 'Dubai Municipality Approved',
    image: '/images/duct_cleaning_interior_brush.jpg',
    metaTitle: 'AC Duct Cleaning Dubai | Certified Mold & Dust Sanitization',
    metaDescription: 'Dubai Municipality approved AC duct cleaning & disinfection. Robotic rotary brushing, medical-grade HEPA negative air containment & camera inspection reports.',
    keywords: [
      'AC duct cleaning Dubai',
      'air duct sanitization Dubai',
      'AC mold removal Dubai',
      'indoor air quality Dubai',
      'duct disinfection Dubai',
      'villa AC duct cleaning Dubai',
      'commercial duct cleaning Dubai'
    ],
    overview: 'Closed Dubai indoor environments recirculate the same air 24 hours a day. Over time, air ducts accumulate sand, toxic black mold spores, dead skin cells, and allergens. Airtronics Fixcare utilizes robotic rotary brushing, high-powered negative air HEPA vacuum collectors, and non-toxic antimicrobial fogging to completely sanitize your ductwork and restore healthy breathing air.',
    heroHighlights: [
      'Certified Dubai Municipality compliant indoor air hygiene protocols',
      'Robotic rotary brushing system with continuous HEPA negative air collection',
      '100% non-toxic, pet-safe, and child-safe antimicrobial thermal misting',
      'Full before-and-after digital camera inspection report for your records'
    ],
    keyBenefits: [
      {
        title: 'Eliminates Allergens & Asthma Triggers',
        description: 'Removes deep-seated fine desert dust, pet dander, and pollen that cause morning congestion, itchy eyes, and chronic respiratory irritation.'
      },
      {
        title: 'Complete Eradication of Mold & Spores',
        description: 'Dubai’s high humidity breeds Aspergillus and Cladosporium mold inside cold ductwork. Our chemical fogging neutralizes mold at the root.'
      },
      {
        title: 'Removes Stale Odors Permanently',
        description: 'Clears lingering odors from cooking, moisture, and pets trapped inside insulated flex-ducts and acoustic plenum boxes.'
      },
      {
        title: 'Boosts HVAC Airflow Efficiency',
        description: 'Removing thick layers of dust from diffusers, dampers, and turning vanes restores optimal CFM airflow throughout your rooms.'
      }
    ],
    specifications: [
      'High-resolution CCTV robotic camera duct inspection',
      'Heavy-duty motorized rotary shaft brushing for rigid and flex ducts',
      'Negative pressure air machine with 99.97% DOP HEPA 0.3-micron filtration',
      'Antimicrobial botanical disinfectant thermal fogging',
      'Full register, diffuser, grill, and linear slot deep washing',
      'Blower wheel and evaporator plenum sanitization'
    ],
    commonIssuesSolved: [
      'Waking up with sore throats, coughing, sneezing, or stuffed sinuses',
      'Visible black dust or mold spotting around ceiling air supply vents',
      'Persistent stale, damp, or basement-like smell when AC turns on',
      'Excessive dust settling on furniture within 24 hours after house cleaning',
      'Moving into a new or recently renovated property with construction dust'
    ],
    dubaiLocations: [
      'Palm Jumeirah',
      'Dubai Hills Estate',
      'Arabian Ranches 1 & 2',
      'Jumeirah Golf Estates',
      'Al Barari',
      'Emirates Hills',
      'The Meadows & Springs',
      'JVC',
      'Downtown Dubai',
      'Dubai Marina'
    ],
    faqs: [
      {
        q: 'How often should AC ducts be cleaned in Dubai villas and apartments?',
        a: 'Dubai Municipality and NADCA recommend thorough duct inspection and deep cleaning every 1 to 2 years, or immediately after major interior renovations.'
      },
      {
        q: 'Is the disinfectant mist safe for children, elderly people, and pets?',
        a: 'Yes, our sanitizing solutions are 100% water-based, non-toxic, biodegradable, and approved by health authorities. There is zero toxic chemical residue.'
      },
      {
        q: 'How long does AC duct cleaning take for a 3-bedroom villa?',
        a: 'A typical 3-to-4 bedroom villa takes approximately 4 to 6 hours for a certified 4-man engineering team to inspect, mechanically brush, HEPA vacuum, and sanitize all ducts and grills.'
      }
    ]
  },
  {
    slug: 'amc',
    id: '05',
    title: 'Annual Maintenance Contracts (AMC) for Dubai Properties',
    shortTitle: 'Annual Maintenance Contracts (AMC)',
    tagline: 'Year-round cooling peace of mind with scheduled quarterly servicing, unlimited emergency breakdown callouts, and zero labor fees.',
    badge: 'Priority 24/7 Protection',
    image: '/images/amc_plan_checklist.jpg',
    metaTitle: 'AC AMC Dubai | Annual Maintenance Contract for Homes & Offices',
    metaDescription: 'Affordable AC AMC contracts in Dubai. Scheduled quarterly deep servicing, unlimited emergency breakdown callouts & zero labor charges 24/7 across UAE.',
    keywords: [
      'AC AMC Dubai',
      'annual maintenance contract Dubai',
      'villa AC AMC Dubai',
      'office AC maintenance contract Dubai',
      'commercial HVAC AMC Dubai',
      'residential AMC Dubai',
      'unlimited AC emergency callouts'
    ],
    overview: 'Emergency AC repairs in the heat of Dubai summer are stressful and expensive. An Airtronics Fixcare Annual Maintenance Contract (AMC) gives homeowners, landlords, and facility managers guaranteed priority service year-round. Our AMC plans include scheduled quarterly maintenance, unlimited emergency breakdown visits, and zero labor charges.',
    heroHighlights: [
      '3 to 4 scheduled comprehensive seasonal maintenance visits per year',
      'Unlimited 24/7 emergency breakdown visits with guaranteed priority dispatch',
      'Zero labor fees on all mechanical and electrical troubleshooting',
      'Dedicated key account manager and direct WhatsApp engineering hotline'
    ],
    keyBenefits: [
      {
        title: 'Zero Unexpected Emergency Repair Costs',
        description: 'Never worry about paying emergency call-out fees or inflated summer labor charges. All service calls are covered 100% under your contract.'
      },
      {
        title: 'Priority 30-Minute Dispatch Guarantee',
        description: 'During peak 50°C summer heatwaves when technicians are booked out across Dubai, AMC contract holders receive top-priority emergency response.'
      },
      {
        title: 'Protects Real Estate Asset Value',
        description: 'Documented quarterly service logs keep equipment warranties active and provide essential maintenance records when selling or leasing villas.'
      },
      {
        title: 'Custom Packages for Villas & Businesses',
        description: 'Flexible tiered packages customized for townhouses, luxury villas, boutique offices, retail stores, and commercial warehouses.'
      }
    ],
    specifications: [
      'Comprehensive asset tagging and serial number tracking',
      'Full quarterly 24-point preventative mechanical servicing',
      'Unlimited emergency breakdown callouts 365 days a year',
      'Digital service logs with technician sign-off sent to your email',
      '15% discount on all OEM replacement compressors, fan motors, and boards',
      'Annual electrical panel and isolator thermal scan'
    ],
    commonIssuesSolved: [
      'Paying high emergency callout fees every time an AC breaks down',
      'Waiting days for a technician during peak July and August summer rush',
      'Tenants complaining about persistent AC issues in rental properties',
      'Uncertainty about the mechanical health and safety of your home HVAC',
      'Premature system failure caused by neglected quarterly filter and coil maintenance'
    ],
    dubaiLocations: [
      'All Residential Communities in Dubai',
      'Commercial Free Zones & Business Parks',
      'Arabian Ranches',
      'Dubai Hills Estate',
      'Jumeirah Islands',
      'JVC',
      'Business Bay',
      'Downtown Dubai',
      'Dubai South',
      'Meydan'
    ],
    faqs: [
      {
        q: 'What is included in an Airtronics AC AMC package?',
        a: 'Our standard AMC includes 3 or 4 scheduled deep preventative maintenance visits per year, unlimited emergency breakdown callouts, zero labor charges on repairs, and discounted OEM parts.'
      },
      {
        q: 'Do you offer AMC packages for landlords with multiple properties?',
        a: 'Yes, we manage commercial and residential portfolios across Dubai with consolidated billing, dedicated account managers, and automatic quarterly dispatch.'
      },
      {
        q: 'Are replacement spare parts included in the AMC?',
        a: 'Consumable preventative chemicals and labor are included. If replacement components like compressors or fan motors are required, AMC holders receive wholesale discounted OEM pricing.'
      }
    ]
  },
  {
    slug: 'commercial-hvac',
    id: '06',
    title: 'Commercial & Industrial HVAC Engineering in Dubai',
    shortTitle: 'Commercial & Industrial HVAC',
    tagline: 'Engineering solutions for chillers, AHUs, FCUs, package units, and precision server room climate networks.',
    badge: 'Heavy-Duty Climate Systems',
    image: '/images/technician_dark_hvac.jpg',
    metaTitle: 'Commercial HVAC Dubai | Chiller, AHU & FCU Maintenance',
    metaDescription: 'Commercial HVAC solutions in Dubai for offices, warehouses, retail & hotels. Chiller overhaul, AHU/FCU servicing, package units & 24/7 enterprise SLA coverage.',
    keywords: [
      'commercial HVAC Dubai',
      'chiller maintenance Dubai',
      'AHU maintenance Dubai',
      'FCU repair Dubai',
      'warehouse HVAC Dubai',
      'server room cooling Dubai',
      'commercial AC maintenance Dubai',
      'industrial refrigeration Dubai'
    ],
    overview: 'Commercial enterprises in Dubai cannot afford climate control interruptions. A server room overheating or a retail space losing cooling halts operations instantly. Airtronics Fixcare delivers certified commercial HVAC engineering for corporate office towers, logistics warehouses, hotels, schools, and medical clinics, backed by strict Service Level Agreements (SLAs).',
    heroHighlights: [
      'Comprehensive chiller plant maintenance, overhaul & chemical descaling',
      'Air Handling Unit (AHU) and Fan Coil Unit (FCU) mechanical rebuilding',
      'Precision close-control cooling for data centers and server rooms',
      'Guaranteed enterprise Service Level Agreements with 2-hour resolution'
    ],
    keyBenefits: [
      {
        title: 'Guaranteed Business Continuity',
        description: '24/7 dedicated engineering dispatch ensures critical infrastructure, server racks, and high-occupancy retail environments remain cold.'
      },
      {
        title: 'Full Regulatory & Municipality Compliance',
        description: 'Certified technicians adhering to Dubai Civil Defence, Dubai Municipality, and ASHRAE commercial mechanical safety regulations.'
      },
      {
        title: 'Energy Management & Peak Shaving',
        description: 'Variable frequency drive (VFD) tuning, chilled water balancing, and smart BMS integration to lower monthly commercial energy bills.'
      },
      {
        title: 'Detailed Engineering Audit Reports',
        description: 'Comprehensive mechanical condition reports, vibration analysis, and asset lifecycle depreciation planning for corporate CFOs and FMs.'
      }
    ],
    specifications: [
      'Centrifugal, screw, and scroll chiller maintenance & compressor overhaul',
      'AHU / FCU belt tensioning, bearing replacement, and dynamic balancing',
      'District cooling interface management (Empower, Emicool, Tabreed)',
      'Modulating 2-way and 3-way control valve calibration and testing',
      'Commercial ductwork smoke damper and fire damper inspection',
      'BMS integration and computerized energy consumption logging'
    ],
    commonIssuesSolved: [
      'Server room temperature alarms threatening costly IT equipment failure',
      'Office floor temperature imbalances with hot spots and cold zones',
      'High district cooling delta-T penalties from unbalanced chilled water flow',
      'Loud vibration or mechanical screeching through commercial building ductwork',
      'Excessive humidity causing condensation and mold on commercial ceiling tiles'
    ],
    dubaiLocations: [
      'Business Bay',
      'DIFC',
      'Dubai Internet City',
      'Dubai Media City',
      'Jebel Ali Industrial Area',
      'Dubai Investments Park (DIP)',
      'Al Quoz Industrial Areas',
      'Dubai Silicon Oasis',
      'Dubai Healthcare City',
      'Deira & Bur Dubai'
    ],
    faqs: [
      {
        q: 'Do your engineers have district cooling experience (Empower / Emicool)?',
        a: 'Yes, our team is certified in chilled water district cooling interfaces, BTU meters, pressure-independent control valves (PICV), and high-rise FCU networks.'
      },
      {
        q: 'Can you provide emergency SLAs for 24/7 server room cooling?',
        a: 'Yes, we provide enterprise commercial SLAs with guaranteed 30-to-60 minute on-site arrival for mission-critical facilities.'
      },
      {
        q: 'Do you offer commercial maintenance contracts with monthly invoicing?',
        a: 'Yes, we offer tailored corporate contracts with flexible monthly, quarterly, or bi-annual payment schedules aligned with corporate accounting requirements.'
      }
    ]
  }
];

export const INVOICE_QUOTE_TERMS = {
  title: 'Terms & Conditions for Invoices and Quotations',
  subtitle: 'Transparent, upfront, and compliant with UAE consumer protection regulations.',
  lastUpdated: 'Updated September 2026',
  sections: [
    {
      heading: '1. Quotation Validity & Pricing Transparency',
      points: [
        'All written quotations issued by Airtronics Fixcare Technical Services LLC are binding and valid for thirty (30) calendar days from the date of issuance.',
        'Quotations are calculated based on transparent fixed labor tariffs and published genuine OEM manufacturer part pricing. No additional fees will ever be charged without prior written customer authorization.',
        'Diagnostic inspection fees are 100% credited and waived when the client approves the formal quotation and proceeds with the recommended repair.'
      ]
    },
    {
      heading: '2. Warranty Protection & OEM Authenticity',
      points: [
        'All replacement components, compressors, motors, fan capacitors, and electronic PCB boards supplied by Airtronics Fixcare are 100% genuine factory OEM parts.',
        'Repairs are covered by a comprehensive ninety (90) day warranty on both installed parts and workmanship, effective from the completion date specified on the tax invoice.',
        'Warranty does not cover pre-existing defects in unserviced components, external electrical power surges from municipal supply, or unauthorized third-party tampering.'
      ]
    },
    {
      heading: '3. Payment Terms & UAE Tax Compliance',
      points: [
        'All prices are subject to five percent (5%) Value Added Tax (VAT) in accordance with UAE Federal Tax Authority (FTA) laws and regulations.',
        'Payment for residential repairs and one-time services is due upon satisfactory completion of work via Credit/Debit Card, Bank Transfer, or Cash with an official electronic Tax Invoice.',
        'Commercial and AMC contract clients may access 30-day corporate credit terms subject to prior credit approval and documented agreement.'
      ]
    },
    {
      heading: '4. Service Execution, Safety & Property Access',
      points: [
        'Clients must ensure reasonable, safe access to the indoor units, ceiling hatches, and rooftop condenser locations during scheduled appointment windows.',
        'Building management access permits (NOCs / Gate Passes) required by private gated communities or high-rise developers (e.g., Emaar, Nakheel, Damac) must be arranged by the client or property manager prior to arrival.',
        'Our engineers adhere strictly to Dubai Municipality and UAE Civil Defence environmental safety regulations, utilizing certified refrigerant recovery systems and insulated electrical tooling.'
      ]
    }
  ]
};
