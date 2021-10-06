import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const Container = styled.div`
  max-width: 996px;
  padding: 0px 20px;
  margin: auto;
`;

const ContactWrapper = styled.div`
  padding: 0 40px;
  margin-top: 40px;
  text-align: center;
`;

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [contacts, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      getGames();
    }
    // eslint-disable-next-line
  }, [currentUser?.accountId]);

  const getGames = async () => {
    setLoading(true);
    await contract.getGames().then(setGames);
    setLoading(false);
  };

  return (
    <Container>
      <Header />

      <Main
        signOut={() => {
          wallet.signOut();
          window.location.reload();
        }}
        signIn={() => {
          wallet.requestSignIn(nearConfig.contractName, "guessing-game");
        }}
      />
    </Container>
  );
};

export default App;
