import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  padding: 50px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #f2f7f2;
  background: #8e5572;
  border: 0px;
  cursor: pointer;
`;

const Input = styled.button`
  max-width: 20px;
  padding: 50px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #f2f7f2;
  background: #8e5572;
  border: 0px;
`;
export default function Main({ signIn, signOut, currentUser, contract, getGames }) {
  const [guess, setGuess] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contract.playGame({
        guess: parseInt(guess),
      });
      await getGames();
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      setGuess("");
    }
  };
  return (
    <Wrapper>
      {currentUser ? (
        <>
          <h1>
            Welcome {currentUser?.accountId} <button onClick={signOut}>Logout</button>
          </h1>
          <p>Enter a number between 1-10 to play</p>

          <form style={{ marginTop: "2.5em" }} onSubmit={handleSubmit}>
            <Button>PLAY</Button>
          </form>
        </>
      ) : (
        <>
          <h1>Welcome to NEAR Guessing Game!</h1>
          <p>Sign in using your near wallet to continue.</p>

          <p style={{ marginTop: "2.5em" }}>
            <Button onClick={signIn}>Sign in</Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}
