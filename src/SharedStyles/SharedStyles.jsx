import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 0px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Common = styled.div`
  width: 33.33333333333333%;
  margin: 20px auto;
  text-align: center;
`;

export const H1 = styled.div`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorHeader};
`;

export const ButtonProps = `
marginTop={{ base: "20px", sm:"20px",md: "20px" }}

`;
