import React from "react";

import { DownOutlined } from '@ant-design/icons';
import './style.css';
import { Menu, Dropdown } from 'antd';
import { Link } from "react-router-dom";



const Navigation = () => {
    const toHome = () => {
        window.location.href = '/';
    }

    const toAccounts = () => {
        window.location.href = '/accounts';
    }

    const toBlocks = () => {
        window.location.href = '/blocks';
    }

    const toTransactions = () => {
        window.location.href = '/transactions';
    }

    const toDiaries = () => {
        window.location.href = '/diaries';
    }

    const toCertificates = () => {
        window.location.href = '/certificates';
    }

    const menu = (
        <Menu>
            <Menu.Item onClick={toAccounts}>
                {/* <Link to='/accounts'> */}
                    Accounts
                {/* </Link> */}
            </Menu.Item>
            <Menu.Item onClick={toBlocks}>
                {/* <Link to='/blocks'> */}
                    Blocks
                {/* </Link> */}
            </Menu.Item>
            <Menu.Item onClick={toTransactions}>
                {/* <Link to='/transactions'> */}
                    Transactions
                {/* </Link> */}
            </Menu.Item>
            <Menu.Item onClick={toDiaries}>
                {/* <Link to='/transactions'> */}
                    Diaries
                {/* </Link> */}
            </Menu.Item>
            <Menu.Item onClick={toCertificates}>
                {/* <Link to='/transactions'> */}
                    Certificates
                {/* </Link> */}
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <ul className="nav">
                {/* <Link to='/'> */}
                    <li onClick={toHome}>Home</li>
                {/* </Link> */}
                <li>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            VN Trust Food &nbsp;<DownOutlined />
                        </a>
                    </Dropdown>
                </li>

            </ul>
        </>
    )
}

export default Navigation;