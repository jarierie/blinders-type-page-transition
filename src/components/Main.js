import React, { useEffect, useRef } from "react";
import styled, { withTheme } from "styled-components";
import Transition from "./Transition";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 700px;
  height: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: ${(props) => props.alignment};

  p {
    font-size: 50px;
    font-weight: bolder;
    text-transform: uppercase;
  }
`;

const Main = () => {
  const ref = useRef(null);

  useEffect(() => {
    const refArray = [
      ref.current.childNodes[0].firstChild,
      ref.current.childNodes[1].firstChild,
      ref.current.childNodes[2].firstChild,
    ];

    //animation
    const animation = () => {
      const tl = gsap.timeline();
      tl.from(refArray, { y: "100%", stagger: 0.6, delay: 3 }).to(
        ref.current.parentElement,
        { backgroundColor: "#0d0d0d", color: "#f5f5f5", duration: 1 }
      );
    };

    animation();
  }, []);

  return (
    <>
      {" "}
      <Transition></Transition>
      <Container>
        <TextContainer ref={ref}>
          <TextDiv alignment={"start"}>
            <p>Nice</p>
          </TextDiv>
          <TextDiv alignment={"center"}>
            <p>Transition</p>
          </TextDiv>
          <TextDiv alignment={"flex-end"}>
            <p>Hehe</p>
          </TextDiv>
        </TextContainer>
      </Container>{" "}
    </>
  );
};

export default Main;
