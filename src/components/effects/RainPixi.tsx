/* eslint-disable @typescript-eslint/no-explicit-any */
import imageBg from "@/assets/images/rain.webp";
import { Application, Graphics } from "pixi.js";
import { useEffect, useRef } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    to top,
    rgba(111, 103, 255, 0.2) 0%,
    rgba(111, 103, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${imageBg});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.4;
  }
`;

export const RainPixi = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const wrapperContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    if (!pixiContainer.current || !wrapperContainer.current) return;

    const app = new Application();
    app
      .init({ resizeTo: wrapperContainer.current, backgroundAlpha: 0 })
      .then(() => {
        appRef.current = app;
        pixiContainer.current!.appendChild(app.canvas);

        const raindrops: Graphics[] = [];

        app.ticker.add(() => {
          if (Math.random() < 2) {
            const drop = new Graphics();
            const length = Math.random() * 10 + 10;
            const thickness = Math.random() * 1.2 + 0.8;
            const color = 0x0079b5;
            const speed = Math.random() * 5 + 5;

            drop.lineStyle(thickness, color, 0.8);
            drop.moveTo(0, 0);
            drop.lineTo(0, length);
            drop.endFill();

            drop.x = Math.random() * app.screen.width;
            drop.y = -length;

            (drop as any).speed = speed;

            app.stage.addChild(drop);
            raindrops.push(drop);
          }

          for (let i = raindrops.length - 1; i >= 0; i--) {
            const d = raindrops[i];
            d.y += (d as any).speed;

            if (d.y > app.screen.height + 20) {
              app.stage.removeChild(d);
              raindrops.splice(i, 1);
            }
          }
        });
      });

    return () => {
      appRef.current?.destroy(true);
      appRef.current = null;
    };
  }, []);

  return (
    <Wrapper ref={wrapperContainer}>
      <div ref={pixiContainer} />
    </Wrapper>
  );
};
