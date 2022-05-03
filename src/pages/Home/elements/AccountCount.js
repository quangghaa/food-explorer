import React, { useEffect } from "react";
import { UserOutlined } from '@ant-design/icons';

import { useContentTypeGetTotal } from "../../../hooks/useContentType";

const AccountCount = () => {
    const {
        contentTypeTotal: totalAccounts,
        getContentType
    } = useContentTypeGetTotal('account/total');

    useEffect(() => {
        setInterval(() => {
            getContentType()
        }, 10000);
    }, []);

    return (
        <>
            <div className="block">
                <span className="block-icon">
                    <UserOutlined />
                </span>
                <span className="block-info">
                    <span className="info-title">Account</span><br />
                    <span className="info-content">{totalAccounts} <span className="info-unit">users</span></span>
                </span>
            </div>
        </>
    )
}

export default AccountCount;
