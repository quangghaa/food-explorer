import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'antd';

import { useContentTypeList } from "../../../hooks/useContentType";
import { useNavigate } from 'react-router-dom';
import { vndConverter } from '../../../utils/Utils';

const LatestTransactions = () => {
    const {
        contentTypeList: latestTrans,
        getListContentType
    } = useContentTypeList('transactions/recent?limit=10');

    useEffect(() => {
        setInterval(() => {
            getListContentType()
        }, 3000);
    }, []);

    const onAllTransaction = () => {
        // clearInterval();
        // navigate('/transactions');
        window.location.href = '/transactions';
    }

    return (
        <div className="latest-block">
            <div className="lb-title">Latest Transactions</div>
            <ul className="block-list">
                {latestTrans != undefined ?
                    latestTrans.map((tran, i) => {
                        return (
                            <li >
                                <Row>
                                    <Col span={6}>
                                        <div className="block-id">
                                            <span className="box-id-tx">Tx</span>
                                            <span>
                                                <span className="id">{tran.txhash}</span><br />
                                                <span className="time">{tran.duration}</span>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="block-owner">
                                            <span>Sender <span className="owner">{tran.sender_id}<br /></span></span>
                                            <span className="debit">{tran.action}</span>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="block-owner">
                                            <span>Receiver <span className="owner">{tran.receiver_id}<br /></span></span>
                                        </div>
                                    </Col>
                                    <Col span={6} className="center">
                                        <div className="price">{vndConverter(tran.amount)}</div>
                                    </Col>
                                </Row>
                            </li>
                        )
                    })
                    : <div className="no-data-section">
                        No Data Found
                    </div>}
            </ul>
            <div className="view-all">
                <Button className="va-btn" onClick={onAllTransaction}>
                    View all transactions
                </Button>
            </div>
        </div>
    )
}

export default LatestTransactions;