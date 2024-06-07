"use client";
import React from "react";
import {
  CloudOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import NavLink from "@/components/NavLink";
import { LogoCustom } from "@/styles/Avatar";
import { Avatar } from "antd";
const menuItems = [
  {
    icon: UserOutlined,
    label: <NavLink href="/dashboard/user">User</NavLink>,
  },
  {
    icon: OrderedListOutlined,
    label: <NavLink href="/dashboard/deadline">Deadline</NavLink>,
  },
  {
    icon: TeamOutlined,
    label: <NavLink href="/dashboard/friends">Friends</NavLink>,
  },
  {
    icon: VideoCameraOutlined,
    label: <NavLink href="/dashboard/meeting">Meeting</NavLink>,
  },
  {
    icon: UploadOutlined,
    label: <NavLink href="/dashboard/upload">Upload</NavLink>,
  },
  {
    icon: CloudOutlined,
    label: <NavLink href="/dashboard/cloud">Cloud</NavLink>,
  },
  {
    icon: LogoutOutlined,
    label: <NavLink href="/">Log Out</NavLink>,
  },
];
const items: MenuProps["items"] = menuItems.map((item, index) => ({
  key: `${index}`,
  icon: React.createElement(item.icon),
  label: item.label,
}));

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsible
        style={{
          overflow: "auto",
          height: "100vh",
        }}
      >
        <LogoCustom>
          <Avatar
            size={64}
            icon={<UserOutlined />}
            style={{ backgroundColor: "#002140" }}
          />
        </LogoCustom>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
