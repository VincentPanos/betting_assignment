import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Main = styled.main`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 100;
  top: 0;
  max-height: 20px;
  background-color: #002ead;
  padding: 1rem;
`;

export { Container, Main, Header };
