import React, {useEffect} from "react";
import { FileDoneOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";
import { vndConverter } from "../../../utils/Utils";

const CertificateCount = () => {
    const {
        contentTypeTotal: totalCer, 
        getContentType
    } = useContentTypeGetTotal('certificate/total');

    useEffect(() => {
        setInterval(() => {
            getContentType()
        }, 3000);
        
      }, []);

    return (
        <>
            <div className="block">
                <span className="block-icon">
                    <FileDoneOutlined />
                </span>
                <span className="block-info">
                    <span className="info-title">Certificate</span><br />
                    <span className="info-content">{totalCer} <span className="info-unit">certificates</span></span>
                </span>
            </div>
        </>
    )
}

export default CertificateCount
