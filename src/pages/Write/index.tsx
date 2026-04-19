import { Button, Card, Form, Input, Select, Space, Typography, message } from 'antd'

interface ArticleFormValues {
  title: string
  category: string
  summary: string
  content: string
}

const Write = () => {
  const onFinish = (values: ArticleFormValues) => {
    console.log(values)
    message.success('文章草稿已在控制台输出，后续可接入发布接口')
  }

  return (
    <Space direction="vertical" size={20} style={{ width: '100%' }}>
      <div>
        <Typography.Title level={2}>写一篇博客</Typography.Title>
        <Typography.Text type="secondary">先保留本地草稿表单，等文章接口确定后可以直接接入。</Typography.Text>
      </div>

      <Card>
        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入文章标题' }]}>
            <Input size="large" placeholder="给你的文章起一个清楚的标题" />
          </Form.Item>

          <Form.Item label="分类" name="category" rules={[{ required: true, message: '请选择分类' }]}>
            <Select
              size="large"
              placeholder="选择分类"
              options={[
                { label: '前端', value: '前端' },
                { label: '随笔', value: '随笔' },
                { label: '设计', value: '设计' },
              ]}
            />
          </Form.Item>

          <Form.Item label="摘要" name="summary" rules={[{ required: true, message: '请输入摘要' }]}>
            <Input.TextArea rows={3} placeholder="用一两句话概括文章内容" />
          </Form.Item>

          <Form.Item label="正文" name="content" rules={[{ required: true, message: '请输入正文' }]}>
            <Input.TextArea rows={10} placeholder="开始写作..." />
          </Form.Item>

          <Button type="primary" htmlType="submit" size="large">
            保存草稿
          </Button>
        </Form>
      </Card>
    </Space>
  )
}

export default Write
