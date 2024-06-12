import { Button } from 'antd'
import { IDateObject } from '../types.ts'


export const productsColumnsConfig = (setInitialValue: (value: IDateObject | null) => void) => [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Size', dataIndex: ['options', 'size'], key: 'size' },
  { title: 'Amount', dataIndex: ['options', 'amount'], key: 'amount' },
  { title: 'Status', dataIndex: 'active', key: 'active', render: (text: boolean) => (text ? 'Active' : 'Inactive') },
  { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'action', render: (_text: string, record: IDateObject) => (
      <Button onClick={() => setInitialValue(record)}>Edit</Button>
    )
  }
]