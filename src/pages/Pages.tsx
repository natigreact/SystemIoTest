import { useState } from 'react'
import { pages } from '../data'
import { Table } from '../components/Table'
import { EditModal } from '../components/EditModal'
import { IDateObject, IPage } from '../types.ts'
import { pagesColumnsConfig } from '../config/pagesColumnsConfig.tsx'


export const Pages = () => {
  const [data, setData] = useState(pages)
  const [initialValue, setInitialValue] = useState<IDateObject | null>(null)

  const handleSave = (value: IPage) => {
    setData((prevData: IPage[]) =>
      prevData.map(item =>
        item.id === initialValue!.id ? { ...initialValue!, ...value } : item
      )
    )
    setInitialValue(null)
  }

  return (
    <>
      <h1>Pages</h1>
      <Table data={data} columns={pagesColumnsConfig(setInitialValue)} />
      {initialValue && (
        <EditModal
          visible={!!initialValue}
          onCancel={() => setInitialValue(null)}
          onSave={handleSave}
          initialValue={initialValue}
        />
      )}
    </>
  )
}