const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'services');

const UPDATED_SUBCATEGORIES = {
  'acRepair.ts': [
    'Emergency 24/7 AC Breakdown Troubleshooting',
    'Refrigerant Gas Leak Detection & Pressure Audit',
    'Compressor Diagnostics & Mechanical Repair',
    'Capacitor, Relay & Contactor Replacement',
    'Inverter PCB Board & Electronic Control Repair',
    'Fan Motor & Blower Wheel Balancing',
    'Thermostat Recalibration & Rewiring',
    'Rapid Airflow Restoration & Cooling Recovery'
  ],
  'acInstallation.ts': [
    'Split AC Installation',
    'Ducted AC Installation',
    'Concealed Fan Coil Unit (FCU) Installation',
    'Multi-Split AC System Installation',
    'Old AC Unit Replacement & Upgrades',
    'AC Relocation & Reinstallation',
    'Copper Piping & Condensate Drainage Installation',
    'Eco-Friendly AC Removal & Disposal',
    'Commissioning, Delta-T & Performance Testing'
  ],
  'hvacMaintenance.ts': [
    'Comprehensive 24-Point Preventative HVAC Tune-Up',
    'Biodegradable Chemical Evaporator Coil Deep Cleaning',
    'Outdoor Condenser Fin High-Pressure Pressure Washing',
    'Drain Tray Flush & Anti-Bacterial Bio-Tablet Placement',
    'Refrigerant Pressure Verification & Operating Current Audit',
    'Blower Wheel Dynamic Balancing & Bearing Lubrication',
    'Thermostat Calibration & Deadband Efficiency Tuning',
    'Thermal Imaging Inspection & DEWA Energy Optimization Report'
  ],
  'ductCleaning.ts': [
    'High-Resolution Robotic CCTV Camera Video Inspection',
    'Motorized Rotary Brush Mechanical Duct Scrubbing',
    'Medical-Grade HEPA Negative Air Contaminant Extraction',
    'Deep Grille, Linear Slot & Ceiling Diffuser Chemical Washing',
    'Dubai Municipality Approved Non-Toxic Antimicrobial Fogging',
    'Black Mold, Mildew & Aspergillus Fungal Spore Remediation',
    'Stale Indoor Odor, Moisture & VOC Neutralization',
    'Post-Cleaning Photographic Verification & IAQ Air Audit'
  ],
  'amc.ts': [
    'Residential Villa & Townhouse Annual AMC Contracts',
    'Luxury Apartment & High-Rise Residence AMC Plans',
    'Commercial Office, Retail & Restaurant HVAC Contracts',
    'Quarterly Scheduled 24-Point Comprehensive Preventive Visits',
    'Unlimited 24/7 Priority Emergency Breakdown Response',
    'Zero Labor Charges on All Diagnostics and Repairs',
    '15% Wholesale OEM Spare Parts Discount',
    'Dedicated Facility Account Manager & Digital Asset Records'
  ],
  'acServicing.ts': [
    'Comprehensive General AC Servicing',
    'Indoor Evaporator Deep Chemical Washing',
    'Outdoor Condenser Coil Hydro-Jet Cleaning',
    'Electrostatic Air Filter Cleaning & Replacement',
    'Condensate Drain Tray Descaling & Bio-Treatment',
    'Centrifugal Blower Wheel & Motor Servicing',
    'Thermodynamic Delta-T Performance Inspection',
    'Pre-Summer & Seasonal AC Preventive Maintenance'
  ],
  'refrigerantGas.ts': [
    'Electronic Halogen Refrigerant Leak Detection',
    'Nitrogen High-Pressure Leak Testing & Repair',
    'Certified R410A, R32 & R22 Gas Top-Up',
    'Refrigerant System Deep Vacuum Dehydration',
    'EPA-Compliant Refrigerant Recovery & Recycling',
    'Copper Suction & Liquid Line Brazing',
    'Damaged Copper Piping Replacement',
    'Closed-Cell Thermal Pipe Insulation Replacement'
  ],
  'waterLeakage.ts': [
    'Emergency Indoor AC Water Leakage Repair',
    'Pressurized Nitrogen Drain Line Clearing',
    'Condensate Drain Pipe Rerouting & Replacement',
    'Cracked Drain Pan Repair & Replacement',
    'Automatic Condensate Removal Pump Installation',
    'Gravity Drainage Slope Correction & Leveling',
    'Suction Line Sweating & Insulation Condensation Repair',
    'Ceiling Water Leak Emergency Diagnosis & Repair'
  ],
  'partsReplacement.ts': [
    'OEM Compressor Replacement & Oil Acid Testing',
    'Indoor Blower Motor & Bearing Replacement',
    'Outdoor Condenser Fan Motor Replacement',
    'Heavy-Duty Dual Run Capacitor Replacement',
    'Inverter PCB Board Diagnostics & Replacement',
    'Magnetic Contactor & Overload Relay Replacement',
    'Thermostatic & Electronic Expansion Valve Replacement',
    'Digital Thermostat & Wireless Remote Replacement'
  ],
  'vrfSystems.ts': [
    'Turnkey VRF / VRV System Installation',
    'Quarterly VRF Preventative Maintenance',
    'Multi-Zone Communication Error Diagnostics',
    'Branch Selector (BS) Box Servicing',
    'Inverter Compressor Overhaul & Oil Balancing',
    'Central BMS Touchscreen Controller Configuration',
    'Nitrogen Leak Testing on Refnet Joints',
    'VRF Performance Commissioning & Capacity Testing'
  ],
  'ahuFahuFcu.ts': [
    'Air Handling Unit (AHU) Mechanical Overhaul',
    'Fresh Air Handling Unit (FAHU) Heat Wheel Servicing',
    'Fan Coil Unit (FCU) High-Rise Tower Maintenance',
    '2-Way & 3-Way Modulating Actuator Valve Replacement',
    'Pocket, Bag & HEPA Primary Filter Replacement',
    'Chilled-Water Coil Chemical Pressure Wash',
    'V-Belt Tensioning & Pulley Alignment',
    'AHU / FCU Bearing Lubrication & Dynamic Balancing'
  ],
  'chillerSystems.ts': [
    'Air-Cooled Screw & Scroll Chiller Maintenance',
    'Water-Cooled Centrifugal Chiller Overhaul',
    'Chilled-Water Primary & Secondary Pump Servicing',
    'District Cooling Interface & BTU Meter Calibration',
    'Pressure-Independent Control Valve (PICV) Repair',
    'Cooling Tower Descaling & Bio-Chemical Treatment',
    'Chiller Tube Eddy Current Testing & Descaling',
    'Comprehensive Chiller Oil & Vibration Analysis'
  ],
  'indoorAirQuality.ts': [
    'Comprehensive Indoor Air Quality (IAQ) Laser Testing',
    'Dubai Municipality Approved Mold Spore Remediation',
    'Medical-Grade HEPA & Activated Carbon Filtration',
    'In-Duct UV-C Germicidal Disinfection Lamp Setup',
    'Indoor Humidity & Dehumidification Engineering',
    'AC Odor Neutralization & Ozone Bio-Sanitization',
    'Airflow CFM Balancing & Static Pressure Optimization',
    'Continuous VOC & PM2.5 IAQ Monitoring Reports'
  ],
  'thermostatBms.ts': [
    'Smart Wi-Fi Thermostat Installation (Nest / Ecobee / Honeywell)',
    'Digital Programmable Thermostat Replacement',
    'High-Rise FCU Modulating Valve Actuator Setup',
    'Building Management System (BMS / DDC) Integration',
    'Multi-Zone Damper Control Automation',
    'Thermostat Control Wiring & Relay Troubleshooting',
    'Precision Temperature & Humidity Sensor Calibration',
    'Remote Mobile App HVAC Scheduling Configuration'
  ],
  'serverRoomCooling.ts': [
    'Precision Computer Room AC (CRAC / CRAH) Maintenance',
    '24/7 Critical Data Center Emergency Breakdown Dispatch',
    'N+1 Cooling Redundancy Testing & Automatic Failover',
    'Close-Control Humidity & Dew-Point Management',
    'In-Row Server Rack Precision Cooling Installation',
    'Static Pressure Plaque & Raised Floor Air Balancing',
    'Electronic Micro-Expansion Valve (EEV) Tuning',
    'High-Sensible Heat Ratio Compressor Servicing'
  ],
  'ductFabrication.ts': [
    'Custom Galvanized Iron (GI) Sheet Metal Duct Fabrication',
    'Pre-Insulated (PIR / Phenolic) Ductwork Installation',
    'Duct Route Modification, Realignment & Extension',
    'Mastic Sealant & Foil Tape Duct Leakage Sealing',
    'Fiberglass & Rockwool Acoustic Thermal Insulation',
    'Damaged Flexible Acoustic Duct Replacement',
    'Linear Slot Diffuser & Supply Grille Installation',
    'Duct Air Leakage & Pressure Testing',
    'Duct Hanger & Anti-Vibration Isolator Installation'
  ],
  'ventilationExhaust.ts': [
    'Treated Fresh Air (FAHU) Ventilation Installation',
    'Bathroom & Restroom Exhaust Fan Installation',
    'Commercial Kitchen Hood & Ecology Unit Servicing',
    'Basement Car Park Carbon Monoxide (CO) Jet Fan Servicing',
    'Inline & Centrifugal Duct Exhaust Fan Overhaul',
    'Smoke Spill & Fire Damper Mechanical Testing',
    'Heat Recovery Ventilation (HRV / ERV) Systems',
    'Airflow Balancing & Backdraft Damper Setup'
  ],
  'packagedRooftop.ts': [
    'Commercial Packaged Rooftop Unit (RTU) Installation',
    'Rooftop AC Preventative Maintenance & Inspection',
    'Heavy-Duty Hermetic Compressor Replacement',
    'Rooftop Evaporator & Condenser Chemical Wash',
    'Commercial Pleated & Heavy-Duty Filter Replacement',
    'Condenser Fan Motor & Dynamic Blade Balancing',
    'Refrigerant Circuit Pressure Balancing & Valve Overhaul',
    'Economizer & Outside Air Damper Automation Setup'
  ],
  'commercialRefrigeration.ts': [
    'Commercial Cold Room & Freezer Room Installation',
    'Walk-In Chiller Preventative Maintenance',
    'Commercial Supermarket Display Chiller Servicing',
    'Semi-Hermetic Refrigeration Compressor Overhaul',
    'Evaporator Defrost Heater & Fan Motor Repair',
    'Digital Cold Room Temperature Controller Calibration',
    'Heavy-Duty Door Gasket & Thermal Strip Replacement',
    'Ultra-Low Temperature Refrigerant Leak Detection'
  ],
  'energyEfficiency.ts': [
    'DEWA AC Energy Consumption Audit & Thermal Imaging',
    'Variable Frequency Drive (VFD) Inverter Retrofitting',
    'Smart Thermostat Scheduling & Peak Load Optimization',
    'High-Efficiency Inverter Compressor Upgrades',
    'Hydrophilic Anti-Corrosion Coil Protective Coating',
    'Electrically Commutated (EC) Variable-Speed Fan Upgrades',
    'Ductwork Thermal Insulation R-Value Improvements',
    'Chilled-Water Delta-T Penalty Elimination Tuning'
  ],
  'testingBalancing.ts': [
    'Digital Airflow CFM Testing & Pitot Tube Traverse',
    'Supply, Return & Exhaust Air Duct Balancing',
    'Chilled-Water Hydronic Balancing & Flow Measurement',
    'Thermodynamic Supply/Return Delta-T Verification',
    'Equipment Vibration Analysis & Motor Decibel Testing',
    'Compressor Operating Current & Amperage Draw Audit',
    'Post-Installation HVAC Commissioning & Certification',
    'Dubai Municipality & Civil Defence Compliance Handover'
  ],
  'hvacDesign.ts': [
    'ASHRAE & Carrier HAP Cooling Load Calculations',
    'Villa & Commercial HVAC Equipment Sizing & Selection',
    'AutoCAD & Revit 3D Clash-Free Ductwork Engineering',
    'Chilled-Water Hydronic Piping Network Design',
    'Fresh Air Ventilation & Indoor Air Quality Design',
    'Independent Pre-Purchase Villa HVAC Condition Survey',
    'BOQ Cost Estimation & Engineering Tender Specifications',
    'Energy Code & Green Building Regulation Compliance'
  ]
};

Object.entries(UPDATED_SUBCATEGORIES).forEach(([filename, subs]) => {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filename}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Format subcategories array with clean indentation
  const formattedSubs = 'subcategories: [\n' +
    subs.map(s => `    '${s.replace(/'/g, "\\'")}'`).join(',\n') +
    '\n  ],';

  // Replace existing subcategories array
  content = content.replace(/subcategories:\s*\[[\s\S]*?\],/, formattedSubs);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated subcategories in ${filename} (${subs.length} items)`);
});

console.log('All 22 service files updated successfully!');
