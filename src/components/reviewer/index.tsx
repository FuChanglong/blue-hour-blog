import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import api from '../../api/api'

export const B = () => {
    const context = useContext(AppContext)
    return <div>这是B组件，名称是: {context.name}</div>
}

export const Reviewer = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/channels')
                console.log('raw response:', response)

                const resData = response.data
                console.log('接口数据:', resData)

                // 兼容不同接口返回格式
                const channels = resData?.data?.channels ?? resData?.channels ?? []
                setData(channels)

            } catch (error) {
                console.error('获取数据失败:', error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <button onClick={() => props.onmsg('这是来自Reviewer组件的消息')}>发送消息到父组件</button>
            {data.map(item =>
                <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                    <h4>{item.name}</h4>
                </div>
            )}
            <B />
        </div>
    )
}