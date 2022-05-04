import React, {useEffect} from "react";
import { BlockOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";

const BlockCount = () => {
    const {
        contentTypeTotal: totalBlocks, 
        getContentType
    } = useContentTypeGetTotal('block/total');


    useEffect(() => {
        setInterval(() => {
            getContentType()
        }, 10000);
      }, []);

    return (
        <>
            <div className="block">
                <span className="block-icon">
                    <BlockOutlined />
                </span>
                <span className="block-info">
                    <span className="info-title">Block</span><br />
                    <span className="info-content">{totalBlocks} <span className="info-unit">blocks</span></span>
                </span>
            </div>
        </>
    )
}

export default BlockCount
