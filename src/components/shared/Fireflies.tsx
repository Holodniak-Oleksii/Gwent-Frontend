/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlowFilter } from "pixi-filters";
import { Application, Graphics } from "pixi.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  * {
    width: 100%;
    height: 100%;
  }
`;

export const FirefliesPixi = () => {
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

        const fireflies: Graphics[] = [];
        const palette = [0xf1ca64, 0x16cc8f, 0x00ffaa, 0xffd700, 0x5effc9];

        app.ticker.add(() => {
          if (Math.random() < 0.1) {
            const g = new Graphics();
            const size = Math.random() * 2 + 1;
            const color = palette[Math.floor(Math.random() * palette.length)];
            const direction = Math.random() < 0.5 ? -1 : 1;
            const speed = 0.5 + Math.random();

            g.fill({ color });
            g.circle(0, 0, size);
            g.endFill();

            const glow = new GlowFilter({
              distance: 10,
              outerStrength: 3,
              innerStrength: 0,
              color,
              quality: 0.5,
            });
            g.filters = [glow];

            g.x = Math.random() * app.screen.width;
            g.y = app.screen.height + 10;
            (g as any).speed = speed;
            (g as any).direction = direction;
            (g as any).scalePulse = Math.random() * 0.005 + 0.002;

            app.stage.addChild(g);
            fireflies.push(g);
          }

          for (let i = fireflies.length - 1; i >= 0; i--) {
            const f = fireflies[i];
            f.y -= (f as any).speed;
            f.x += (f as any).speed * 0.5 * (f as any).direction;

            f.scale.x +=
              Math.sin(app.ticker.lastTime * 0.005 + i) * (f as any).scalePulse;
            f.scale.y = f.scale.x;

            if (f.y < -10 || f.x < -10 || f.x > app.screen.width + 10) {
              app.stage.removeChild(f);
              fireflies.splice(i, 1);
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
