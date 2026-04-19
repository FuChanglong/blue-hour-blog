import request from './request'

export interface LoginParams {
  mobile: string
  code: string
}

export interface RegisterParams {
  mobile: string
  account: string
  password: string
}

interface AuthResponse {
  message: string
  data: {
    token: string
    refresh_token: string
  }
}

export type AuthData = AuthResponse['data']

export const loginApi = async (data: LoginParams): Promise<AuthData> => {
  const res = await request<AuthResponse>({
    url: '/authorizations',
    method: 'POST',
    data,
  })

  return res.data.data
}

export const registerApi = async (data: RegisterParams): Promise<AuthData> => {
  const res = await request<AuthResponse>({
    url: '/authorizations',
    method: 'POST',
    data,
  })

  return res.data.data
}
