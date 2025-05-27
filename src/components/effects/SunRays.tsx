import { Application, Container, Graphics } from "pixi.js";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  filter: blur(40px);
`;

export const SunLightEffectPixi = () => {
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

        const raysContainer = new Container();

        const numRays = 8;
        const rayLength = app.screen.width;
        const rayWidth = 80;

        for (let i = 0; i < numRays; i++) {
          const ray = new Graphics();
          const angleOffset = (i / numRays) * Math.PI * 0.5 - Math.PI * 0.4;

          ray.beginFill(0xffe066, 0.5);
          ray.moveTo(0, 0);
          ray.lineTo(rayWidth / 2, rayLength);
          ray.lineTo(-rayWidth / 2, rayLength);
          ray.endFill();

          ray.rotation = angleOffset;
          raysContainer.addChild(ray);
        }

        raysContainer.position.set(
          app.screen.width * 0.3,
          app.screen.height * -0.3
        );
        app.stage.addChild(raysContainer);

        app.ticker.add(() => {
          raysContainer.rotation += 0.0005;
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
