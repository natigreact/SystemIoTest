import { Button } from 'antd'
import { IDateObject } from '../types.ts'


export const pricePlansColumnsConfig = (setInitialValue: (value: IDateObject | null) => void) => [
  { title: 'Description', dataIndex: 'description', key: 'description' },
  { title: 'Status', dataIndex: 'active', key: 'active', render: (text: boolean) => (text ? 'Active' : 'Inactive') },
  { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Removed At', dataIndex: 'removedAt', key: 'removedAt' },
  { title: 'Action', key: 'action', render: (_: string, record: IDateObject) => (
      <Button onClick={() => setInitialValue(record)}>Edit</Button>
    )
  }
]
