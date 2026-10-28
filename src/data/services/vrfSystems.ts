import { ServiceDetail } from './types';

export const vrfSystemsService: ServiceDetail = {
    slug: 'vrf-vrv-systems',
    id: '10',
    title: 'VRF / VRV Air Conditioning Services in Dubai',
    shortTitle: 'VRF / VRV Air Conditioning Services',
    tagline: 'Specialized diagnostics, multi-zone troubleshooting, communication wiring repair, and commissioning for Daikin VRV, Mitsubishi & LG VRF.',
    badge: 'Multi-Zone Engineering Specialists',
    image: '/images/services/vrf-vrv.jpg',
    subcategories: [
    'Turnkey VRF / VRV System Installation',
    'Quarterly VRF Preventative Maintenance',
    'Multi-Zone Communication Error Diagnostics',
    'Branch Selector (BS) Box Servicing',
    'Inverter Compressor Overhaul & Oil Balancing',
    'Central BMS Touchscreen Controller Configuration',
    'Nitrogen Leak Testing on Refnet Joints',
    'VRF Performance Commissioning & Capacity Testing'
  ],
    metaTitle: 'VRF VRV AC Maintenance Dubai | Daikin VRV & Commercial VRF Repair',
    metaDescription: 'Specialized VRF / VRV air conditioning services in Dubai. Multi-zone troubleshooting, Daikin VRV error code diagnosis, inverter PCB repair & central controller setup.',
    keywords: [
      'VRF AC repair Dubai',
      'VRV AC maintenance Dubai',
      'Daikin VRV Dubai',
      'commercial VRF installation Dubai',
      'multi-zone AC repair Dubai',
      'VRF communication fault Dubai',
      'VRF inverter repair Dubai'
    ],
    overview: 'Variable Refrigerant Flow (VRF/VRV) systems are the pinnacle of luxury villa and commercial climate control in Dubai, but their complex inverter electronics, electronic expansion valves, and 2-wire communication networks require specialized factory-trained technicians. Airtronics Fixcare engineers connect proprietary digital diagnostic software directly to outdoor master boards to pinpoint error codes, balance refrigerant distribution, and configure multi-zone central controllers.',
    heroHighlights: [
      'Factory-trained engineers specialized in Daikin VRV, Mitsubishi City Multi, LG Multi V & Gree GMV',
      'Direct software diagnostic interrogation for error codes (U4, E3, LC, etc.)',
      'Electronic expansion valve (EEV) calibration across dozens of indoor fan units',
      'Refnet joint leak testing and nitrogen pressure verification up to 600 PSI'
    ],
    keyBenefits: [
      {
        title: 'Precision Multi-Zone Temperature Control',
        description: 'Restores independent room-by-room temperature comfort across large villas, penthouses, and multi-tenant offices.'
      },
      {
        title: 'Inverter Energy Optimization',
        description: 'Tunes DC inverter scroll compressors to modulate speed smoothly, slashing power consumption during part-load operating hours.'
      },
      {
        title: 'Eliminates Cryptic Communication Faults',
        description: 'Tests and repairs daisy-chain shielded communication wiring, terminal impedances, and transmission PCB boards.'
      },
      {
        title: 'Central BACnet / Modbus Integration',
        description: 'Connects VRF central touchscreens to smart home automation systems for centralized smartphone scheduling.'
      }
    ],
    specifications: [
      'Proprietary diagnostic service checker tool integration',
      'Refnet Y-branch joint silver brazing with constant nitrogen purge',
      '600 PSI high-pressure nitrogen strength holding test for R410A VRF systems',
      'Electronic Expansion Valve (EEV) pulse step and thermistor delta-T calibration',
      'Shielded non-polar 2-core communication line continuity and resistance checks',
      'Oil return cycle verification and inverter compressor frequency checks'
    ],
    commonIssuesSolved: [
      'System-wide shutdown triggered by cryptic outdoor error codes (e.g., Daikin U4 or A3)',
      'Some indoor units blowing freezing air while other zones blow hot air',
      'Central touch controller displaying communication offline or disconnected errors',
      'Outdoor master inverter compressor tripping on high discharge pipe temperature',
      'Refrigerant migration and unbalanced oil return across multi-unit modular banks'
    ],
    dubaiLocations: [
      'Emirates Hills',
      'Palm Jumeirah Luxury Villas',
      'Dubai Hills Estate Mansions',
      'Al Barari',
      'Jumeirah Golf Estates',
      'District One (MBR City)',
      'DIFC Offices',
      'Business Bay',
      'Jumeirah Islands',
      'Bluewaters Island'
    ],
    faqs: [
      {
        q: 'What is the difference between standard split AC and a VRF/VRV system?',
        a: 'A VRF/VRV system connects multiple indoor fan units (up to 64 units) to a single modular outdoor condenser bank using smart inverter modulation, varying refrigerant flow to each room independently.'
      },
      {
        q: 'Can any regular AC technician service a Daikin VRV system?',
        a: 'No. VRF/VRV systems have complex microprocessor controls, electronic expansion valves, and communication bus loops that require specialized software tools and certified training.'
      },
      {
        q: 'How do you locate refrigerant leaks in extensive VRF piping networks?',
        a: 'We isolate zones using service branch selector boxes and apply high-pressure nitrogen testing up to 600 PSI combined with ultrasonic acoustic detectors.'
      }
    ]
  };
