import { IJourney } from '../interfaces/journey.interface';

export class AddJourneyDto {
  info: IJourney['info']
  plan: IJourney['plan']
  location: IJourney['location']
  tips: IJourney['tips']
  gallery: IJourney['gallery']
}