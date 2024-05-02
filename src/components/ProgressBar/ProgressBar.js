/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--wrapperBorderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--wrapperBorderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--wrapperBorderRadius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper style={styles}>
      <Progress size={size} style={styles} value={value}></Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--wrapperBorderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  height: var(--height);
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
  border-radius: ${({ value }) => {
    if (value < 99) {
      return "4px 0px 0px 4px";
    } else if (value >= 99 && value < 100) {
      return "4px 2px 2px 4px";
    } else if (value === 100) {
      return "4px";
    }
  }};
`;

export default ProgressBar;
