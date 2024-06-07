import { Button, Flex } from "antd";
import styled from "styled-components";
export const LightningContainer = styled.section``;
export const HeaderContainer = styled.div`
  background: radial-gradient(#1f2326, #0a0c0d);
  height: 90vh;
  width: 100vw;
`;
export const MainHeader = styled.header`
  height: 100%;
  padding: 48px 128px 48px 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonCustom = styled(Button)`
  &.ant-btn-link {
    color: white;
  }
  &.ant-btn-primary {
    background-color: ${(props) => "#484e53!important"};
    color: ${(props) => "#ebebec!important"};
  }
  &.ant-btn-primary:hover {
    background-color: ${(props) => "#85898c !important"};
  }
  width: ${(props) => "fit-content"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationHeader = styled(Flex)`
  width: 100%;
`;

export const MainContainer = styled.main`
  width: 100vw;
  padding: 0 48px;
`;
