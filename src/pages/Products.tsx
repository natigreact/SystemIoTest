import { useState } from 'react'
import { products } from '../data'
import { Table } from '../components/Table'
import { EditModal } from '../components/EditModal'
import { IDateObject, IProduct } from '../types'
import { productsColumnsConfig } from '../config/productsColumnsConfig.tsx'


export const Products = () => {
  const [data, setData] = useState(products)
  const [initialValue, setInitialValue] = useState<IDateObject | null>(null)

  const handleSave = (value: IProduct) => {
    setData((prevData: IProduct[]) =>
      prevData.map(item =>
        item.id === initialValue!.id ? { ...initialValue!, ...value } : item
      )
    )
    setInitialValue(null)
  }

  return (
    <>
      <h1>Products</h1>
      <Table data={data} columns={productsColumnsConfig(setInitialValue)} />
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