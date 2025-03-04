import imageTexture1 from "@/assets/images/textures/1.png";
import imageTexture2 from "@/assets/images/textures/2.png";
import imageTexture3 from "@/assets/images/textures/3.png";

import { Application, Assets, Container, Sprite } from "pixi.js";
import { useEffect, useRef } from "react";

export const ShadowAnimation = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const initializePixi = async () => {
      if (!pixiContainer.current) return;

      const app = new Application();
      await app.init({
        width: 550,
        height: 400,
        antialias: true,
        backgroundAlpha: 0,
      });

      appRef.current = app;
      if (pixiContainer.current.querySelector("canvas")) return;
      pixiContainer.current.appendChild(app.canvas);

      const textures = await Promise.all([
        Assets.load(imageTexture1),
        Assets.load(imageTexture2),
        Assets.load(imageTexture3),
      ]);

      const smokeContainer = new Container();
      app.stage.addChild(smokeContainer);

      const smokeParticles: {
        sprite: Sprite;
        speed: number;
        rotationSpeed: number;
        fadeSpeed: number;
        fadeState: "fadeIn" | "fadeOut";
        delay: number;
        verticalShift: number;
      }[] = [];

      for (let i = 0; i < 30; i++) {
        const randomTexture =
          textures[Math.floor(Math.random() * textures.length)];

        const smoke = new Sprite(randomTexture);
        smoke.anchor.set(0.5);
        smoke.x = 220 + Math.random() * 80 - 40;
        smoke.y = 200 + Math.random() * 100 - 50;
        smoke.alpha = 0;
        smoke.scale.set(0.6 + Math.random() * 0.3);
        smoke.rotation = (Math.random() * 40 - 20) * (Math.PI / 180);

        smokeContainer.addChild(smoke);
        smokeParticles.push({
          sprite: smoke,
          speed: 0.6 + Math.random() * 0.5,
          rotationSpeed: Math.random() * 0.01 - 0.005,
          fadeSpeed: 0.01 + Math.random() * 0.01,
          fadeState: "fadeIn",
          delay: Math.random() * 40,
          verticalShift: Math.random() * 0.5 - 0.25,
        });
      }

      app.ticker.add(({ deltaTime: delta }) => {
        smokeParticles.forEach((smokeObj) => {
          const {
            sprite,
            speed,
            rotationSpeed,
            fadeSpeed,
            fadeState,
            delay,
            verticalShift,
          } = smokeObj;

          if (delay > 0) {
            smokeObj.delay -= delta;
            return;
          }

          sprite.x += speed * delta;
          sprite.y += verticalShift * delta;
          sprite.rotation += rotationSpeed * delta;

          if (fadeState === "fadeIn") {
            sprite.alpha += fadeSpeed * delta;
            if (sprite.alpha >= 0.8) smokeObj.fadeState = "fadeOut";
          } else {
            sprite.alpha -= fadeSpeed * delta;
          }

          if (sprite.alpha <= 0 || sprite.x < 150 || sprite.x > 550) {
            sprite.x = 220 + Math.random() * 80 - 40;
            sprite.y = 200 + Math.random() * 100 - 50;
            sprite.alpha = 0;
            sprite.scale.set(0.6 + Math.random() * 0.3);
            sprite.rotation = (Math.random() * 40 - 20) * (Math.PI / 180);
            smokeObj.fadeState = "fadeIn";
            smokeObj.delay = Math.random() * 40;
            smokeObj.verticalShift = Math.random() * 0.5 - 0.25;
          }
        });
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

  return <div ref={pixiContainer} className="shadow-container" />;
};
