import React, { useEffect, useState } from "react";
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer';
import SearchTool from "../../components/SearchTool";
import { Row, Col, Button } from 'antd';
import { DollarCircleFilled, UserOutlined, BlockOutlined, TransactionOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal, useContentTypeList } from "../../hooks/useContentType";
import { useNavigate } from 'react-router-dom';
import { vndConverter } from "../../utils/Utils";
import TransactionCount from "./elements/TransactionCount";
import BlockCount from "./elements/BlockCount";
import AccountCount from "./elements/AccountCount";
import DiaryCount from "./elements/DiaryCount";
import LatestBlocks from "./elements/LatestBlocks";
import LatestTransactions from "./elements/LatestTransactions";
import CertificateCount from "./elements/CertificateCount";
import TransactionCount24h from "./elements/TransactionCount24h";
import AccountsChart from "../../components/Charts/AccountsChart";
import TransactionsChart from "../../components/Charts/TransactionsChart";

const Home = () => {
      
    return (
        <>
            <HomeHeader />

            <div className="search-section">
                <div className="container">
                    <h3>The Blockchain Explorer</h3>
                    <SearchTool />
                    <br />
                    <span className="sponsored">Sponsored: <DollarCircleFilled /> Vnpay: Crypto Taxes Done in Minutes! <a href="#">Calculate My Taxes.</a></span>
                </div>
            </div>

            <div className="container">
                <div className="overview">
                    <Row>
                        <Col span={8}>
                            <div className="vertical-hr">
                                <AccountCount />
                                <hr />
                                <BlockCount />
                            </div>

                        </Col>
                        <Col span={8}>
                            <div className="vertical-hr">
                                <TransactionCount />
                                <hr />
                                <DiaryCount />
                            </div>

                        </Col>
                        <Col span={8}>
                            <div className="">
                                <CertificateCount />

                                <hr />
                            </div>

                        </Col>
                    </Row>
                </div>

                {/* <Row gutter={16} className="daily-chart-section">
                    <Col span={12}>
                        <AccountsChart />
                    </Col>

                    <Col span={12}>
                        <TransactionsChart />
                    </Col>
                </Row> */}

                <Row gutter={16} className="latest-section">
                    <Col span={12}>
                        <LatestBlocks />
                    </Col>
                    <Col span={12}>
                        <LatestTransactions />
                    </Col>
                </Row>

            </div>

            <Footer />
        </>
    )
}

export default Home;