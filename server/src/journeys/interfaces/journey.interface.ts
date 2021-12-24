export interface IJourney {
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

export type TravelType = 'Adventure Travel' | 'Luxury Travel' | 'Travel With Group' | 'Family Travel' | 'Solo Travel'
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
  title: IJourneyInfo['title']
  content: string
  scores: IJourneyReviewScore[]
  author: string
  date: string
}

export interface IJourneyReviewsBreakdown {
  rating: IJourneyReviewScore['rating']
}

export interface IJourneyReviewScore {
  attribute: string
  rating: number
}
