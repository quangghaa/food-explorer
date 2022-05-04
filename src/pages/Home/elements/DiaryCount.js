import React, {useEffect} from "react";
import { TransactionOutlined, ReadOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";
import { vndConverter } from "../../../utils/Utils";

const DiaryCount = () => {
    const {
        contentTypeTotal: totalDia, 
        getContentType
    } = useContentTypeGetTotal('diary/total');


    useEffect(() => {
        setInterval(() => {
            getContentType()
        }, 3000);
        
      }, []);

    return (
        <>
            <div className="block">
                <span className="block-icon">
                    <ReadOutlined />
                </span>
                <span className="block-info">
                    <span className="info-title">Diary</span><br />
                    <span className="info-content">{totalDia} <span className="info-unit">diaries</span></span>
                </span>
            </div>
        </>
    )
}

export default DiaryCount
