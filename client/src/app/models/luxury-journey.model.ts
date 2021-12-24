import { IJourney, IJourneyInfo, IJourneyPhoto } from './journey.model'

export interface ILuxuryJourney extends Omit<IJourney, 'info'> {
  info: ILuxuryJourneyInfo
}

export interface ILuxuryJourneyInfo extends IJourneyInfo {
  package: ILuxuryPackage['name']
}

export type ILuxuryPackages = ILuxuryPackage[]

export interface ILuxuryPackage {
  name: string
  photo: IJourneyPhoto
  total: number
  journeys: ILuxuryJourney[]
}