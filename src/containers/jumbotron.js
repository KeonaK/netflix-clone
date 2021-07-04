import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../cards/jumbo";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Sec>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Sec>
          <Jumbotron.Sec>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Sec>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
