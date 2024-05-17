import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #ffefba, #ffffff);
  z-index: 9999;
`;

export const OuterCircle = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #6AA73A;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = styled.div`
  border: 5px solid #6AA73A;
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: absolute;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:before,
  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6AA73A;
    position: absolute;
  }

  &:before {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
