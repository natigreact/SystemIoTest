import { useState } from 'react'
import { pricePlans } from '../data'
import { Table } from '../components/Table'
import { EditModal } from '../components/EditModal'
import { IDateObject, IPricePlan } from '../types.ts'
import { pricePlansColumnsConfig } from '../config/pricePlansColumnsConfig.tsx'


export const PricePlans = () => {
  const [data, setData] = useState(pricePlans)
  const [initialValue, setInitialValue] = useState<IDateObject | null>(null)

  const handleSave = (value: IPricePlan) => {
    setData((prevData: IPricePlan[]) =>
      prevData.map(item =>
        item.id === initialValue!.id ? { ...initialValue!, ...value } : item
      )
    )
    setInitialValue(null)
  }

  return (
    <>
      <h1>Price Plans</h1>
      <Table data={data} columns={pricePlansColumnsConfig(setInitialValue)} />
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