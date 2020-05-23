import React from 'react'
import { Card, Carousel } from 'antd'

import './index.less'


class Carousels extends React.Component {


    render() {
        return (
            <div className="home-wrap">
                <Card title="文字背景轮播" className="card-wrap">
                    {/* 需要在index.less中设置默认样式 */}
                    <Carousel autoplay>
                        <div><h3>Text AAA 1111</h3></div>
                        <div><h3>Text BBB 2222</h3></div>
                        <div><h3>Text CCC 3333</h3></div>
                    </Carousel>
                </Card>

                <Card title="图片背景轮播" className="card-wrap" className="slider-img">
                    <Carousel autoplay>
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>            
        )
    }
}

export default Carousels