import { Card, Space, Typography } from 'antd'

const About = () => {
  return (
    <Card>
      <Space direction="vertical" size={16}>
        <Typography.Title level={2}>关于 Blue Hour Blog</Typography.Title>
        <Typography.Paragraph>
          这是一个使用 React、React Router、Zustand 和 Ant Design 重构的博客网站。认证接口沿用当前的
          `/authorizations` 协议，登录成功后会把 token 写入本地状态和 localStorage。
        </Typography.Paragraph>
        <Typography.Paragraph>
          当前文章数据先使用本地 mock，便于你继续搭页面。后续只需要新增文章接口层，再把列表、详情和写作页接到真实服务即可。
        </Typography.Paragraph>
      </Space>
    </Card>
  )
}

export default About
