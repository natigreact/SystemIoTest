interface IOption {
  size: string
  amount: number
}

export interface IProduct {
  id: number
  name: string
  options: IOption
  active: boolean
  createdAt: string
}

export interface IPricePlan {
  id: number,
  description: string
  active: boolean,
  createdAt: string
  removedAt: string
}

export interface IPage {
  id: number,
  title: string
  active: boolean
  updatedAt: string
  publishedAt: string
}

export interface IDateObject {
  [key: string]: string | number | boolean | IOption
}

export type NestedObject = { [key: string]: any }