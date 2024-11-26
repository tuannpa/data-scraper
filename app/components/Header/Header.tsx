'use client'

import { Typography, Layout, Menu, Row, Col } from 'antd';
import Link from 'next/link';

import styles from './Header.module.scss';

const { Title } = Typography;
const { Header } = Layout;

const menuItems = [
    {
        key: 1,
        label: 'Home',
    }
];

export const AppHeader = () => {
    return (
        <Header>
            <Row className={styles.header}>
                <Col span={6}>
                    <Title level={3} className={styles.title}>
                        <Link href="/" style={{ color: 'white' }}>
                            Wikipedia Graph Tool
                        </Link>
                    </Title>
                </Col>
                <Col span={4} offset={14}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={menuItems}
                        style={styles.menu}
                    />
                </Col>
            </Row>
        </Header>
    );
}