import React from "react";
import styled from "styled-components";

type IHelloComponentProps = {
  name: string;
};

const HelloComponent: React.FC<IHelloComponentProps> = ({ name }) => {
  return (
    <HelloComponentWrapper>HelloComponent name: {name}</HelloComponentWrapper>
  );
};

export default HelloComponent;

const HelloComponentWrapper = styled.div``;
