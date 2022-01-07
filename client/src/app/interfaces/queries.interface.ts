import { IRatedJourneys } from '../models/journey.model'

export interface IPaginationQuery {
  limit?: number
  offset?: number
}

export interface IRatedJourneysQuery {
  continent: IRatedJourneys['continent']
  limit?: IPaginationQuery['limit']
}

export interface IJourneysPackagesQuery {
  limit?: IPaginationQuery['limit']
}