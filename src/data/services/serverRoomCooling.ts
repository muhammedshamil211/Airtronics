import { ServiceDetail } from './types';

export const serverRoomCoolingService: ServiceDetail = {
  slug: 'server-room-cooling',
  id: '15',
  title: 'Server Room & Precision Cooling (CRAC/CRAH) in Dubai',
  shortTitle: 'Server Room & Precision Cooling',
  tagline: '24/7 maintenance and emergency repair for server room precision ACs (Vertiv Liebert, Stulz, Schneider, APC) with strict humidity control.',
  badge: 'Mission Critical 24/7 SLA',
  image: '/images/services/server-room-cooling.jpg',
  subcategories: [
    'CRAC & CRAH Precision AC Maintenance',
    '24/7 Server Room Emergency Breakdown Repair',
    'N+1 Duty/Standby Redundancy Failover Testing',
    'Close-Control Humidity & Dew-Point Control',
    'In-Row Server Rack Cooling Servicing',
    'Raised Floor & Cold-Aisle Airflow Balancing',
    'Electronic Expansion Valve (EEV) Tuning',
    'High-Sensible Compressor & Fan Servicing'
  ],
  metaTitle: 'Server Room Cooling & CRAC Repair Dubai',
  metaDescription: '24/7 server room & precision AC (CRAC/CRAH) repair in Dubai. Vertiv Liebert, Stulz & Schneider maintenance with humidity control & fast SLA.',
  keywords: [
    'server room cooling Dubai',
    'precision AC repair Dubai',
    'CRAC unit maintenance Dubai',
    'CRAH servicing Dubai',
    'data center cooling Dubai',
    'Vertiv Liebert repair Dubai',
    'Stulz precision AC Dubai'
  ],
  overview: 'When a server room overheats in Dubai, critical IT racks can shut down within minutes—causing costly downtime and hardware damage. Regular comfort split ACs cannot handle 24/7 high heat loads or keep humidity safely between 45% and 55% RH. Airtronics Fixcare services and repairs Precision Air Conditioners (CRAC / CRAH / PAC) from Vertiv Liebert, Stulz, Schneider Electric, and APC, backed by 24/7 rapid response SLAs.',
  heroHighlights: [
    '30–60 minute emergency SLA dispatch for mission-critical server rooms',
    'Trained specialists for Vertiv Liebert, Stulz, Schneider Electric & APC',
    'Steam humidifier cylinder and electric reheat humidity control servicing',
    'N+1 backup failover testing and SNMP high-temp alarm verification'
  ],
  keyBenefits: [
    {
      title: '24/7 Uptime Protection',
      description: 'Round-the-clock standby engineers keep your servers, switches, and storage racks safely cooled at 20°C–22°C year-round.'
    },
    {
      title: 'Safe Humidity (45%–55% RH)',
      description: 'Prevents static electricity damage from overly dry air and stops moisture condensation or corrosion from high humidity.'
    },
    {
      title: 'Verified Automatic Failover',
      description: 'Tests lead-lag duty/standby controllers so your backup CRAC unit takes over instantly if the primary unit faults.'
    },
    {
      title: 'Built for Dry Electronics Heat',
      description: 'Precision CRAC units focus 90%+ of cooling on dry server heat (high Sensible Heat Ratio) rather than wasting power on moisture.'
    }
  ],
  specifications: [
    'Sensible Heat Ratio (SHR) checks and EC plug-fan speed calibration',
    'Electrode steam canister humidifier cleaning and cylinder replacement',
    'Electric reheat coil testing and high-temperature safety cutouts',
    'Electronic Expansion Valve (EEV) and superheat/subcooling tuning',
    'SNMP, Modbus, and dry-contact alarm testing to IT monitoring tools',
    'MERV 8 to MERV 14 precision air filter replacement'
  ],
  commonIssuesSolved: [
    'Server room temperature climbing past 26°C and triggering IT alarms',
    'High or low humidity alarms risking static or moisture inside racks',
    'Primary CRAC unit tripping while standby unit fails to auto-start',
    'Steam humidifier cylinder scaled up with minerals and faulting',
    'EC blower fan alarms on Stulz, Vertiv, or Schneider controllers'
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
      q: 'Why can’t I use a normal split AC in a server room?',
      a: 'Normal split ACs are built for people, not 24/7 server heat—they waste ~35% of capacity removing moisture, cannot control humidity precisely, and often freeze up or fail under continuous year-round operation.'
    },
    {
      q: 'How fast can you respond to a server room AC failure in Dubai?',
      a: 'For SLA contract clients and urgent IT breakdowns, our precision cooling technicians arrive on-site within 30 to 60 minutes across Dubai.'
    },
    {
      q: 'Which precision AC brands do you service?',
      a: 'We service Vertiv Liebert, Stulz, Schneider Electric (Uniflair / APC), RC Group, and HiRef CRAC/CRAH and in-row cooling units.'
    },
    {
      q: 'Do you test N+1 failover between primary and backup server room ACs?',
      a: 'Yes. During preventive visits we simulate a primary unit fault to verify that the standby unit starts automatically and SNMP/SMS alerts trigger properly.'
    },
    {
      q: 'What is the ideal temperature and humidity for a server room in Dubai?',
      a: 'Following ASHRAE data center guidelines, most server rooms run best at 20°C–24°C with 45%–55% relative humidity (RH).'
    },
    {
      q: 'How often should server room CRAC units be serviced?',
      a: 'Because server room ACs run 24 hours a day, 365 days a year, we recommend monthly filter/humidity checks and quarterly full mechanical and electrical servicing.'
    }
  ]
};
