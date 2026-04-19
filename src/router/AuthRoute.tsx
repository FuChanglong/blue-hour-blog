import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useUserStore from '@/store/useUserStore'

interface AuthRouteProps {
  children: ReactNode
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const userInfo = useUserStore((state) => state.userInfo)
  const location = useLocation()

  if (!userInfo?.token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

export default AuthRoute
