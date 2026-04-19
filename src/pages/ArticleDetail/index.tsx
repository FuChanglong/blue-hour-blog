import { Button, Card, Empty, Space, Tag, Typography } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { articles } from '@/data/articles'

const ArticleDetail = () => {
  const { id } = useParams()
  const article = articles.find((item) => item.id === id)

  if (!article) {
    return (
      <Empty description="没有找到这篇文章">
        <Link to="/articles">
          <Button type="primary">返回文章列表</Button>
        </Link>
      </Empty>
    )
  }

  return (
    <Card>
      <Space direction="vertical" size={18} style={{ width: '100%' }}>
        <Space wrap>
          <Tag color="blue">{article.category}</Tag>
          <Typography.Text type="secondary">{article.createdAt}</Typography.Text>
          <Typography.Text type="secondary">{article.readMinutes} 分钟阅读</Typography.Text>
        </Space>

        <Typography.Title level={1}>{article.title}</Typography.Title>
        <Typography.Paragraph className="article-summary">{article.summary}</Typography.Paragraph>
        <Typography.Paragraph>{article.content}</Typography.Paragraph>

        <Link to="/articles">
          <Button>返回文章列表</Button>
        </Link>
      </Space>
    </Card>
  )
}

export default ArticleDetail
