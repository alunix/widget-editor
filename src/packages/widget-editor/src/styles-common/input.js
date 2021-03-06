import styled from "styled-components";

// TODO: Move configuration to global config file.
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 10px;

  background: #ffffff;
  border: 1px solid rgba(202, 204, 208, 0.85);
  border-radius: 4px;
  color: #393f44;
  font-size: 14px;

  &[type="number"] {
    box-sizing: content-box;
    text-align: center;
  }
`;

export default Input;
