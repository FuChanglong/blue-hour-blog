import { create } from 'zustand'

interface UserInfo {
  token: string
  refresh_token: string
}

interface UserState {
  userInfo: UserInfo | null
  login: (userInfo: UserInfo) => void
  logout: () => void
}

const storageKey = 'blue-hour-user'

const getInitialUser = () => {
  const rawUser = localStorage.getItem(storageKey)

  if (!rawUser) {
    return null
  }

  try {
    return JSON.parse(rawUser) as UserInfo
  } catch {
    localStorage.removeItem(storageKey)
    return null
  }
}

const useUserStore = create<UserState>((set) => ({
  userInfo: getInitialUser(),
  login: (userInfo) => {
    localStorage.setItem(storageKey, JSON.stringify(userInfo))
    set({ userInfo })
  },
  logout: () => {
    localStorage.removeItem(storageKey)
    set({ userInfo: null })
  },
}))

export default useUserStore
