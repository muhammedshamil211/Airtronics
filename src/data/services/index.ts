export * from './types';
import { acRepairService } from './acRepair';
import { acInstallationService } from './acInstallation';
import { hvacMaintenanceService } from './hvacMaintenance';
import { ductCleaningService } from './ductCleaning';
import { amcService } from './amc';
import { acServicingService } from './acServicing';
import { refrigerantGasService } from './refrigerantGas';
import { waterLeakageService } from './waterLeakage';
import { partsReplacementService } from './partsReplacement';
import { vrfSystemsService } from './vrfSystems';
import { ahuFahuFcuService } from './ahuFahuFcu';
import { chillerSystemsService } from './chillerSystems';
import { indoorAirQualityService } from './indoorAirQuality';
import { thermostatBmsService } from './thermostatBms';
import { serverRoomCoolingService } from './serverRoomCooling';
import { ductFabricationService } from './ductFabrication';
import { ventilationExhaustService } from './ventilationExhaust';
import { packagedRooftopService } from './packagedRooftop';
import { commercialRefrigerationService } from './commercialRefrigeration';
import { energyEfficiencyService } from './energyEfficiency';
import { testingBalancingService } from './testingBalancing';
import { hvacDesignService } from './hvacDesign';

export const SERVICES_DATA: import('./types').ServiceDetail[] = [
  acRepairService,
  acInstallationService,
  hvacMaintenanceService,
  ductCleaningService,
  amcService,
  acServicingService,
  refrigerantGasService,
  waterLeakageService,
  partsReplacementService,
  vrfSystemsService,
  ahuFahuFcuService,
  chillerSystemsService,
  indoorAirQualityService,
  thermostatBmsService,
  serverRoomCoolingService,
  ductFabricationService,
  ventilationExhaustService,
  packagedRooftopService,
  commercialRefrigerationService,
  energyEfficiencyService,
  testingBalancingService,
  hvacDesignService,
];

export const FEATURED_SERVICES = SERVICES_DATA.slice(0, 6);

export function getServiceBySlug(slug: string) {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
