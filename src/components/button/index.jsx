import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  width: 10em;
  height: 3em;
  line-height: 24px;
  background-color: ${(props) => (props.primary ? "#3e6adb" : "transparent")};
  border-color: #3e6adb;
  color: ${(props) => (props.primary ? "white" : "#3e6adb")};
  font-weight: 500;
  font-family: "poppins";
  margin: 1em 2em 0em 0em;
  border: ${(props) => (props.primary ? "none" : "0,01em")};

  :hover {
    cursor: pointer;
    background-color: #3e6adb;
    color: white;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.9em;
    line-height: 21px;
  }
  @media screen and (max-width: 300px) {
    font-size: 0.7em;
  }
`;
