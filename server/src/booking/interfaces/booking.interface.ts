import { IPhoto } from 'src/common/interfaces/photo.interface'
import { IBookingInput } from './booking-inputs.interface'

export interface IBooking {
  name: string
  photo: IBookingPhoto
  descriptions: IBookingDescriptions
  advantages: IBookingAdvantage[]
  inputs: IBookingInput[]
}

export interface IBookingPhoto extends IPhoto {}

export interface IBookingDescriptions {
  short: string
  detailed: string[]
}

export interface IBookingAdvantage {
  title: string
  icon: IBookingPhoto 
}