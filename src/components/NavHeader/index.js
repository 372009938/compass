
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const NavHeader = props => {

    return (
        <div className="head light">
            <div

                className="main"
            >
                <div className="left wide">
                    <div className='logo' key="logo" id="logo">
                        <Link to="/">
                            <img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} alt="logo" />
                            <h1>Ant Design Pro</h1>
                        </Link>
                    </div>
                    <div
                        style={{
                            // maxWidth,
                        }}
                    >

                        {/* <BaseMenu {...this.props} style={{ border: 'none', height: 64 }} /> */}
                    </div>
                </div>
                {/* <RightContent {...this.props} /> */}
            </div>
        </div >
    )
}

export default NavHeader
