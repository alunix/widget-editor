import React, { useState } from "react";
import styled from "styled-components";

import Button from "components/button";

import { Modal } from "components/modal"

import { FOOTER_HEIGHT } from "style-constants";

const StyledFooter = styled.footer`
  width: 100%;
  height: ${FOOTER_HEIGHT};
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Footer = ({ authenticated, onSave }) => {

  const[modalOpen, setModalOpen] = useState(false);

  return (
    <StyledFooter>
      <Modal 
        isOpen={modalOpen} 
        closeModal={() => setModalOpen(false)}
      >
        <h2>How to customize the visualization</h2>
      </Modal>
      <Button onClick={() => setModalOpen(true)} type="highlight">Need help?</Button>
      {authenticated && (
        <Button type="cta" onClick={onSave}>
          Save widget
        </Button>
      )}
    </StyledFooter>
  );
};

export default Footer;
