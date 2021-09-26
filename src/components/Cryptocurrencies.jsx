import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Input } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'


const Cryptocurrencies = ({ simplified }) => {

    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const sign = cryptosList?.data?.base?.sign
    const symbol = cryptosList?.data?.base?.symbol

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => {
            return coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if (isFetching)
        return <Loader />

    return (
        <>
            {
                !simplified && (
                    <div className="search-crypto">
                        <Input placeholder="Search Cryptocurrency"
                            onChange={(e) => setSearchTerm(e.target.value)} />

                    </div>
                )
            }

            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    cryptos?.map((currency) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                            <Link to={`/crypto/${currency.id}`}>
                                <Card title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
                                    hoverable
                                    style={{ height: 250 }}>
                                    <p>Price ({symbol}): {sign} {millify(currency.price)}</p>
                                    <p>Market Cap ({symbol}): {sign} {millify(currency.marketCap)}</p>
                                    <p>Daily Change: {millify(currency.change)} % </p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }

            </Row>
        </>

    )
}

export default Cryptocurrencies
