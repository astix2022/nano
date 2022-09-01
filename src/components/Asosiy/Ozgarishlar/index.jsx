import React from "react";
import { Container, Wrapper, Title, Block } from "./style";
import GenericCard from "../GenericCard";

const Ozgarishlar = () => {
  return (
    <Container>
      <Wrapper>
        <Title>maktabdagi o'zgarishlar</Title>
        <Block>
          <div className="div">
            <GenericCard />
            <GenericCard />
            <GenericCard />
          </div>
          <div className="line"></div>
          <div className="div">
            <GenericCard />
            <GenericCard />
            <GenericCard />
          </div>
          <div className="line"></div>
          <div className="div">
            <GenericCard />
            <GenericCard />
            <GenericCard />
          </div>
        </Block>
      </Wrapper>
    </Container>
  );
};

export default Ozgarishlar;
