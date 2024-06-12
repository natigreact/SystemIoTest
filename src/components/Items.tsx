import { getNestedValue, transformDateValue } from '../helpers.ts'
import { ColumnProps } from 'antd/lib/table'

type Props<T> = {
  filteredData: T[]
  columns: ColumnProps<T>[]
}


export const Items = <T extends object>({ filteredData, columns }: Props<T>) => {
  return (
    <tbody>
      {filteredData.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <td key={colIndex} className='tableColumn'>
              {column.render
                ? column.render(
                  transformDateValue(getNestedValue(row, column.dataIndex as string)),
                  row,
                  colIndex
                )
                : transformDateValue(getNestedValue(row, column.dataIndex as string))
              }
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}