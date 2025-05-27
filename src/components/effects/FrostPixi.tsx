/* eslint-disable @typescript-eslint/no-explicit-any */
import imageBg from "@/assets/images/frost.webp";
import { Application, Assets, Sprite } from "pixi.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    to top,
    rgba(200, 230, 255, 0.3) 0%,
    rgba(200, 230, 255, 0.1) 50%,
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
    opacity: 0.3;
  }

  * {
    width: 100%;
    height: 100%;
  }
`;

export const FrostPixi = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const wrapperContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    if (!pixiContainer.current || !wrapperContainer.current) return;

    const app = new Application();
    app
      .init({ resizeTo: wrapperContainer.current, backgroundAlpha: 0 })
      .then(async () => {
        appRef.current = app;
        pixiContainer.current!.appendChild(app.canvas);

        const texture = await Assets.load("/snowflake.png");

        const frostParticles: Sprite[] = [];

        app.ticker.add(() => {
          if (Math.random() < 0.3) {
            const snowflake = new Sprite(texture);
            snowflake.anchor.set(0.5);

            const scaleX = 10 / texture.width;
            const scaleY = 10 / texture.height;
            snowflake.scale.set(scaleX, scaleY);

            snowflake.alpha = Math.random() * 0.1 + 0.5;

            const speedY = Math.random() * 1 + 0.5;
            const driftX = (Math.random() - 0.5) * 0.5;

            snowflake.x = Math.random() * app.screen.width;
            snowflake.y = -20;

            (snowflake as any).speedY = speedY;
            (snowflake as any).driftX = driftX;

            app.stage.addChild(snowflake);
            frostParticles.push(snowflake);
          }

          for (let i = frostParticles.length - 1; i >= 0; i--) {
            const s = frostParticles[i];
            s.y += (s as any).speedY;
            s.x += Math.sin(s.y / 20) * (s as any).driftX;
            s.rotation += 0.01;

            if (s.y > app.screen.height + 20) {
              app.stage.removeChild(s);
              frostParticles.splice(i, 1);
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
