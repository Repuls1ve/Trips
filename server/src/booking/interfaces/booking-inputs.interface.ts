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