import { Card, List, Space, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { articles } from '@/data/articles'

const Articles = () => {
  return (
    <Space direction="vertical" size={20} style={{ width: '100%' }}>
      <div>
        <Typography.Title level={2}>文章列表</Typography.Title>
        <Typography.Text type="secondary">浏览所有已经整理好的博客文章。</Typography.Text>
      </div>

      <Card>
        <List
          itemLayout="vertical"
          dataSource={articles}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <span key="author">{item.author}</span>,
                <span key="time">{item.createdAt}</span>,
                <span key="read">{item.readMinutes} 分钟阅读</span>,
              ]}
            >
              <List.Item.Meta
                title={<Link to={`/articles/${item.id}`}>{item.title}</Link>}
                description={
                  <Space size={8}>
                    <Tag color="blue">{item.category}</Tag>
                    <Typography.Text type="secondary">{item.createdAt}</Typography.Text>
                  </Space>
                }
              />
              <Typography.Paragraph>{item.summary}</Typography.Paragraph>
            </List.Item>
          )}
        />
      </Card>
    </Space>
  )
}

export default Articles
