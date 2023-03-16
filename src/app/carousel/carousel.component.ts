//https://www.youtube.com/watch?v=1pN09qm5g4w

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit{
  /*
    slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      nextArrow: '<span class="slick-next"></span>',
      prevArrow: '<span class="slick-prev"></span>'
    };
  
    slides = [
      {imageSrc:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Unboxing-400x400?qlt=85&wid=1024&ts=1674120195072&$auto-jpg$&fit=constrain&dpr=off', imageAlt: "Tarifa social: até 65% de redução na conta de luz"},
      {imageSrc:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Ready-Take-Off-Niche-Markets-400x400?qlt=85&wid=1024&ts=1674120177417&$auto-jpg$&fit=constrain&dpr=off', imageAlt: "A estratégia que leva a uma nova fronteira de desenvolvimento"},
      {imageSrc:'https://dynamicmedia.accenture.com/is/image/accenture/accenture-future-proof-secure-cloud-featured-400x400?qlt=85&wid=1024&ts=1671204828906&$auto-jpg$&fit=constrain&dpr=off', imageAlt: "Dos insights às ações, o caminho para o valor 360° começa aqui"}
     
    ];
  */

  //@Input() images: couroselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  images = [
    { imageSrc: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Unboxing-400x400?qlt=85&wid=1024&ts=1674120195072&$auto-jpg$&fit=constrain&dpr=off', imageAlt: "Tarifa social: até 65% de redução na conta de luz" },
    { imageSrc: 'https://dynamicmedia.accenture.com/is/image/accenture/accenture-future-proof-secure-cloud-featured-400x400?qlt=85&wid=1024&ts=1671204828906&$auto-jpg$&fit=constrain&dpr=off', imageAlt: "Dos insights às ações, o caminho para o valor 360° começa aqui" },
    { imageSrc: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Ready-Take-Off-Niche-Markets-400x400?qlt=85&wid=1024&ts=1674120177417&$auto-jpg$&fit=constrain&dpr=off', imageAlt: "A estratégia que leva a uma nova fronteira de desenvolvimento" }
    
  ];
  
  setDisabledLeft: boolean = false;
  setDisabledRight: boolean = false;
  selectedIndex = 0

  ngOnInit(): void{
    if(this.autoSlide)
      this.autoSlideImages();
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(index: number): void {
    this.selectedIndex = index
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0)
      this.selectedIndex = this.images.length - 1 
    else
      this.selectedIndex--;
  }
  
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1)
      this.selectedIndex = 0
    else
      this.selectedIndex++;
  }
  
  onPrevClass(): string {console.log('entrou prev', this.selectedIndex)
    if (this.selectedIndex === 0){
      return 'icon-carousel-left'
    } else {
      return 'buttonColor'
    }
  }

  onNextClass(): string {console.log('entrou next', this.selectedIndex)
    if (this.selectedIndex === this.images.length - 1) {
      return 'icon-carousel-right'
    } else {
      return 'buttonColor'
    }
  }


  
}

/*<div *ngIf="images && images.length > 0" class="carousel-container">
  <img *ngFor="let image of images; let i=index"
    [src]="image.imageSrc" [alt]="image.imageAlt"
    [ngClass]="{'image-active': selectedIndex === i}">


    <div *ngIf="indicators" class="carousel-dot-container">
      <span *ngFor="let dot of images; let i=index"
        class="dot"
        [ngClass]="{'active':selectedIndex === i}"
        (click)="selectImage(i)"
      ></span>
    </div>

    <button *ngIf="controls" class="btn-carousel btn-prev" (click)="onPrevClick()">
      <i class="fas fa-arrow-circle-left icon-carousel icon-prev"></i>
    </button>

    <button *ngIf="controls" class="btn-carousel btn-next" (click)="onNextClick()">
      <i class="fas fa-arrow-circle-right icon-carousel icon-next"></i>
    </button>

</div>
 */