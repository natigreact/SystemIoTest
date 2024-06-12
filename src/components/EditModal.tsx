import { useEffect } from 'react'
import { Modal, Form } from 'antd'
import { IDateObject } from '../types.ts'
import { transformDates } from '../helpers.ts'
import { formItemConfig } from '../config/formItemConfig.tsx'

interface Props<T> {
  visible: boolean
  onCancel: () => void
  onSave: (initialValue: T) => void
  initialValue: IDateObject
}


export const EditModal = <T extends object>({ visible, onCancel, onSave, initialValue }: Props<T>) => {
  const [form] = Form.useForm()

  useEffect(() => {
    const transformedValues = transformDates(initialValue)
    form.setFieldsValue(transformedValues)
  }, [initialValue, form])

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSave(values as T)
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  return (
    <Modal open={visible} onCancel={onCancel} onOk={handleOk} title='Edit Item'>
      <Form form={form} initialValues={initialValue}>
        {Object.keys(initialValue).map(key => formItemConfig[key])}
      </Form>
    </Modal>
  )
}