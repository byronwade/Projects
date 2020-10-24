import React from 'react';
import styled from 'styled-components';
import ToolBar from './Toolbar'
import Header from './Header'
import { Menu, Dropdown, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Main = styled.div`
    height: calc(100% - 32px - 60px);
    margin-top: 31px;
    overflow-y: auto;
    .side-cont {
      display:flex;
      height:calc(100% - 80px);
    }
`;

const Sidebar = styled.div`
    display: flex;
    padding: 20px;
    background: #262627;
    width:300px;
    height:100%;
`;

const Content = styled.div`
    display: flex;
    padding: 20px;
`;

const Footer = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    height:60px;
    background: #252526;
    padding: 20px;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

function Home() {

  return (
      <>
          <ToolBar />
          <Main>
            <Header />
            <div className="side-cont">
              <Sidebar>
                sidebar
              </Sidebar>
              <Content>
                wqwdwqdqwedwqedwqedwqedqwed
              </Content>
            </div>
            <Footer>
              <Dropdown overlay={menu} placement="topLeft" trigger={['click']}>
                <Button type="primary" onClick={e => e.preventDefault()}>Add Project</Button>
              </Dropdown>
              <a href="https://www.byronwade.com" target="_blank" type="link">Byron Wades Web Development</a>
            </Footer>
          </Main>
      </>
  );
}

export default Home;
