import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/card';


import {
  UserOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  MailOutlined 
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

//navigation hamburger menu, gets states from App.js as porps
function Navigation(props){
    
    const {
        setResumeSelected,
        setPortSelected,
        setCodeSelected
        } = props;

        const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    return (
      <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
          marginTop: 20
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" 
        onClick={()=>{ setCodeSelected(false);setResumeSelected(false);setPortSelected(false)}}>
          <UserOutlined />
          <span >Professional Self-Assessment</span>
        </Menu.Item>

        <Menu.Item key="2" 
        onClick={()=>{ setCodeSelected(true);setResumeSelected(false);setPortSelected(false)}}>
          <DesktopOutlined />
          <span >Code Review</span>
        </Menu.Item>

        <Menu.Item key="3" 
        onClick={()=>{ setCodeSelected(false);setResumeSelected(false);setPortSelected(true)}}>
          <DesktopOutlined />
          <span >Portfolio</span>
        </Menu.Item>

        <Menu.Item key="4" 
        onClick={()=>{ setCodeSelected(false);setResumeSelected(true);setPortSelected(false)}}>
          <ContainerOutlined />
          <span >Resume</span>
        </Menu.Item>

        <Menu.Item key="5" 
        onClick={handleShow}>
          <MailOutlined  />
          <span >Contact Me</span>
        </Menu.Item>
      </Menu>

      <Modal className='cards' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Have a question?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Let's get to know each other. How can I be useful to your service?
          Please feel free to reach out to me. I would be delighted to answer all your questions or concerns.</Modal.Body>
        <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
        }}>
            <Card.Link className="links" href="mailto: hasanlinkhon@gmail.com" centered>Email</Card.Link>
            <Card.Link className="links" href="https://www.linkedin.com/in/likhonhasan312/"  centered target="_blank" rel="noreferrer">LinkedIn</Card.Link>
        </Modal.Footer>
      </Modal>
    </div>
    );
}

export default  Navigation;

