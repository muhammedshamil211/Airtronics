const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'src', 'data', 'servicesData.ts');
const content = fs.readFileSync(srcPath, 'utf8');

// Priority order mapping
const ORDERED_SLUGS = [
  { slug: 'ac-repair', file: 'acRepair.ts', exportName: 'acRepairService', id: '01' },
  { slug: 'ac-installation', file: 'acInstallation.ts', exportName: 'acInstallationService', id: '02' },
  { slug: 'hvac-maintenance', file: 'hvacMaintenance.ts', exportName: 'hvacMaintenanceService', id: '03' },
  { slug: 'duct-cleaning', file: 'ductCleaning.ts', exportName: 'ductCleaningService', id: '04' },
  { slug: 'amc', file: 'amc.ts', exportName: 'amcService', id: '05' },
  { slug: 'ac-servicing', file: 'acServicing.ts', exportName: 'acServicingService', id: '06' },
  { slug: 'refrigerant-gas', file: 'refrigerantGas.ts', exportName: 'refrigerantGasService', id: '07' },
  { slug: 'water-leakage-drainage', file: 'waterLeakage.ts', exportName: 'waterLeakageService', id: '08' },
  { slug: 'parts-replacement', file: 'partsReplacement.ts', exportName: 'partsReplacementService', id: '09' },
  { slug: 'vrf-vrv-systems', file: 'vrfSystems.ts', exportName: 'vrfSystemsService', id: '10' },
  { slug: 'ahu-fahu-fcu', file: 'ahuFahuFcu.ts', exportName: 'ahuFahuFcuService', id: '11' },
  { slug: 'chiller-systems', file: 'chillerSystems.ts', exportName: 'chillerSystemsService', id: '12' },
  { slug: 'indoor-air-quality', file: 'indoorAirQuality.ts', exportName: 'indoorAirQualityService', id: '13' },
  { slug: 'thermostat-bms-controls', file: 'thermostatBms.ts', exportName: 'thermostatBmsService', id: '14' },
  { slug: 'server-room-cooling', file: 'serverRoomCooling.ts', exportName: 'serverRoomCoolingService', id: '15' },
  { slug: 'duct-fabrication-repair', file: 'ductFabrication.ts', exportName: 'ductFabricationService', id: '16' },
  { slug: 'ventilation-exhaust', file: 'ventilationExhaust.ts', exportName: 'ventilationExhaustService', id: '17' },
  { slug: 'packaged-rooftop-units', file: 'packagedRooftop.ts', exportName: 'packagedRooftopService', id: '18' },
  { slug: 'commercial-refrigeration', file: 'commercialRefrigeration.ts', exportName: 'commercialRefrigerationService', id: '19' },
  { slug: 'energy-efficiency-upgrades', file: 'energyEfficiency.ts', exportName: 'energyEfficiencyService', id: '20' },
  { slug: 'testing-balancing-commissioning', file: 'testingBalancing.ts', exportName: 'testingBalancingService', id: '21' },
  { slug: 'hvac-design-consultancy', file: 'hvacDesign.ts', exportName: 'hvacDesignService', id: '22' }
];

const targetDir = path.join(__dirname, '..', 'src', 'data', 'services');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Create types.ts
const typesContent = `export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  image: string;
  subcategories: string[];
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
`;
fs.writeFileSync(path.join(targetDir, 'types.ts'), typesContent, 'utf8');

// 2. Extract INVOICE_QUOTE_TERMS to src/data/termsData.ts
const termsIndex = content.indexOf('export const INVOICE_QUOTE_TERMS = {');
if (termsIndex !== -1) {
  const termsContent = content.slice(termsIndex);
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'termsData.ts'), termsContent, 'utf8');
}

// 3. Extract each service object from content
// SERVICES_DATA array starts after "export const SERVICES_DATA: ServiceDetail[] = ["
const arrayStart = content.indexOf('export const SERVICES_DATA: ServiceDetail[] = [');
const arrayEnd = content.indexOf('];\n\nexport const INVOICE_QUOTE_TERMS');
const arrayContent = content.slice(arrayStart, arrayEnd);

// Find each service block by matching slug
ORDERED_SLUGS.forEach(item => {
  const slugPattern = new RegExp(`slug:\\s*['"]${item.slug}['"]`);
  const match = slugPattern.exec(arrayContent);
  if (!match) {
    console.error(`Could not find slug: ${item.slug}`);
    return;
  }

  // Find start of object (opening '{' before slug)
  const pos = match.index;
  const objStart = arrayContent.lastIndexOf('\n  {', pos);
  if (objStart === -1) {
    console.error(`Could not find objStart for ${item.slug}`);
    return;
  }

  // Find end of object: balanced braces
  let depth = 0;
  let objEnd = -1;
  const startFrom = objStart + '\n  {'.length - 1;
  for (let i = startFrom; i < arrayContent.length; i++) {
    if (arrayContent[i] === '{') depth++;
    else if (arrayContent[i] === '}') {
      depth--;
      if (depth === 0) {
        objEnd = i + 1;
        break;
      }
    }
  }

  if (objEnd === -1) {
    console.error(`Could not find objEnd for ${item.slug}`);
    return;
  }

  let serviceCode = arrayContent.slice(startFrom, objEnd).trim();
  
  // Replace id with new ordered id
  serviceCode = serviceCode.replace(/id:\s*['"]\d+['"],/, `id: '${item.id}',`);

  const fileContent = `import { ServiceDetail } from './types';

export const ${item.exportName}: ServiceDetail = ${serviceCode};
`;

  fs.writeFileSync(path.join(targetDir, item.file), fileContent, 'utf8');
  console.log(`Wrote ${item.file} with ID ${item.id}`);
});

// 4. Create src/data/services/index.ts
const imports = ORDERED_SLUGS.map(s => `import { ${s.exportName} } from './${s.file.replace('.ts', '')}';`).join('\n');
const arrayItems = ORDERED_SLUGS.map(s => `  ${s.exportName},`).join('\n');

const indexContent = `export * from './types';
${imports}

export const SERVICES_DATA: import('./types').ServiceDetail[] = [
${arrayItems}
];

export const FEATURED_SERVICES = SERVICES_DATA.slice(0, 6);

export function getServiceBySlug(slug: string) {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
`;
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');

// 5. Update src/data/servicesData.ts to re-export everything
const servicesDataContent = `/**
 * Airtronics Fixcare Technical Services - HVAC & AC Services Data
 * Modularized into separate service files under ./services/ for maximum performance and tree-shaking
 */

export * from './services';
export { INVOICE_QUOTE_TERMS } from './termsData';
`;
fs.writeFileSync(srcPath, servicesDataContent, 'utf8');

console.log('Successfully split and modularized all services!');
