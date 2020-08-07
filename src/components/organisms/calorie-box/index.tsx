import React from "react";
import styled from "styled-components";

interface TProps {
  calories: number;
}

const Wrapper = styled.div`
  padding: 1em 1.3em;
  border-radius: 100px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 80vw;
  max-width: 700px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 3em;
  margin: 1em auto;

  small {
    color: #969696;
  }
`;

export const CalorieBox = ({ calories }: TProps) => {
  return (
    <Wrapper>
      <h1>
        {calories} <small>kcal</small>
      </h1>
    </Wrapper>
  );
};
