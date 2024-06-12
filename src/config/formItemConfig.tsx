import React from 'react'
import { Form, Input, InputNumber, Switch } from 'antd'


export const formItemConfig: Record<string, React.ReactNode> = {
  name: (
    <Form.Item key='name' name='name' label='Name' rules={[{ required: true, message: 'Please input the name!' }]}>
      <Input />
    </Form.Item>
  ),
  title: (
    <Form.Item
      key='title'
      name='title'
      label='Title'
      rules={[{ required: true, message: 'Please input the title!' }]}
    >
      <Input />
    </Form.Item>
  ),
  description: (
    <Form.Item
      key='description'
      name='description'
      label='Description'
      rules={[{ required: true, message: 'Please input the description!' }]}
    >
      <Input />
    </Form.Item>
  ),
  active: (
    <Form.Item key='active' name='active' label='Active' valuePropName='checked'>
      <Switch />
    </Form.Item>
  ),
  createdAt: (
    <Form.Item
      key='createdAt'
      name='createdAt'
      label='Created At'
      rules={[{ required: true, message: 'Please input the creation date!' }]}
    >
      <Input />
    </Form.Item>
  ),
  updatedAt: (
    <Form.Item
      key='updatedAt'
      name='updatedAt'
      label='Updated At'
      rules={[{ required: true, message: 'Please input the update date!' }]}
    >
      <Input />
    </Form.Item>
  ),
  publishedAt: (
    <Form.Item
      key='publishedAt'
      name='publishedAt'
      label='Published At'
      rules={[{ required: true, message: 'Please input the publication date!' }]}
    >
      <Input />
    </Form.Item>
  ),
  removedAt: (
    <Form.Item
      key='removedAt'
      name='removedAt'
      label='Removed At'
      rules={[{ required: true, message: 'Please input the removal date!' }]}
    >
      <Input />
    </Form.Item>
  ),
  options: (
    <React.Fragment key='options'>
      <Form.Item
        key='size'
        name={['options', 'size']}
        label='Size'
        rules={[{ required: true, message: 'Please input the size!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        key='amount'
        name={['options', 'amount']}
        label='Amount'
        rules={[{ required: true, message: 'Please input the amount!' }]}
      >
        <InputNumber />
      </Form.Item>
    </React.Fragment>
  )
}