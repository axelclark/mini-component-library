import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border": "1px solid",
    "--font-size": "14px",
    "--padding": "8px 0px 4px 24px",
    "--outline-offset": "2px",
  },
  large: {
    "--border": "2px solid",
    "--font-size": "18px",
    "--padding": "8px 0px 8px 32px",
    "--outline-offset": "4px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <Wrapper>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <NativeInput
        type="text"
        width={width}
        style={styles}
        placeholder={placeholder}
      />
      <IconWrapper>
        <Icon id={icon} size={size === "small" ? 14 : 18} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const NativeInput = styled.input`
  border: none;
  border-bottom: var(--border);
  padding: var(--padding);
  color: ${COLORS.gray700};

  &:focus {
    outline-offset: var(--outline-offset);
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: var(--font-size);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 4px;
  color: ${COLORS.gray500};
  pointer-events: none;

  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
