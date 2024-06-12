import { ColumnProps } from 'antd/lib/table'

type Props<T> = {
  columns: ColumnProps<T>[]
}


export const TableHead = <T extends object>({ columns }: Props<T>) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index} style={{ border: '1px solid #ddd', padding: 8 }}>
            {column.title as string}
          </th>
        ))}
      </tr>
    </thead>
  )
}