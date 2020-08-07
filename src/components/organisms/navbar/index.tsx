import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  max-width: 1300px;
  margin: 2em auto;
  padding: 0 1em;
  color: #333533;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <h1>Calorie Counter</h1>
    </Wrapper>
  );
};
