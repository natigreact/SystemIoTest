import { Button } from 'antd'
import { IDateObject } from '../types.ts'


export const pagesColumnsConfig = (setInitialValue: (value: IDateObject | null) => void) => [
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Status', dataIndex: 'active', key: 'active', render: (text: boolean) => (text ? 'Active' : 'Inactive') },
  { title: 'Updated At', dataIndex: 'updatedAt', key: 'updatedAtAt' },
  { title: 'Published At', dataIndex: 'publishedAt', key: 'publishedAt' },
  { title: 'Action', key: 'action', render: (_text: string, record: IDateObject) => (
      <Button onClick={() => setInitialValue(record)}>Edit</Button>
    )
  }
]