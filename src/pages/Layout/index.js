import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfo, clearUserInfo } from '@/store/modules/user'

import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'

import NavHeader from '@/components/NavHeader'

import './index.scss'

// const { Header, Sider } = Layout
const { Header, Content, Footer } = Layout

const items = [
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: '文章管理',
        key: '/article',
        icon: <DiffOutlined />,
    },
    {
        label: '创建文章',
        key: '/publish',
        icon: <EditOutlined />,
    },
]

const GeekLayout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const selectedkey = location.pathname

    // useEffect(() => {
    //     dispatch(fetchUserInfo())
    // }, [dispatch])

    const onMenuClick = (route) => {
        const path = route.key
        navigate(path)
    }

    // 退出登录确认回调
    const onConfirm = () => {
        console.log('确认退出')
        dispatch(clearUserInfo())
        navigate('/login')
    }

    const userInfo = useSelector((state) => state.user.userInfo)

    return (
        <Layout>

            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}>
                <NavHeader />
            </Header>

            <Content style={{ padding: '0 48px' }}>

                <div style={{ padding: 24, minHeight: 380, }}>
                    <Outlet />
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
            {/* <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{userInfo?.username}</span>
                    <span className="user-logout">
                        <Popconfirm onConfirm={onConfirm} title="是否确认退出？" okText="退出" cancelText="取消">
                            <LogoutOutlined /> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={selectedkey}
                        onClick={onMenuClick}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    <Outlet />
                </Layout>
            </Layout> */}
        </Layout>
    )
}
export default GeekLayout