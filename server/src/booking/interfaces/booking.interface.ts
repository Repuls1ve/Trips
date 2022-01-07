import { IPhoto } from 'src/common/interfaces/photo.interface'
import { IBookingRadioInput, IBookingRangeInput, IBookingSelectInput, IBookingTextareaInput, IBookingTextInput } from './booking-inputs.interface'

export interface IBooking {
  name: string
  photo: IBookingPhoto
  descriptions: IBookingDescriptions
  advantages: IBookingAdvantage[]
  inputs: Array<IBookingSelectInput | IBookingRangeInput | IBookingRadioInput | IBookingTextInput | IBookingTextareaInput>
}

export type IBookingPreview = Pick<IBooking, 'name' | 'photo' | 'descriptions'>

export interface IBookingPhoto extends IPhoto {}

export interface IBookingDescriptions {
  short: string
  detailed: string[]
}

export interface IBookingAdvantage {
  title: string
  icon: IBookingPhoto 
}