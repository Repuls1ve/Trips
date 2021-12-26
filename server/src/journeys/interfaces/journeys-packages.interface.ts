import { IJourneyInfo, IJourneyPhoto } from './journey.interface';

export interface IJourneysPackagesStats extends Array<IJourneysPackageStats> {}

export interface IJourneysPackageStats {
  package: IJourneyInfo['package']
  photo: IJourneyPhoto
  count: number
}