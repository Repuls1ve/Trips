export interface ITourPreview {
    _id: string
    title: string
    location: location
    prices: cost[]
    score_breakdown: score_breakdown
}

export interface ITour extends ITourPreview {
    destination: string
    departure: string
    departure_time: string
    return_time: string
    dress_code: string
    included: string[]
    absences: string[]
    plan: stage[]
    tips: tip[]
    gallery: any[]
    reviews: review[]
}

export type stage = {
    name: string
    description: string
    benefits: string[]
}

export type coordinates = {
    latitude: number
    longitude: number
}

export type location = {
    name: string
    coordinates: coordinates
}

export type tip = {
    title: string
    description: string
}

export type review = {
    author: string
    date: string
    text: string
    scores: score[]
}

export type score = {
    aspect: string
    value: number 
}

export type score_breakdown = {
    average_score: number
    reviews_count: number
    scores: score[]
}

export type cost = {
    value: number
    currency: string
}