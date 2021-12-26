export type tabName = 'Information' | 'Luxury Tour Plan' | 'Location' | 'Travel Tips' | 'Gallery' | 'Reviews' | 'Cancellation policy'

export interface IJourneyTabs extends Array<IJourneyTab> {}

export interface IJourneyTab {
  name: tabName
}

export const JourneyTabs: IJourneyTabs = [
  {
    name: 'Information'
  },
  {
    name: 'Luxury Tour Plan'
  },
  {
    name: 'Location'
  },
  {
    name: 'Travel Tips'
  },
  {
    name: 'Gallery'
  },
  {
    name: 'Reviews'
  },
  {
    name: 'Cancellation policy'
  }
]