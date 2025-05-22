import animationData from "@/assets/lotties/loader.json";
import Lottie from "lottie-react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 150px;
    height: 150px;
  }
`;

export const Loader = () => (
  <StyledWrapper>
    <Lottie animationData={animationData} autoPlay={true} />
  </StyledWrapper>
);
