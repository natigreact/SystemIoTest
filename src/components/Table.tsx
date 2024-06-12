import { useState } from 'react'
import { ColumnProps } from 'antd/lib/table'
import { Items } from './Items.tsx'
import { TableHead } from './TableHead.tsx'
import { Search } from './Search.tsx'

interface TableProps<T> {
  data: T[]
  columns: ColumnProps<T>[]
}


export const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const [filteredData, setFilteredData] = useState(data)

  return (
    <>
      <Search data={data} setFilteredData={setFilteredData} />
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHead columns={columns} />
        <Items filteredData={filteredData} columns={columns} />
      </table>
    </>
  )
}