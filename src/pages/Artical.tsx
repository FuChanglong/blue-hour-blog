
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Artical = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>文章页面</h1>
      <p>这是文章内容</p>
      <button onClick={() => navigate('/artical')}>查看详情</button>
      {/* <Link to="/artical/details">查看详情</Link> */}

      <button onClick={() => navigate('/artical/edit')}>编辑文字</button>
      <Outlet />
    </div>

  )
}

export default Artical