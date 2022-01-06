export interface IBooking {
  name: string
  photo: IBookingPhoto
  descriptions: IBookingDescriptions
  advantages: IBookingAdvantage[]
  inputs: Array<IBookingSelectInput | IBookingRangeInput | IBookingRadioInput | IBookingTextInput | IBookingTextareaInput>
}

export interface IBookingPhoto {
  source: string
  alt: string
}

export interface IBookingDescriptions {
  short: string
  detailed: string[]
}

export interface IBookingAdvantage {
  title: string
  icon: IBookingPhoto 
}

export type IBookingPreview = Pick<IBooking, 'name' | 'photo' | 'descriptions'>

export type InputType = 'select' | 'range' | 'radio' | 'text' | 'textarea'

export interface IBookingInput {
  title: string
  type: InputType
}

export interface IBookingTextInput extends IBookingInput {}

export interface IBookingTextareaInput extends IBookingInput {}

export interface IBookingSelectInput extends IBookingInput {
  options: IBookingSelectInputOptions
}

export interface IBookingRangeInput extends IBookingInput {
  fromOptions: IBookingRangeInputOptions
  toOptions: IBookingRangeInputOptions
}

export interface IBookingRadioInput extends IBookingInput {
  options: IBookingRadioInputOptions
}

export interface IInputDefaultOption {
  label: string
  value: string
}

export interface IBookingRadioInputOptions extends Array<IInputDefaultOption> {} 
export interface IBookingSelectInputOptions extends Array<IInputDefaultOption> {}
export interface IBookingRangeInputOptions extends Array<IInputDefaultOption> {}