import { useParams } from 'react-router-dom'
export const Login = () => {
    const params = useParams()
    console.log(params.id);
    return (
        <div>
            <h1>登录页面</h1>
            <p>请输入用户名和密码</p>
            <p>{params.id}</p>
        </div>
    )
}

// export default Login