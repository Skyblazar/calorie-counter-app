import React from "react";
import styled from "styled-components";
import { Navbar } from "../../organisms";

interface TProps {
  children: React.ReactNode;
  showActions?: boolean;
}

const Wrapper = styled.div``;

export const PageTemplate = ({ children, showActions = false }: TProps) => {
  return (
    <Wrapper>
      <Navbar showActions={showActions} />
      <div>{children}</div>
    </Wrapper>
  );
};
