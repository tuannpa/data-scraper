'use client'

import { Flex, Layout } from 'antd';
const { Content } = Layout;

import { AppHeader } from './components/Header/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Flex gap="middle" wrap>
                    <Layout>
                        <AppHeader />
                        <Content style={{ minHeight: '100vh' }}>
                            <div>
                                {children}
                            </div>
                        </Content>
                    </Layout>
                </Flex>
            </body>
        </html>
    )
}

export default MainLayout;