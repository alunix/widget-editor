import React from 'react';
import CloseIcon from 'components/icons/CloseIcon';
import Button from "components/button";

import {
  StyledModalBox,
  StyledModalContainer,
  StyledModalContent,
  StyledModalCloseBtn,
  StyledActions,
} from './style';

export const Modal = ({ isOpen, closeModal, children }) => {
  return(
    <StyledModalBox isOpen={isOpen}>
      <StyledModalContainer isOpen={isOpen}>
        <StyledModalContent>
          <StyledModalCloseBtn onClick={() => closeModal()}>
            <CloseIcon width="20px" height="20px" hoverColor="#C32D7B" />
          </StyledModalCloseBtn>
          {children}
          <StyledActions>
            <Button onClick={() => closeModal()} type="cta">Ok, got it!</Button>
          </StyledActions>
        </StyledModalContent>
      </StyledModalContainer>
    </StyledModalBox>
  );
}