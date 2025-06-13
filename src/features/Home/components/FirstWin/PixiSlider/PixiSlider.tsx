import { Application } from "pixi.js";
import { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";

interface IPixiSliderProps {
  images: string[];
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  canvas {
    width: 100%;
    height: 100%;
  }
  div {
    position: absolute;
    inset: 0;
  }
`;

export const PixiSlider: FC<IPixiSliderProps> = ({ images }) => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const wrapperContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const initializePixi = async () => {
      if (!pixiContainer.current || !wrapperContainer.current) return;

      const app = new Application();
      await app.init({
        resizeTo: wrapperContainer.current,
      });

      appRef.current = app;
      pixiContainer.current.appendChild(app.canvas);

      const slider = new Slider(app, images);
      slider.render();

      app.ticker.add(() => {
        slider.update();
      });
    };

    if (!appRef.current) {
      initializePixi();
    }

    return () => {
      if (appRef.current) {
        appRef.current.destroy(true);
        appRef.current = null;
      }
    };
  }, []);

  return (
    <Wrapper ref={wrapperContainer}>
      <div ref={pixiContainer} />
    </Wrapper>
  );
};
