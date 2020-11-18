import { HTMLAttributes } from 'react'
import { Form as FormType } from './Form'

export interface ContentForm {
  type: 'form'
  props: FormType
}

export interface StringType extends HTMLAttributes<HTMLSpanElement> { }

export interface ImageType {
  imgKey: string
}

export interface ContentString {
  type: 'string'
  props: StringType
}

export interface ContentImage {
  type: 'image'
  props: ImageType
}

export type Content = {
  delay?: number
} & (ContentForm | ContentImage | ContentString)

export interface Message {
  human: boolean
  iconDisplay?: boolean
  content: Content
  completed: boolean
  updated: boolean
}

