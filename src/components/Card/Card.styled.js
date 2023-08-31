import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.isHide ? "blue" : "black")};
  /* background-color: black; */
  width: 300px;
  &: hover {
    background-color: red;
  }
  h5 {
    color: green;
  }
  div > h5 {
    color: white;
  }
`;

export const Photo = styled.img`
  width: 300px;
`;

// export const List = styled.ul;
// export const ListItem = styled.li;

//   ${(props) => (props.isHide ? "blue" : "black")}
