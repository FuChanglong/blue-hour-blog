import { useState } from 'react'
import { Button, Card, Space, Typography } from 'antd'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

type AuthMode = 'login' | 'register'

const AuthHeader = () => {
  const [mode, setMode] = useState<AuthMode>('login')

  return (
    <div className="auth-page">
      <Card className="auth-card">
        <Space direction="vertical" size={20} style={{ width: '100%' }}>
          <div className="auth-header">
            <Space.Compact>
              <Button
                type={mode === 'login' ? 'primary' : 'default'}
                onClick={() => setMode('login')}
              >
                登录
              </Button>
              <Button
                type={mode === 'register' ? 'primary' : 'default'}
                onClick={() => setMode('register')}
              >
                注册
              </Button>
            </Space.Compact>

            <Typography.Title level={2} style={{ margin: '20px 0 8px' }}>
              {mode === 'login' ? '欢迎回来' : '创建账号'}
            </Typography.Title>
            <Typography.Text type="secondary">
              {mode === 'login'
                ? '登录 Blue Hour Blog，继续你的创作与记录'
                : '注册账号，开始你的创作之旅'}
            </Typography.Text>
          </div>

          {mode === 'login' ? <Login /> : <Register />}
        </Space>
      </Card>
    </div>
  )
}

export default AuthHeader
