import { useEffect } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { loginApi } from '@/api/user'
import useUserStore from '@/store/useUserStore'

interface LoginFormValues {
  mobile: string
  code: string
}

const Login = () => {
  const userInfo = useUserStore((state) => state.userInfo)
  const login = useUserStore((state) => state.login)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (userInfo?.token) {
      navigate('/', { replace: true })
    }
  }, [navigate, userInfo])

  const onFinish = async (values: LoginFormValues) => {
    try {
      const userInfo = await loginApi(values)
      login(userInfo)
      message.success('登录成功')
      navigate(from, { replace: true })
    } catch (error) {
      console.error(error)
      message.error('登录失败，请检查手机号或验证码')
    }
  }

  return (
    <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
      <Form.Item
        label="手机号"
        name="mobile"
        rules={[
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
        ]}
      >
        <Input size="large" placeholder="请输入手机号" />
      </Form.Item>

      <Form.Item
        label="验证码"
        name="code"
        rules={[
          { required: true, message: '请输入验证码' },
          { len: 6, message: '验证码长度应为 6 位' },
        ]}
      >
        <Input size="large" placeholder="请输入验证码" />
      </Form.Item>

      <Button type="primary" htmlType="submit" size="large" block>
        登录
      </Button>
    </Form>
  )
}

export default Login
