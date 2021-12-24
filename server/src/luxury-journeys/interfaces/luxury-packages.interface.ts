import { IJourneyPhoto } from 'src/journeys/interfaces/journey.interface'
import { ILuxuryJourney } from './luxury-journey.interface'

export type ILuxuryPackages = ILuxuryPackage[]

export interface ILuxuryPackage {
  name: string
  photo: IJourneyPhoto
  total: number
  journeys: ILuxuryJourney[]
}