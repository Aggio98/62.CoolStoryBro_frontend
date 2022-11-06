import { Title } from "../styled";
import styled from "styled-components";
import { Spaces } from "../components/Spaces";

export const Homepage = () => {
  return (
    <Container>
      <Title>Hello there 👋</Title>
      <Spaces />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
