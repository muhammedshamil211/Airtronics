export interface InvoiceQuoteTabItem {
  title: string;
  description: string;
  highlight: string;
}

export interface InvoiceQuoteSpecimenLine {
  label: string;
  value: string;
  isAccent?: boolean;
  isDiscount?: boolean;
}

export interface InvoiceQuoteSpecimen {
  type: 'quote' | 'invoice' | 'warranty' | 'access';
  title: string;
  refNumber: string;
  statusText: string;
  statusVariant: 'blue' | 'emerald' | 'amber' | 'purple';
  metaLabel: string;
  metaValue: string;
  lines: readonly InvoiceQuoteSpecimenLine[];
  stampText: string;
  footerNote: string;
}

export interface InvoiceQuoteTab {
  id: 'quotation' | 'invoice' | 'warranty' | 'access';
  tabLabel: string;
  tabSublabel: string;
  stageNumber: string;
  heading: string;
  badge: string;
  summary: string;
  proTip: string;
  items: readonly InvoiceQuoteTabItem[];
  specimen: InvoiceQuoteSpecimen;
}

export interface InvoiceQuoteTermsData {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: readonly {
    readonly heading: string;
    readonly points: readonly string[];
  }[];
  tabs: readonly InvoiceQuoteTab[];
}

export const INVOICE_QUOTE_TERMS: InvoiceQuoteTermsData = {
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
  ],
  tabs: [
    {
      id: 'quotation',
      tabLabel: '1. Quotation Stage',
      tabSublabel: 'Pre-Service & 30-Day Lock',
      stageNumber: '01',
      heading: 'Quotation Validity & Upfront Price Guarantee',
      badge: 'Before Work Commences',
      summary: 'Before a single screw is turned, you receive a transparent, binding written quote with fixed labor tariffs and genuine OEM part costs. Zero hidden charges, zero surprises.',
      proTip: 'Diagnostic Fee Waiver: When you approve the quotation and proceed with the repair, your initial diagnostic fee is 100% credited and deducted from the final invoice.',
      items: [
        {
          title: '30-Day Binding Price Lock',
          description: 'All official quotations issued by Airtronics Fixcare Technical Services LLC remain legally binding and fixed for 30 calendar days from the issuance date.',
          highlight: '30 Calendar Days Locked'
        },
        {
          title: 'Fixed Tariffs & Published OEM Costs',
          description: 'Costs are calculated strictly against transparent standardized labor tariffs and direct factory part prices. Additional work requires your explicit prior approval.',
          highlight: 'Zero Surprise Fees'
        },
        {
          title: '100% Diagnostic Fee Credit',
          description: 'The inspection diagnostic fee is fully credited toward the repair cost once the formal quote is approved, ensuring cost-efficient troubleshooting.',
          highlight: '100% Credited on Repair'
        }
      ],
      specimen: {
        type: 'quote',
        title: 'Official Fixed-Price Quotation',
        refNumber: 'QT-2026-DXB-4819',
        statusText: 'PRICE LOCKED (30 DAYS)',
        statusVariant: 'blue',
        metaLabel: 'Validity Window',
        metaValue: '30 Calendar Days from Inspection',
        lines: [
          { label: 'Technical Inspection & Diagnostic', value: 'AED 0.00', isDiscount: true },
          { label: 'Genuine OEM Fan Motor / Capacitor', value: 'AED 380.00' },
          { label: 'Certified Labor & Pressure Vacuum Testing', value: 'AED 180.00' },
          { label: 'UAE FTA Value Added Tax (5%)', value: 'AED 28.00' },
          { label: 'Total Approved Quotation (Locked)', value: 'AED 588.00', isAccent: true }
        ],
        stampText: 'NO HIDDEN CHARGES GUARANTEE',
        footerNote: 'Diagnostic fee is credited 100% upon quotation approval. Work begins only after written client sign-off.'
      }
    },
    {
      id: 'invoice',
      tabLabel: '2. Invoicing & Tax',
      tabSublabel: 'FTA 5% VAT & Easy Payment',
      stageNumber: '02',
      heading: 'Payment Terms, Digital Invoices & UAE VAT Compliance',
      badge: 'Upon Job Completion',
      summary: 'Payment is due only upon satisfactory completion of service. Every customer receives an instant electronic Tax Invoice fully compliant with UAE Federal Tax Authority (FTA) regulations.',
      proTip: 'Multi-Channel Checkout: Pay on-site via portable contactless POS terminal (Credit/Debit/Apple Pay), secure bank transfer, or cash with instant digital receipt.',
      items: [
        {
          title: 'UAE Federal Tax Authority (FTA) Compliant',
          description: 'All services include five percent (5%) VAT in strict accordance with UAE Federal Tax Authority laws, itemized with our verified Tax Registration Number (TRN).',
          highlight: 'Official 5% VAT & TRN'
        },
        {
          title: 'Payment Upon Satisfactory Completion',
          description: 'For residential clients, payment is finalized only after testing your AC cooling performance, airflow velocity, and cleanliness in your presence.',
          highlight: 'Pay After Testing'
        },
        {
          title: 'Commercial & AMC 30-Day Credit',
          description: 'Corporate facilities, property managers, and Annual Maintenance Contract (AMC) clients can access 30-day corporate credit terms upon documented approval.',
          highlight: 'Corporate Credit Available'
        }
      ],
      specimen: {
        type: 'invoice',
        title: 'Electronic Tax Invoice',
        refNumber: 'INV-2026-DXB-8420',
        statusText: 'OFFICIAL FTA TAX INVOICE',
        statusVariant: 'emerald',
        metaLabel: 'Tax Registration (TRN)',
        metaValue: 'TRN 100582947100003',
        lines: [
          { label: 'Itemized Labor & Service Execution', value: 'AED 280.00' },
          { label: 'Certified OEM Replacement Components', value: 'AED 420.00' },
          { label: 'Taxable Subtotal', value: 'AED 700.00' },
          { label: 'UAE Federal Tax Authority VAT (5%)', value: 'AED 35.00' },
          { label: 'Total Paid & Settled', value: 'AED 735.00', isAccent: true }
        ],
        stampText: 'FTA TAX COMPLIANT • DUBAI UAE',
        footerNote: 'Official e-invoice delivered immediately via email & WhatsApp with embedded warranty reference.'
      }
    },
    {
      id: 'warranty',
      tabLabel: '3. Warranty Protection',
      tabSublabel: '90-Day Parts & Workmanship',
      stageNumber: '03',
      heading: 'Warranty Protection & 100% OEM Authenticity',
      badge: 'Post-Service Coverage',
      summary: 'We back every repair with our comprehensive 90-day warranty covering both parts and technician labor. We use only authentic factory parts from verified regional distributors.',
      proTip: 'Warranty Record: Your 90-day warranty is tied to your unique Tax Invoice number. No paper receipts to lose—our system tracks your warranty automatically.',
      items: [
        {
          title: '100% Genuine Factory OEM Parts',
          description: 'All compressors, coils, motors, capacitors, and PCB boards are authentic OEM parts sourced directly from authorized brand distributors (Daikin, Carrier, LG, O General, etc.).',
          highlight: 'Direct OEM Certified'
        },
        {
          title: '90-Day Comprehensive Warranty',
          description: 'Both installed components and workmanship are protected for ninety (90) calendar days from the service completion date indicated on your invoice.',
          highlight: '90 Days Parts + Labor'
        },
        {
          title: 'Transparent Warranty Limits',
          description: 'Warranty covers defective parts and workmanship. It does not cover pre-existing faults in unserviced equipment, external municipal electrical surges, or third-party interference.',
          highlight: 'Clear & Fair Policy'
        }
      ],
      specimen: {
        type: 'warranty',
        title: '90-Day Comprehensive Warranty Certificate',
        refNumber: 'WR-2026-DXB-90D',
        statusText: 'ACTIVE COVERAGE (90 DAYS)',
        statusVariant: 'blue',
        metaLabel: 'Warranty Scope',
        metaValue: 'Parts & Workmanship Guaranteed',
        lines: [
          { label: 'Replacement Parts Installed', value: '100% Genuine OEM' },
          { label: 'Labor & Technical Workmanship', value: 'Covered for 90 Days' },
          { label: 'Warranty Re-Inspection Callout', value: 'AED 0.00 (Covered)', isDiscount: true },
          { label: 'Component Serial Tracking', value: 'Registered in ERP' },
          { label: 'Post-Service Protection Level', value: 'Comprehensive Guarantee', isAccent: true }
        ],
        stampText: 'GENUINE OEM & LABOR BACKED',
        footerNote: 'Valid across Dubai for 90 days from the invoice date. Covers repair workmanship and OEM components.'
      }
    },
    {
      id: 'access',
      tabLabel: '4. Community Access & Safety',
      tabSublabel: 'NOC Passes & Civil Defence',
      stageNumber: '04',
      heading: 'Service Execution, Safety & Community Property Access',
      badge: 'On-Site Standards',
      summary: 'From gate pass approvals in private Dubai master communities to stringent Dubai Municipality and Civil Defence environmental safety, our technicians ensure effortless execution.',
      proTip: 'Gate Pass (NOC) Support: Need access documentation for your building management or master developer (Emaar, Nakheel, Damac)? Let us know and we will provide company trade licenses and technician IDs.',
      items: [
        {
          title: 'Gate Pass & Community NOC Assistance',
          description: 'Our team is accustomed to security procedures across Dubai Hills, Palm Jumeirah, Arabian Ranches, Downtown, and JLT. We provide required documents for security clearances.',
          highlight: 'Emaar / Nakheel / Damac Ready'
        },
        {
          title: 'Safe Unit & Hatch Access',
          description: 'Clients provide reasonable access to indoor ceiling hatches and outdoor condenser decks. Our technicians utilize clean drop cloths and protective footwear inside your home.',
          highlight: 'Protective Floor Coverings'
        },
        {
          title: 'Dubai Municipality & Civil Defence Safety',
          description: 'Technicians adhere strictly to Dubai environmental regulations, utilizing certified closed-loop refrigerant recovery units and insulated safety equipment.',
          highlight: 'Eco-Friendly & Safe'
        }
      ],
      specimen: {
        type: 'access',
        title: 'Community Access & Safety Clearance',
        refNumber: 'SEC-2026-DXB-NOC',
        statusText: 'LICENSED & NOC-READY',
        statusVariant: 'amber',
        metaLabel: 'Safety Jurisdiction',
        metaValue: 'Dubai Municipality & Civil Defence',
        lines: [
          { label: 'Technician Clearance & Insurance', value: '100% Insured & Uniformed' },
          { label: 'Major Master Community Access', value: 'Emaar, Nakheel, Damac' },
          { label: 'Indoor Floor & Furniture Protection', value: 'Drop Cloths & Shoe Covers' },
          { label: 'Refrigerant Handling Standard', value: 'Closed-Loop Recovery' },
          { label: 'HSE Safety Protocols', value: 'Civil Defence Compliant', isAccent: true }
        ],
        stampText: 'DUBAI MUNICIPALITY COMPLIANT',
        footerNote: 'All engineers carry valid Emirates IDs, company credentials, and specialized diagnostic instruments.'
      }
    }
  ]
};

