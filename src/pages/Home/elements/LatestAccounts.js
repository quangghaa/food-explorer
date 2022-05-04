import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'antd';

import { useContentTypeList } from "../../../hooks/useContentType";
import { useNavigate } from 'react-router-dom';
import { formatTime, vndConverter } from '../../../utils/Utils';

const LatestAccounts = () => {
    const {
        contentTypeList: latestAcc,
        getListContentType
    } = useContentTypeList('accounts/recent');

    useEffect(() => {
        setInterval(() => {
            getListContentType()
        }, 3000);
    }, []);

    const onAllTransaction = () => {
        window.location.href = '/transactions';
    }

    return (
        <div className="latest-block">
            <div className="lb-title">Latest Accounts</div>
            <ul className="block-list">
                {latestAcc != undefined ?
                    latestAcc.map((acc, i) => {
                        return (
                            <li >
                                <Row>
                                    <Col span={6}>
                                        <div className="block-id">
                                            <span className="box-id">Ac</span>
                                            <span>
                                                <span className="id">{acc.Id}</span><br />
                                                <span className="time">{formatTime(acc.Createtime)}</span>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="block-owner">
                                            <span>Name <span className="owner">{acc.Name}<br /></span></span>
                                            <span>Status <span className="owner">{acc.Status}<br /></span></span>
                                        </div>
                                    </Col>
                                    <Col span={6}></Col>
                                    <Col span={6}>
                                        <div className="block-owner">
                                            <span>Balance <span className="owner">{acc.Balance}<br /></span></span>
                                        </div>
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

export default LatestAccounts;