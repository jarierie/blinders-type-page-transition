import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  background-color: #0d0d0d;
`;

const Panel = styled.div`
  width: 10%;
  height: 100%;
  background-color: white;

  transform: scaleX(0);
`;

const Transition = () => {
  const panelArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const ref = useRef(null);

  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes, {
      scaleX: 1,
      duration: 0.7,
    })
      .to(ref.current.childNodes, { scaleX: 0, duration: 0.1, stagger: 0.1 })
      .to(ref.current, { height: 0, delay: 0.5 })
      .to(ref.current, {
        opacity: 0,
      });
  };
  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);
  return (
    <>
      <Container ref={ref}>
        {panelArray.map(() => {
          return (
            <>
              <Panel></Panel>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Transition;
