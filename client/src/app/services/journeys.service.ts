import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJourney, IJourneysQuery, IRatedJourneys, IRatedJourneysQuery, IRatedJourneysStats } from '../models/journey.model';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {
  private readonly baseUrl = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  getJourneys(journeysQuery: IJourneysQuery): Observable<IJourney[]> {
    const { limit, offset } = journeysQuery
    const params = {
      ...offset && { offset },
      ...limit && { limit }
    }
    return this.http.get<IJourney[]>(this.baseUrl + '/journeys', { params })
  }

  getRatedJourneys(ratedJourneysQuery: IRatedJourneysQuery): Observable<IRatedJourneys> {
    const { continent, limit } = ratedJourneysQuery
    const params = {
      continent,
      ...limit && { limit }
    }
    return this.http.get<IRatedJourneys>(this.baseUrl + '/journeys/rated', { params })
  }
  
  getJourneysStats(): Observable<IRatedJourneysStats> {
    return this.http.get<IRatedJourneysStats>(this.baseUrl + '/journeys/rated/stats')
  }

  getJourney(id: IJourney['_id']): Observable<IJourney> {
    return this.http.get<IJourney>(this.baseUrl + `/journeys/one/${id}`)
  }
}