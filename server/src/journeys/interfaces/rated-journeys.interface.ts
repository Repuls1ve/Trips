import { IJourneyInfo } from '../interfaces/journey.interface';
import { JourneyDocument } from '../schemas/journey.schema';

export type IRatedJourneys = IRatedJourney[]

export interface IRatedJourney {
  continent: IJourneyInfo['continent']
  journeys: JourneyDocument[]
}