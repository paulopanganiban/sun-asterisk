import { FC } from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/globals";

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
const Container = styled.div``;
