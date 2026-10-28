import { ServiceDetail } from './types';

export const serverRoomCoolingService: ServiceDetail = {
    slug: 'server-room-cooling',
    id: '15',
    title: 'Server Room & Precision Cooling (CRAC/CRAH) in Dubai',
    shortTitle: 'Server Room & Precision Cooling',
    tagline: '24/7 mission-critical close control AC maintenance, temperature/humidity stabilization, cooling redundancy checks, and emergency response.',
    badge: 'Mission Critical 24/7 SLA',
    image: '/images/services/server-room-cooling.jpg',
    subcategories: [
    'Precision Computer Room AC (CRAC / CRAH) Maintenance',
    '24/7 Critical Data Center Emergency Breakdown Dispatch',
    'N+1 Cooling Redundancy Testing & Automatic Failover',
    'Close-Control Humidity & Dew-Point Management',
    'In-Row Server Rack Precision Cooling Installation',
    'Static Pressure Plaque & Raised Floor Air Balancing',
    'Electronic Micro-Expansion Valve (EEV) Tuning',
    'High-Sensible Heat Ratio Compressor Servicing'
  ],
    metaTitle: 'Server Room Cooling Dubai | Precision AC & CRAC Data Center Maintenance',
    metaDescription: 'Mission-critical server room & precision AC maintenance in Dubai. CRAC/CRAH servicing (Stulz, Vertiv, Schneider), 24/7 emergency dispatch & humidity control.',
    keywords: [
      'server room cooling Dubai',
      'precision AC repair Dubai',
      'CRAC unit maintenance Dubai',
      'CRAH servicing Dubai',
      'data center cooling Dubai',
      'close control AC Dubai',
      'server room air conditioner Dubai'
    ],
    overview: 'A server room overheating in Dubai causes immediate data center crashes, hardware damage, and tens of thousands of dirhams in operational downtime. Standard residential air conditioners cannot maintain the strict 20°C–22°C temperature and 45%–55% relative humidity required by sensitive IT enterprise equipment. Airtronics Fixcare specializes in close-control Precision Air Conditioners (PAC / CRAC / CRAH) from Vertiv Liebert, Stulz, Schneider Electric, and APC, backed by 24/7 rapid SLAs.',
    heroHighlights: [
      'Guaranteed 30–60 minute rapid emergency dispatch SLA for mission-critical IT environments',
      'Specialized certified service for Vertiv Liebert, Stulz, Schneider Electric & APC units',
      'Electrode steam canister humidifier and dehumidification reheat cycle maintenance',
      'N+1 and 2N cooling redundancy automatic changeover testing and alarm verification'
    ],
    keyBenefits: [
      {
        title: 'Zero Downtime Guarantee',
        description: '24/7 emergency technician standby ensures your server racks, network switches, and data storage stay cold continuously.'
      },
      {
        title: 'Precision Humidity Control (45%–55% RH)',
        description: 'Prevents electrostatic discharge (ESD) from low humidity and metal contact corrosion from high humidity.'
      },
      {
        title: 'Automated Redundancy Failover',
        description: 'Configures duty-standby lead-lag controllers so backup units kick in instantly if the primary cooling unit trips.'
      },
      {
        title: 'High Sensible Heat Ratio (SHR > 0.90)',
        description: 'Precision PAC units deliver 90%+ sensible cooling to strip heat from dry electronics rather than wasting energy removing room moisture.'
      }
    ],
    specifications: [
      'Sensible Heat Ratio (SHR) testing and EC backward-curved plug fan calibration',
      'Electrode boiler steam cylinder and ultrasonic humidifier servicing',
      'Electric reheat element resistance verification and thermal safety cutouts',
      'Electronic expansion valve (EEV) step motor diagnostics and subcooling tuning',
      'SNMP, Modbus, and dry contact alarm integration with IT monitoring dashboards',
      'Micro-particle air filter replacements (MERV 8 to MERV 14 / EU4)'
    ],
    commonIssuesSolved: [
      'Server room temperature alarming past 26°C threatening IT server shutdowns',
      'High humidity alarms triggering condensation risk inside electronics racks',
      'Primary CRAC unit tripping on high head pressure with standby unit failing to start',
      'Humidifier cylinder blocked with mineral scale and failing to produce steam',
      'EC plug fan failure alarms on Schneider or Stulz precision cooling controllers'
    ],
    dubaiLocations: [
      'DIFC Financial Data Hubs',
      'Dubai Internet City',
      'Dubai Media City',
      'Business Bay Corporate Headquarters',
      'Downtown Dubai Enterprise Offices',
      'Jebel Ali Industrial IT Centers',
      'Dubai Silicon Oasis Tech Parks',
      'Dubai Healthcare City Medical Records Rooms',
      'Dubai South Logistics Facilities',
      'Al Quoz Tech Hubs'
    ],
    faqs: [
      {
        q: 'Why can’t I just use a standard split AC for my server room in Dubai?',
        a: 'Standard split ACs have a low sensible heat ratio (~0.65), meaning they waste 35% of their cooling on moisture removal rather than electronics heat. Precision CRAC units operate with a 0.90+ sensible ratio, run 24/7/365, and tightly regulate humidity.'
      },
      {
        q: 'How fast can your engineers respond to an emergency server room cooling failure?',
        a: 'We provide enterprise Service Level Agreements (SLAs) with a guaranteed 30-to-60 minute on-site emergency dispatch across Dubai.'
      },
      {
        q: 'Do you test automatic redundancy failover between primary and secondary AC units?',
        a: 'Yes, our maintenance protocol includes simulated failure tests to verify that the standby unit starts immediately and that critical high-temperature SNMP alarms alert your IT team.'
      }
    ]
  };
