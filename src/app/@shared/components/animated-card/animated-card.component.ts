import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-card',
  templateUrl: './animated-card.component.html',
  styleUrls: ['./animated-card.component.scss']
})
export class AnimatedCardComponent implements OnInit, AfterViewInit {

  @Input() images: string[] = [];
  @Input() title: string = '';
  @ViewChild('card') card: ElementRef<HTMLDivElement>;
  currentIndex = 0;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startLoop();
  }

  startLoop() {
    this.renderer.setStyle(this.card.nativeElement, "background-image", `url(${this.images[this.currentIndex]})`);
    if(this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    }
    else {
      this.currentIndex += 1;
    }
    setTimeout(() => {
      this.startLoop();
    }, 4000);
  }

}
