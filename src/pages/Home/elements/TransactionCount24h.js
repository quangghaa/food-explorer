import React, {useEffect} from "react";
import { TransactionOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";

const TransactionCount24h = () => {
    const {
        contentTypeTotal: totalTrans, 
        getContentType
    } = useContentTypeGetTotal('transaction/total/daily?date=today');

    useEffect(() => {
        let id = setInterval(() => {
            getContentType()
        }, 3000);
        return () => clearInterval(id);
      }, []);

    return (
        <>
            <div className="block">
                <span className="block-icon">
                    <TransactionOutlined />
                </span>
                <span className="block-info">
                    <span className="info-title">24h Transaction</span><br />
                    <span className="info-content">{totalTrans} <span className="info-unit">transactions</span></span>
                </span>
            </div>
        </>
    )
}

export default TransactionCount24h
