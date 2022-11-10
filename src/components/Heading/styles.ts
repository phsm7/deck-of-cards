import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 0 5%;
  &:only-child {
    position: fixed;
    width: 10%;
    text-transform: uppercase;
  }
`