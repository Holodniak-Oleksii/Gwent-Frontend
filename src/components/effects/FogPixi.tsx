/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, Assets, Sprite } from "pixi.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  * {
    width: 100%;
    height: 100%;
  }
`;

export const FogPixi = () => {
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

        const texture = await Assets.load("/fog.png");

        const fogPuffs: Sprite[] = [];

        for (let i = 0; i < 20; i++) {
          const sprite = new Sprite(texture);
          const scale = 0.5 + Math.random() * 1.5;
          sprite.scale.set(scale);
          sprite.x = Math.random() * app.screen.width;
          sprite.y = Math.random() * app.screen.height;

          (sprite as any).vx = (Math.random() - 0.5) * 0.3;
          (sprite as any).vy = (Math.random() - 0.5) * 0.2;

          app.stage.addChild(sprite);
          fogPuffs.push(sprite);
        }

        app.ticker.add(() => {
          fogPuffs.forEach((sprite) => {
            // Легка зміна швидкості для природного руху
            (sprite as any).vx += (Math.random() - 0.5) * 0.005;
            (sprite as any).vy += (Math.random() - 0.5) * 0.005;

            sprite.x += (sprite as any).vx;
            sprite.y += (sprite as any).vy;

            // Інверсія напряму при досягненні меж
            if (sprite.x <= 0 || sprite.x >= app.screen.width) {
              (sprite as any).vx *= -1;
            }
            if (sprite.y <= 0 || sprite.y >= app.screen.height) {
              (sprite as any).vy *= -1;
            }
          });
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
