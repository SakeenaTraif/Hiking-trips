import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSearchBar = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 70%;
`;
export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const TripWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: red;
`;

export const SubTitle = styled.h3`
  text-align: center;
  color: black;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 30%;
    float: left;
    margin-right: 30px;
  }

  p {
    margin-top: 35px;
    vertical-align: middle;
    font-weight: bold;
  }
`;
