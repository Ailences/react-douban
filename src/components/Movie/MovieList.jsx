import React from 'react'

import { Spin, Card, Rate, Pagination } from 'antd';
const { Meta } = Card;

// 导入 movielist 样式表文件
import cssobj from '@/css/movielist.less'
export default class MovieList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            mtype: props.match.params.type,
            nowPage: props.match.params.page,
            movielist: [],
            isloading: true,
            pageSize: 12,
            total: 0
        }
    }
    render() {
        // console.log(this.props.match)
        return <div>
            {
                this.state.isloading ? <div style={{ textAlign: 'center', marginTop: '20px' }}><Spin size="large" /></div> : <div>
                    <div className={cssobj.mlist} style={{ height: '100%', backgroundColor: '#fff' }}>
                        {
                            this.state.movielist.map(item => <Card key={item.id}
                                hoverable
                                style={{ width: 240 }}
                                className={cssobj.mitem}
                                cover={<img alt="example" src={item.images.small} />}
                            >
                                <Meta
                                    title={item.title}
                                />
                                <p>
                                    电影类型：{item.genres.join('，')}
                                </p>
                                <Rate disabled defaultValue={item.rating.average / 2} />
                            </Card>)
                        }
                        <Pagination
                            style={{ margin: '10px 0 20px 20px' }}
                            defaultCurrent={parseInt(this.state.nowPage)}
                            total={this.state.total}
                            defaultPageSize={this.state.pageSize} />
                    </div>
                </div>

            }

        </div>
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        this.setState({
            mtype: nextProps.match.params.type,
            noePage: nextProps.match.params.page,
            isloading: true
        }, function () {
            setTimeout(() => { this.getMovieList() }, 1000)
        })
    }
    componentWillMount() {
        setTimeout(() => {
            this.getMovieList()
        }, 1000)
    }

    getMovieList = async () => {
        const start = (this.state.nowPage - 1) * this.state.pageSize
        const res = await this.$http(this.baseURL + '/v2/movie/' + this.state.mtype + '?start=' + start + '&count=' + this.state.pageSize)
        const data = await res.json()
        console.log(data)
        this.setState({
            movielist: data.subjects,
            isloading: false,
            total: data.total
        })
    }
}