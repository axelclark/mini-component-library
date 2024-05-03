import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect value={value} onChange={onChange}>
        {children}
      </CustomSelect>
      <IconWrapper>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  height: 24px;
  margin: auto;
  pointer-events: none;
  color: ${COLORS.gray700};
`;

const CustomSelect = styled.select`
  position: relative;
  appearance: none;
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border: none;
  border-radius: 8px;
  width: 100%;

  &:focus {
    outline: 2px solid;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
