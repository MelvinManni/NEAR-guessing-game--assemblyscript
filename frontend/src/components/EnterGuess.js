import React from "react";
import styled from "styled-components";
import Button from "./Button";

export const Button = styled.button`
  padding: 50px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #f2f7f2;
  background: #8e5572;
`;

export default function AddContact({ contract, getGames }) {
  

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Enter contact name..."
          name="name"
        />
        <input
          type="number"
          onChange={({ target }) => setPhone(target.value)}
          placeholder="Enter contact number..."
          name="phone"
          value={phone}
        />

        <Button loading={loading} name="submit">
          Add Contact
        </Button>
      </fieldset>
    </form>
  );
}
