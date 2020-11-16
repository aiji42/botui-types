import { SelectHTMLAttributes, OptionHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from 'react'

interface FormBase<Type extends string, Values extends {}, Status extends {}> {
  type: Type
  values: Values
  status: Status
  onSubmited: (parm: any) => void
}

export interface FormAddressValues {
  postalCode: string | number
  prefecture: string
  prefectureId: number | string
  city: string
  street: string | number
  building: string
}

export interface FormAddress extends FormBase<'FormAddress', Partial<FormAddressValues>, {}> { }

export interface FormBirthDayValues {
  birthdayYear: string | number
  birthdayMonth: string | number
  birthdayDay: string | number
}

export interface FormBirthDay extends FormBase<'FormBirthDay', Partial<FormBirthDayValues>, {
  paddingZero?: boolean
}> { }

export interface FormEmailValues {
  email: string
}

export interface FormEmail extends FormBase<'FormEmail', Partial<FormEmailValues>, {}> { }

export interface FormNameValues {
  familyName: string
  familyNameKana: string
  firstName: string
  firstNameKana: string
}

export interface FormName extends FormBase<'FormName', Partial<FormNameValues>, {
  kana?: boolean
  kanaType?: 'hiragana' | 'katakana'
}> { }

export interface FormTelValues {
  tel: string | number
}

export interface FormTel extends FormBase<'FormTel', Partial<FormTelValues>, {}> { }

export interface FormCreditCardValues {
  creditCardNumber: string | number
  creditCardExpiryYear: string | number
  creditCardExpiryMonth: string | number
  creditCardName: string | number
  creditCardCvc: string | number
}

export interface FormCreditCard extends FormBase<'FormCreditCard', Partial<FormCreditCardValues>, {}> { }

interface CustomRadio extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export interface FormCustomRadioGroupValues {
  [x: string]: number | string | boolean
}

export interface FormCustomRadioGroup extends FormBase<'FormCustomRadioGroup', FormCustomRadioGroupValues, {}> {
  name: string
  inputs: Array<CustomRadio>
}

interface CustomCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export interface FormCustomCheckboxValues {
  [x: string]: number | string | boolean
}

export interface FormCustomCheckbox extends FormBase<'FormCustomRadioGroup', FormCustomCheckboxValues, {}> {
  name: string
  inputs: Array<CustomCheckbox>
}

interface CustomSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  title?: string
  options: OptionHTMLAttributes<HTMLOptionElement>[]
}

export interface FormCustomSelectValues {
  [x: string]: number | string
}

export interface FormCustomSelect extends FormBase<'FormCustomSelect', FormCustomSelectValues, {}> {
  selects: Array<CustomSelect>
}

interface CustomInput extends InputHTMLAttributes<HTMLIFrameElement> {
  name: string
  type?: 'text' | 'number' | 'tel' | 'password' | 'email'
  title?: string
  validation?: string
}

export interface FormCustomInputValues {
  [x: string]: number | string
}

export interface FormCustomInput extends FormBase<'FormCustomInput', FormCustomInputValues, {}> {
  inputs: Array<CustomInput>
}

export interface FormCustomTextareaValues {
  [x: string]: string
}

export interface FormCustomTextarea extends FormBase<'FormCustomTextarea', FormCustomTextareaValues, {}>, TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  title?: string
  validation?: string
}

export interface FormConfirmValues {
  confirmed: boolean
  confirmHTML: string
}

export interface FormConfirm extends FormBase<'FormConfirm', Partial<FormConfirmValues>, {}> { }

export type Form = FormAddress | FormBirthDay | FormConfirm | FormCreditCard | FormCustomInput | FormCustomSelect
  | FormCustomCheckbox | FormCustomRadioGroup | FormCustomTextarea | FormEmail | FormName | FormTel
