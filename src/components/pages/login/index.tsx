import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../../newStore";
import { Pagecontainer } from "../../Compound/items/isLoggedout";
import { InputField } from "../../organisms";
import { MdAccountCircle, MdEmail } from "react-icons/md";

const Logincontainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 2em;
`;

export const Login = () => {
  const { width } = useContext(Context);

  const [state, setstate] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Pagecontainer width={width}>
      <Logincontainer>
        <InputField
          type="text"
          placeholder="First Name"
          name="Firstname"
          handleChange={handleChange}
          value={state.Firstname}
          icon={<MdAccountCircle style={{ color: "white", fontSize: "24px" }} />}
        />
        <InputField
          type="text"
          placeholder="Last Name"
          name="Lastname"
          handleChange={handleChange}
          value={state.Lastname}
          icon={<MdAccountCircle style={{ color: "white", fontSize: "24px" }} />}
        />
        <InputField
          type="email"
          placeholder="Email"
          name="Email"
          handleChange={handleChange}
          value={state.Email}
          icon={<MdEmail style={{ color: "white", fontSize: "24px" }} />}
        />
      </Logincontainer>
    </Pagecontainer>
  );
};
