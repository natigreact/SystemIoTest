import { IDateObject, NestedObject } from './types.ts'
import { format } from 'date-fns'


export const transformDates = (values: IDateObject): IDateObject => {
  const transformedValues: IDateObject = { ...values }
  for (const key in transformedValues) {
    if (Object.prototype.hasOwnProperty.call(transformedValues, key)) {
      const value = transformedValues[key]
      if (typeof value === 'string') {
        const parsedDate = Date.parse(value)
        if (!isNaN(parsedDate)) {
          transformedValues[key] = format(new Date(parsedDate), 'dd.MM.yyyy HH:mm')
        }
      }
    }
  }
  return transformedValues
}

export const getNestedValue = (obj: NestedObject, path: string | string[]) => {
  if (!obj || !path) return undefined
  const pathArray = Array.isArray(path) ? path : path.split('.')
  return pathArray.reduce((acc, part) => acc && acc[part] !== undefined ? acc[part] : undefined, obj)
}

export const transformDateValue = (value: NestedObject | undefined): string | any => {
  if (typeof value === 'string') {
    const parsedDate = Date.parse(value)
    if (!isNaN(parsedDate)) {
      return format(new Date(parsedDate), 'dd.MM.yyyy HH:mm')
    }
  }
  return value
}