import React from 'react'

// 按需导入 布局相关 组件
import {
    Layout,
    Menu,
    Breadcrumb
} from 'antd';

const {
    Header,
    Content,
    Footer
} = Layout;

// 导入路由相关组件 和 页面
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'

import HomeContainer from '@/components/Home/HomeContainer'
import MovieContainer from '@/components/Movie/MovieContainer'
import AboutContainer from '@/components/About/AboutContainer'


// 导入样式表文件
import cssObj from '@/css/app.less'
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        // console.log(location.hash.split('/')[1])
        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>
                {/* 头部区域 */}
                <Header style={{ backgroundColor: '#48d1cc' }}>
                    <div className={cssObj.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[location.hash.split('/')[1] || 'home']}
                        style={{ lineHeight: '64px', backgroundColor: '#48d1cc' }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">首 页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie">电 影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关 于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                {/* 中间内容区域 */}
                <Content style={{ padding: '0', height: '100%', backgroundColor: '#fff' }}>
                    <Route exact path='/' render={() => <Redirect to='/home' />} />
                    <Route path='/home' component={HomeContainer} />
                    <Route path='/movie' component={MovieContainer} />
                    <Route path='/about' component={AboutContainer} />

                </Content>

                {/* 底部区域 */}
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </HashRouter>
    }
}