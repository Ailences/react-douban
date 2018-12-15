import React from 'react'

import {
    Layout, Menu
} from 'antd';
const { Header, Content, Sider } = Layout;

// 导入 路由组件
import { Route, Link, Redirect } from 'react-router-dom'

// 导入 路由对应的组件
import MovieList from '@/components/movie/MovieList'

export default class MovieContainer extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return <Layout style={{ height: '100%' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[location.hash.split('/')[2] || 'in_theaters']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="in_theaters">
                        <Link to="/movie/in_theaters/1">正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="coming_soon">
                        <Link to='/movie/coming_soon/1'>即将上线</Link>
                    </Menu.Item>
                    <Menu.Item key="top250">
                        <Link to="/movie/top250/1">Top250</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: '1px', height: '100%' }}>
                <Content style={{
                    background: '#fff', margin: 0, minHeight: 280,
                }}
                >
                    <Route exact path="/movie" render={() => <Redirect to='/movie/in_theaters/1' />} />
                    <Route exact path='/movie/:type/:page' component={MovieList} />
                </Content>
            </Layout>
        </Layout>
    }
}