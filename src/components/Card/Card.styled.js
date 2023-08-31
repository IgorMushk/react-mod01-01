import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.isHide ? "blue" : "black")};
  /* background-color: black; */
  width: 300px;
  &: hover {
    background-color: red;
  }
`;

export const Photo = styled.img`
  width: 300px;
`;

//   ${(props) => (props.isHide ? "blue" : "black")}
