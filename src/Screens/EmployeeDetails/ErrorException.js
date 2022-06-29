import React from "react";
import styled from "styled-components";
const ErrorException = () => {
  return (
    <div>
      <Header className="text-center">
        <div
          class="display-5"
          style={{ color: "red", textAlign: "center", marginTop: "50vh" }}
        >
          Invalid Data. No employee found.
        </div>
      </Header>
    </div>
  );
};

export default ErrorException;
const Header = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
  position: relative;
  width: 50%;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
