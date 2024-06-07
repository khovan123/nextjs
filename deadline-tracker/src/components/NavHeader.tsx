import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Flex } from "antd";

import * as S from "../app/styles";
const itemsButton = [
  {
    label: "Home",
    type: "primary",
  },
  {
    label: "About Us",
    type: "primary",
  },
  {
    label: "Blog",
    type: "primary",
  },
  {
    label: "Contact Us",
    type: "primary",
  },
  {
    label: "Try it now!",
    type: "link",
  },
];
export default function NavHeader() {
  return (
    <S.NavigationHeader gap="middle" align="center" justify="space-between">
      <Avatar size={64} icon={<UserOutlined />} />
      <Flex justify="center" align="center" gap={30}>
        {itemsButton.map((item) => (
          <S.ButtonCustom type={item.type} key={item.label}>
            {item.label}
          </S.ButtonCustom>
        ))}
      </Flex>
    </S.NavigationHeader>
  );
}
