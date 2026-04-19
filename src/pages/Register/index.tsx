import { useEffect } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { registerApi } from '@/api/user'
import useUserStore from '@/store/useUserStore'

interface RegisterFormValues {
  mobile: string
  account: string
  password: string
  confirmPassword: string
}

const Register = () => {
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

  const onFinish = async ({ confirmPassword, ...values }: RegisterFormValues) => {
    void confirmPassword

    try {
      const userInfo = await registerApi(values)
      login(userInfo)
      message.success('注册成功')
      navigate(from, { replace: true })
    } catch (error) {
      console.error(error)
      message.error('注册失败，请稍后重试')
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
        label="账号"
        name="account"
        rules={[
          { required: true, message: '请输入账号' },
          { min: 4, max: 16, message: '账号长度应为 4-16 位' },
        ]}
      >
        <Input size="large" placeholder="请输入账号" />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 6, max: 20, message: '密码长度应为 6-20 位' },
        ]}
      >
        <Input.Password size="large" placeholder="请输入密码" />
      </Form.Item>

      <Form.Item
        label="确认密码"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: '请再次输入密码' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject(new Error('两次输入的密码不一致'))
            },
          }),
        ]}
      >
        <Input.Password size="large" placeholder="请再次输入密码" />
      </Form.Item>

      <Button type="primary" htmlType="submit" size="large" block>
        注册
      </Button>
    </Form>
  )
}

export default Register
