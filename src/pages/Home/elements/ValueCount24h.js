import React, {useEffect} from "react";
import { TransactionOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";
import { vndConverter } from "../../../utils/Utils";

const ValueCount24h = () => {
    const {
        contentTypeTotal: totalValue, 
        getContentType
    } = useContentTypeGetTotal('amount/daily?date=today');

    useEffect(() => {
        setInterval(() => {
            getContentType()
        }, 3000);
        
      }, []);

    return (
        <>
            <div className="block">
                <span className="block-icon">
                    <TransactionOutlined />
                </span>
                <span className="block-info">
                    <span className="info-title">24h Value</span><br />
                    <span className="info-content">{vndConverter(totalValue)} <span className="info-unit">VND</span></span>
                </span>
            </div>
        </>
    )
}

export default ValueCount24h
