import { Card, Col, Row, Statistic, Typography, List, Tag, Space } from 'antd'
import { Link } from 'react-router-dom'
import { articles } from '@/data/articles'

const BlogOverview = () => {
  const latestArticle = articles[0]

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <section className="hero-section">
        <Typography.Title level={1}>把想法写成可以回看的文章</Typography.Title>
        <Typography.Paragraph>
          一个基于 Zustand、Ant Design 和当前认证接口协议重构的博客前端。你可以继续接真实文章接口，也可以先用它组织页面和交互。
        </Typography.Paragraph>
      </section>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="文章数量" value={articles.length} suffix="篇" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="分类数量" value={new Set(articles.map((item) => item.category)).size} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="最近更新" value={latestArticle.createdAt} />
          </Card>
        </Col>
      </Row>

      <Card title="最新文章">
        <List
          dataSource={articles.slice(0, 3)}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link key="read" to={`/articles/${item.id}`}>
                  阅读
                </Link>,
              ]}
            >
              <List.Item.Meta
                title={<Link to={`/articles/${item.id}`}>{item.title}</Link>}
                description={item.summary}
              />
              <Tag>{item.category}</Tag>
            </List.Item>
          )}
        />
      </Card>
    </Space>
  )
}

export default BlogOverview
