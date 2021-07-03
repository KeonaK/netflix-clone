import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./cards/jumbo";
export default function App() {
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
