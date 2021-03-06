import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const StyledAccordion = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const StyledAccordionContent = styled.div`
  display: "block";
  max-height: ${props => props.scrollHeight + "px" || "0"};
  overflow-y: ${props => (props.scrollHeight ? "visible" : "hidden")};
  transition: all 0.2s ease-out;
  padding-left: 24px;
  padding-top: ${props => (props.scrollHeight ? "18px" : "0" || "0")};
  padding-bottom: ${props => (props.scrollHeight ? "18px" : "0" || "0")};
`;

const StyledAccordionButton = styled.a`
  display: block;
  height: 25px;
  color: #393f44;
  /* font-family: Lato;  */
  font-size: 16px;
  font-weight: bold;
  line-height: 25px;
  position: relative;
  padding-left: 25px;
  cursor: pointer;

  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #c32d7b;
    position: absolute;
    left: 0;
    top: 8px;
  }
`;

const StyledAccordionSection = styled.div`
  padding-top: 11px;
  padding-bottom: 11px;
  position: relative;

  &:before {
    content: " ";
    height: 1px;
    width: calc(100% - 24px);
    display: block;
    position: absolute;
    top: 0;
    background-color: #d2d3d6;
    margin-left: 24px;
  }

  &:first-child {
    &:before {
      display: none;
    }
  }
`;

export const AccordionSection = ({ title, openDefault, children }) => {
  const contentRef = useRef(null);
  const [outerHeight, setOuterHeight] = useState(0);

  const clickToTitle = () => {
    const panel = contentRef.current;
    const height = outerHeight ? 0 : panel.scrollHeight;
    setOuterHeight(height);
  };

  useEffect(() => {
    if (openDefault) clickToTitle();
  }, []);

  return (
    <StyledAccordionSection>
      <StyledAccordionButton onClick={() => clickToTitle()}>
        {title}
      </StyledAccordionButton>
      <StyledAccordionContent ref={contentRef} scrollHeight={outerHeight}>
        {children}
      </StyledAccordionContent>
    </StyledAccordionSection>
  );
};

export const Accordion = ({ children }) => {
  return <StyledAccordion>{children}</StyledAccordion>;
};
