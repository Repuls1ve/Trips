export interface IRatedJourneysQuery {
  continent: IRatedJourneys['continent']
  limit?: number
}

export interface IJourneysQuery {
  limit?: number
  offset?: number
}

export interface IJourneysError {
  statusCode: number
  message: string[]
  error: string
}

export interface IRatedJourneys {
  continent: IJourneyInfo['continent']
  journeys: IJourney[]
}

export interface IRatedJourneysStats {
  continents: IJourneyInfo['continent'][]
}

export interface IJourney {
  _id: string
  info: IJourneyInfo
  plan: IJourneyPlan
  location: IJourneyLocation
  tips: IJourneyTips
  gallery: IJourneyGallery
  reviews?: IJourneyReviews
}

export interface IJourneyInfo {
  title: string
  continent: TravelContinent
  package: string
  travel: TravelType
  travellers: number
  photo: IJourneyPhoto
  prices: IJourneyPrices
  description: string
  destination: string
  departure: string
  advantages: string[]
  disadvantages: string[]
}

export type TravelType = 'Adventure Travel' | 'Business Travel' | 'Travel With Group' | 'Family Travel' | 'Solo Travel'
export type TravelContinent =  'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Antarctica' | 'Australia'
 
export interface IJourneyPrices {
  EUR: number
  USD: number
}

export interface IJourneyPlan {
  steps: IJourneyPlanStep[]
}

export interface IJourneyPlanStep {
  title: string
  description: IJourneyInfo['description']
  advantages: IJourneyInfo['advantages']
}

export interface IJourneyLocation {
  description: IJourneyInfo['description']
  latitude: number
  longitude: number
}

export type IJourneyTips = IJourneyTip[]

export interface IJourneyTip {
  title: IJourneyPlanStep['title']
  description: IJourneyPlanStep['description']
}

export interface IJourneyGallery {
  photos: IJourneyPhoto[]
}

export interface IJourneyPhoto {
  source: string
  alt: string
}

export interface IJourneyReviews {
  breakdown: IJourneyReviewsBreakdown
  reviews: IJourneyReview[]
}

export interface IJourneyReview {
  content: string
  scores: IJourneyReviewScore[]
  author: string
  timestamp: number
}

export interface IJourneyReviewsBreakdown {
  rating: IJourneyReviewScore['rating']
  scores: IJourneyReviewScore[]
  count: number 
}

export interface IJourneyReviewScore {
  attribute: string
  rating: number
}
