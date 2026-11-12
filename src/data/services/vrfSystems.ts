import { ServiceDetail } from './types';

export const vrfSystemsService: ServiceDetail = {
  slug: 'vrf-vrv-systems',
  id: '10',
  title: 'VRF / VRV Air Conditioning Services in Dubai',
  shortTitle: 'VRF / VRV Air Conditioning Services',
  tagline: 'Specialist repair, error-code diagnostics, and maintenance for Daikin VRV, Mitsubishi, LG, and Gree VRF multi-zone AC systems in Dubai.',
  badge: 'Multi-Zone Engineering Specialists',
  image: '/images/services/vrf-vrv.jpg',
  subcategories: [
    'VRF / VRV System Installation & Commissioning',
    'Scheduled VRF Preventive Maintenance',
    'VRF Error Code & Communication Fault Repair',
    'Branch Selector (BS) Box Servicing',
    'Inverter Compressor & PCB Board Repair',
    'Central Touchscreen Controller Setup',
    'Refnet Pipe Joint Nitrogen Leak Testing',
    'Multi-Zone Cooling Balance & Testing'
  ],
  metaTitle: 'VRF & VRV AC Repair & Service Dubai',
  metaDescription: 'Certified VRF & VRV AC repair and maintenance in Dubai. We fix Daikin VRV error codes, communication faults, inverter PCBs & multi-zone cooling.',
  keywords: [
    'VRF AC repair Dubai',
    'VRV AC maintenance Dubai',
    'Daikin VRV repair Dubai',
    'commercial VRF installation Dubai',
    'multi-zone AC repair Dubai',
    'VRF communication fault Dubai',
    'VRF inverter repair Dubai'
  ],
  overview: 'Luxury villas, penthouses, and commercial buildings in Dubai use Variable Refrigerant Flow (VRF/VRV) systems so different rooms can run at different temperatures from one outdoor bank. Because VRF units use inverter boards, electronic expansion valves (EEVs), and 2-wire communication loops, regular AC technicians often misdiagnose them. Airtronics Fixcare engineers use digital service-checker tools to read exact fault codes, fix communication errors, and balance cooling across every zone.',
  heroHighlights: [
    'Trained specialists for Daikin VRV, Mitsubishi City Multi, LG Multi V & Gree GMV',
    'Digital service-checker diagnostics for error codes (U4, E3, LC, A3, etc.)',
    'Electronic expansion valve (EEV) and branch selector box calibration',
    'High-pressure 600 PSI nitrogen leak testing on Refnet copper joints'
  ],
  keyBenefits: [
    {
      title: 'Balanced Cooling in Every Room',
      description: 'Fixes uneven cooling where one bedroom freezes while another stays warm—restoring smooth room-by-room temperature control.'
    },
    {
      title: 'Lower Power Use With Inverter Tuning',
      description: 'Checks inverter compressor speed and oil return cycles so your VRF system adjusts smoothly to partial loads instead of wasting power.'
    },
    {
      title: 'Fixes Stubborn Error Codes Fast',
      description: 'Traces broken or noisy 2-core shielded communication cables, faulty transmission boards, and sensor faults that shut down the whole system.'
    },
    {
      title: 'Smart Home & BMS Integration',
      description: 'Connects VRF central touchscreens to BACnet, Modbus, or KNX smart-home apps for easy phone control and scheduling.'
    }
  ],
  specifications: [
    'Manufacturer service-checker software diagnostics & fault log readout',
    'Refnet Y-branch silver brazing with continuous dry nitrogen purging',
    '600 PSI nitrogen pressure hold test for R410A VRF pipe networks',
    'Electronic Expansion Valve (EEV) step check and sensor calibration',
    'Shielded 2-core communication bus continuity and resistance testing',
    'Inverter compressor frequency, oil return, and PCB voltage checks'
  ],
  commonIssuesSolved: [
    'Whole VRF system shutting down with outdoor error codes (such as U4 or E3)',
    'Some rooms blowing ice-cold air while other rooms blow warm air',
    'Central wall controller showing "Communication Error" or "Offline"',
    'Outdoor inverter compressor tripping on high temperature in midday heat',
    'Refrigerant gas leaks or unbalanced oil return across linked outdoor units'
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
      q: 'What is a VRF or VRV AC system?',
      a: 'VRF (Variable Refrigerant Flow—called VRV by Daikin) connects many indoor units to one modular outdoor unit bank. It adjusts refrigerant flow to each room individually, saving energy in large villas and offices.'
    },
    {
      q: 'Can any regular AC technician fix a Daikin VRV or VRF system?',
      a: 'Usually no. VRF systems use digital communication buses, inverter modules, and electronic expansion valves that require VRF-trained engineers and diagnostic software tools.'
    },
    {
      q: 'Why does my VRF thermostat show error code U4 or a communication fault?',
      a: 'A communication fault (like Daikin U4) means the indoor unit and outdoor unit cannot talk to each other—caused by a loose or damaged 2-core control wire, a tripped outdoor breaker, or a faulty transmission PCB.'
    },
    {
      q: 'Why are some rooms cold and other rooms warm on my VRF system?',
      a: 'This typically happens when an Electronic Expansion Valve (EEV) is stuck, a branch selector box is malfunctioning, or the system is slightly low on refrigerant gas.'
    },
    {
      q: 'How do you find a gas leak in a big VRF pipe network?',
      a: 'We isolate sections and run high-pressure dry nitrogen tests up to 600 PSI alongside electronic leak detectors to pinpoint the exact leaking Refnet joint or coil.'
    },
    {
      q: 'Do you offer annual maintenance contracts (AMC) for villa VRF systems?',
      a: 'Yes. We provide tailored quarterly VRF maintenance contracts for luxury villas, compounds, and commercial buildings across Dubai.'
    }
  ]
};
