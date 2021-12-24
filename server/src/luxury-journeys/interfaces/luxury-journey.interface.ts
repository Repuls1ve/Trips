import { IJourney, IJourneyInfo } from 'src/journeys/interfaces/journey.interface';
import { ILuxuryPackage } from './luxury-packages.interface';

export interface ILuxuryJourney extends Omit<IJourney, 'info'> {
  info: ILuxuryJourneyInfo
}

export interface ILuxuryJourneyInfo extends IJourneyInfo {
  package: ILuxuryPackage['name']
}