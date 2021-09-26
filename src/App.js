import { Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchange, CryptoDetails, Cryptocurrency, News } from './components';

import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchange">
                                <Exchange />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrency />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
        
                <div className="footer">
                    <Typography.Title level={5} style={{ color:'white', textAlign:'center'}}>
                        Cryptoverse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchange">Exchange</Link>
                        <Link to="/news">news</Link>
                    </Space>
                </div>

            </div>
            
        </div>
    )
}

export default App
