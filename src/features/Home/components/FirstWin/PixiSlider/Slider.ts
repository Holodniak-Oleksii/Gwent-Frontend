import { EForces } from "@/common/types";
import { RadialBlurFilter } from "pixi-filters";
import { Application, Assets, Container, Sprite } from "pixi.js";

export class Slider {
  public app: Application;
  public slides: string[];
  private activeSlide: EForces;
  private keys: EForces[];
  private sprites: Record<EForces, Sprite>;
  private radialBlur: RadialBlurFilter;
  private container: Container;
  private nextSlide: EForces | null = null;
  private transitionProgress: number = 0;

  constructor(app: Application, slides: string[]) {
    this.app = app;
    this.slides = slides;
    this.keys = Object.keys(EForces) as EForces[];
    this.sprites = {} as Record<EForces, Sprite>;
    this.activeSlide = this.keys[0];

    this.container = new Container();
    this.app.stage.addChild(this.container);

    // Ініціалізація RadialBlurFilter
    this.radialBlur = new RadialBlurFilter({
      angle: 0, // Початковий кут розмиття
      center: [0.5, 0.5], // Центр ефекту
      radius: 1, // Початковий радіус
    });

    this.container.filters = [this.radialBlur];
  }

  public async render() {
    await this.loadImages();
    this.container.addChild(this.sprites[this.activeSlide]);

    this.keys.forEach((id) => {
      document.getElementById(id)?.addEventListener("click", () => {
        this.updateActiveSprite(id);
      });
    });
  }

  public update() {
    if (this.nextSlide) {
      this.transitionProgress += 0.03;

      const oldSprite = this.sprites[this.activeSlide];
      const newSprite = this.sprites[this.nextSlide];

      oldSprite.alpha = 1 - this.transitionProgress;
      newSprite.alpha = this.transitionProgress;

      this.radialBlur.angle = 1 - this.transitionProgress;
      this.radialBlur.radius = 1 - this.transitionProgress;

      if (this.transitionProgress >= 1) {
        this.finishTransition();
      }
    }
  }

  private async loadImages() {
    for (let index = 0; index < this.keys.length; index++) {
      Assets.add({ alias: this.keys[index], src: this.slides[index] });
    }

    const textures = await Assets.load(this.keys);

    this.keys.forEach((key) => {
      const sprite = new Sprite(textures[key]);
      this.fitCover(sprite, this.app.screen.width, this.app.screen.height);
      sprite.alpha = 0;
      this.sprites[key] = sprite;
    });

    this.sprites[this.activeSlide].alpha = 1;
  }

  private fitCover(
    sprite: Sprite,
    containerWidth: number,
    containerHeight: number
  ) {
    const spriteRatio = sprite.texture.width / sprite.texture.height;
    const containerRatio = containerWidth / containerHeight;

    if (spriteRatio > containerRatio) {
      sprite.height = containerHeight;
      sprite.width = sprite.height * spriteRatio;
    } else {
      sprite.width = containerWidth;
      sprite.height = sprite.width / spriteRatio;
    }

    sprite.x = (containerWidth - sprite.width) / 2;
    sprite.y = (containerHeight - sprite.height) / 2;
  }

  private updateActiveSprite(id: EForces) {
    if (id === this.activeSlide || this.nextSlide) return;

    this.nextSlide = id;
    this.transitionProgress = 0;

    const newSprite = this.sprites[id];
    newSprite.alpha = 0;
    this.container.addChild(newSprite);
  }

  private finishTransition() {
    if (!this.nextSlide) return;

    this.container.removeChild(this.sprites[this.activeSlide]);

    this.activeSlide = this.nextSlide;
    this.nextSlide = null;

    this.radialBlur.angle = 0;
    this.radialBlur.radius = 0;
  }
}
