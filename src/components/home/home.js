import React, { useState } from "react";
import { Layout } from 'antd';
import { Menu, Image } from 'semantic-ui-react';
import mylogo from "../../resources/test.jpg"

const { Header, Footer, Content } = Layout;

export const Home = () => {

    const [activeItem, setActiveItem] = useState(0);
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }

    const menus = [
        { name: "Equipments" },
        { name: "Equipment Owners" },
        { name: "Register Equipment" },
        { name: "Written Off" },
        { name: "Check Out" },
    ]
    const renderMenus = (item, index) => {
        return (
            <Menu.Item
                key={index}
                name={item.name}
                active={activeItem === item.name}
                onClick={handleItemClick}
            />
        )
    }

    return (
        <Layout style={{ height: "100vh" }}>
            <Header>
                <div>
                    <Menu >
                        {menus.map(renderMenus)}

                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
                </div>
            </Header>

            <Content style={{ padding: '0 10px  ', }}>

                <div className="site-layout-content">
                    <Image centered src={mylogo} />
                </div>
            </Content>
            <Footer >Copyrite @MWT 2021</Footer>
        </Layout>

    )
}
