import { EForces } from "@/common/types";
import { ShockwaveFilter } from "pixi-filters";
import { Application, Assets, Container, Sprite } from "pixi.js";

export class Slider {
  public app: Application;
  public slides: string[];
  private activeSlide: EForces;
  private keys: EForces[];
  private sprites: Record<EForces, Sprite>;
  private shockWaveFilter: ShockwaveFilter;
  private container: Container;
  private nextSlide: EForces | null = null;
  private transitionProgress: number = 0;
  private waveProgress: number = 0;

  constructor(app: Application, slides: string[]) {
    this.app = app;
    this.slides = slides;
    this.keys = Object.keys(EForces) as EForces[];
    this.sprites = {} as Record<EForces, Sprite>;
    this.activeSlide = this.keys[0];

    this.container = new Container();
    this.app.stage.addChild(this.container);

    this.shockWaveFilter = new ShockwaveFilter({
      center: {
        x: app.screen.width / 2,
        y: app.screen.height / 2,
      },
      amplitude: 300,
      wavelength: 0,
      speed: 700,
      brightness: 1,
      radius: -1,
      time: 0,
    });

    this.container.filters = [this.shockWaveFilter];
  }

  public async render() {
    await this.loadImages();
    this.container.addChild(this.sprites[this.activeSlide]);

    this.keys.forEach((id) => {
      document.getElementById(id)?.addEventListener("click", () => {
        if (!this.nextSlide) {
          this.updateActiveSprite(id);
        }
      });
    });
  }

  public update() {
    if (this.nextSlide) {
      this.transitionProgress += 0.03;
      this.waveProgress += 0.005;

      const oldSprite = this.sprites[this.activeSlide];
      const newSprite = this.sprites[this.nextSlide];

      oldSprite.alpha = 1 - this.transitionProgress;
      newSprite.alpha = this.transitionProgress;

      this.shockWaveFilter.wavelength = 300;
      this.shockWaveFilter.time += this.waveProgress;

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
    this.waveProgress = 0;

    const newSprite = this.sprites[id];
    newSprite.alpha = 0;
    this.container.addChild(newSprite);
  }

  private finishTransition() {
    if (!this.nextSlide) return;

    this.container.removeChild(this.sprites[this.activeSlide]);

    this.activeSlide = this.nextSlide;
    this.nextSlide = null;

    this.shockWaveFilter.time = 0;
    this.shockWaveFilter.wavelength = 0;
  }
}
