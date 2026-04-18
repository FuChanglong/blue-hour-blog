import './App.css'
import { Reviewer } from './components/reviewer'
import { AppContext } from './AppContext'
// 用我们封装好的带类型钩子！
import { useAppSelector, useAppDispatch } from './store/hooks'
import { setName } from './store/modules/userSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function App() {
  const getmsg = (msg: string) => { console.log(msg) }
  const navigate = useNavigate()

  // ✅ 不报错了！
  const { name, age } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  return (
    <AppContext.Provider value={{ name: 'App组件提供的值' }}>
      <Reviewer onmsg={getmsg} />
      <div>
        <Link to="/login">去登录页</Link>
        <Link to="/artical">去文章页</Link>
        <h1>{name}</h1>
        <button onClick={() => navigate('/login?id=1&name=zhangsan')}>去登录页
        </button>
        <button onClick={() => navigate('/login/1111')}>去登录页2
        </button>
      </div>
    </AppContext.Provider>
  )
}