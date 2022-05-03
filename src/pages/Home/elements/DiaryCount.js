import React, {useEffect} from "react";
import { TransactionOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";
import { vndConverter } from "../../../utils/Utils";

const DiaryCount = () => {
    const {
        contentTypeTotal: totalValue, 
        getContentType
    } = useContentTypeGetTotal('balance/total');


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
                    <span className="info-title">Diary</span><br />
                    <span className="info-content">{vndConverter(totalValue)}</span>
                </span>
            </div>
        </>
    )
}

export default DiaryCount
