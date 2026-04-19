import { Layout, Menu, Button, Typography, Space, theme } from 'antd'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import useUserStore from '@/store/useUserStore'

const { Header, Content, Footer } = Layout

const menuItems = [
  { key: '/', label: <NavLink to="/">概览</NavLink> },
  { key: '/articles', label: <NavLink to="/articles">文章</NavLink> },
  { key: '/write', label: <NavLink to="/write">写作</NavLink> },
  { key: '/about', label: <NavLink to="/about">关于</NavLink> },
]

const getSelectedKey = (pathname: string) => {
  if (pathname.startsWith('/articles')) {
    return '/articles'
  }

  return pathname
}

const Home = () => {
  const logout = useUserStore((state) => state.logout)
  const navigate = useNavigate()
  const location = useLocation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <Layout className="app-shell">
      <Header className="app-header">
        <NavLink to="/" className="brand">
          Blue Hour Blog
        </NavLink>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getSelectedKey(location.pathname)]}
          items={menuItems}
          className="top-menu"
        />
        <Button onClick={handleLogout}>退出登录</Button>
      </Header>

      <Content style={{ background: colorBgContainer }}>
        <div className="page-container">
          <Outlet />
        </div>
      </Content>

      <Footer className="app-footer">
        <Space direction="vertical" size={4}>
          <Typography.Text strong>Blue Hour Blog</Typography.Text>
          <Typography.Text type="secondary">记录技术、生活与创作的安静时刻</Typography.Text>
        </Space>
      </Footer>
    </Layout>
  )
}

export default Home
