import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'antd';

import { useContentTypeList } from "../../../hooks/useContentType";
import { useNavigate } from 'react-router-dom';

const LatestBlocks = () => {
    const {
        contentTypeList: latestBlocks,
        getListContentType
    } = useContentTypeList('blocks/recent');

    useEffect(() => {
        setInterval(() => {
            getListContentType()
        }, 10000);
    }, []);

    const navigate = useNavigate();
    const onAllBlock = () => {
        // navigate('/blocks');
        window.location.href = '/blocks';
    }

    return (
        <div className="latest-block">
            <div className="lb-title">Latest Blocks</div>
            <ul className="block-list">
                {latestBlocks != undefined ?
                    latestBlocks.map((block, i) => {
                        return (
                            <li >
                                <Row>
                                    <Col span={6}>
                                        <div className="block-id">
                                            <span className="box-id">Bk</span>
                                            <span>
                                                <span className="id">{block.blocknum}</span><br />
                                                <span className="time">{block.duration}</span>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="block-owner">
                                            <span>Hash <span className="owner">{block.datahash}</span></span><br />
                                            <span className="time"><span className="txns">{block.txcount} txns</span></span>
                                        </div>
                                    </Col>
                                    <Col span={6} className="center">
                                        <div className="price">{block.network_name}</div>
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
                <Button className="va-btn" onClick={onAllBlock}>
                    View all blocks
                </Button>
            </div>
        </div>
    )
}

export default LatestBlocks;