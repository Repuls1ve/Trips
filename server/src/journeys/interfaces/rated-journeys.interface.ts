import { IJourneyInfo } from '../interfaces/journey.interface';
import { JourneyDocument } from '../schemas/journey.schema';

export interface IRatedJourneys {
  continent: IJourneyInfo['continent']
  journeys: JourneyDocument[]
}

export interface IRatedJourneysStats {
  continents: IJourneyInfo['continent'][]
}