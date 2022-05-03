import React from "react";
import { QuestionCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { formatTime, vndConverter } from "../../utils/Utils";


const Detail = (props) => {
    const transaction = props.transaction;
    return (
        <>
            {transaction ? (

                <div className="detail-section">
                    <div className="detail-header">
                        <ul className="dh-list">
                            <li>Overview</li>
                        </ul>
                    </div>

                    <div className="detail-body">
                        <ul className="detail-list">
                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Transaction ID:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.transaction_id} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Transaction Hash:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.txhash} <CopyOutlined /></span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Sender ID:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.sender_id}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Receiver ID:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.receiver_id}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Trace No:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.trace_no}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Process Time:</span>
                                </div>
                                <div className="item-content">
                                    <span>{formatTime(transaction.working_date)}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Amount: </span>
                                </div>
                                <div className="item-content">
                                    <span>{vndConverter(transaction.amount)}</span>
                                     {/* <span className="vnd-unit">VND</span> */}
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Block Number:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.blocknum}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Network Name:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.network_name}</span>
                                </div>
                            </li>

                            <li>
                                <div className="item-title">
                                    <span><QuestionCircleOutlined /> Action:</span>
                                </div>
                                <div className="item-content">
                                    <span>{transaction.action}</span>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            ) : <>Can not display</>}

        </>
    )
}

export default Detail;